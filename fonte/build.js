#!/usr/bin/env node
// Monta a plataforma em um arquivo único.
//   node build.js            -> dist/caderno-sesa.html (artefato) e dist/github/ (site estático)
//   node build.js --review   -> lista os comentários cujas letras foram remapeadas
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const REVIEW = process.argv.includes("--review");

/* ---------- carrega o conteúdo ---------- */
const ctx = { AULAS: [], SIMULADO: null, PROVAS: [], EDITAL: null, CARDS: {} };
vm.createContext(ctx);
for (const f of ["c_edital", "c_esp1", "c_esp2", "c_esp3", "c_esp4", "c_por1", "c_por2", "c_sus", "c_amp", "c_inf_rl", "c_sim", "c_provas", "c_cards1", "c_cards2"]) {
  vm.runInContext(fs.readFileSync(path.join(SRC, f + ".js"), "utf8"), ctx, { filename: f + ".js" });
}
const { AULAS, SIMULADO, PROVAS, EDITAL, CARDS } = ctx;

/* ---------- utilidades determinísticas ---------- */
function hash(str) { // FNV-1a 32 bits
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}
function rng(seed) { // mulberry32
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function shuffled(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// Sequência equilibrada de gabaritos: cada letra aparece n/5 vezes (as sobras vão para letras diferentes).
function alvos(n, seed) {
  const r = rng(hash(seed));
  const base = [];
  for (let k = 0; k < Math.floor(n / 5); k++) base.push(0, 1, 2, 3, 4);
  base.push(...shuffled([0, 1, 2, 3, 4], r).slice(0, n % 5));
  return shuffled(base, r);
}

// Alternativas numéricas ficam em ordem crescente, como a banca faz.
const NUM = /^(R\$\s?)?[−-]?\d[\d.,]*(\/\d+)?(\s?(%|°|º|ª))?(\s[a-zA-ZçÇãõéêíóúâ²³]+){0,2}\.?$/;
function ordemFixa(alts) { return alts.every(a => NUM.test(a.trim())); }

/* ---------- remapeamento das letras citadas nos comentários ---------- */
const VERBO_A = new Set(["é", "e", "ou", "descreve", "descrevem", "contradiz", "começa", "pede", "tem", "têm", "traz", "trazem", "erra", "erram", "está", "estão", "não", "lembra", "mostra", "reduz", "reduzem", "coloca", "colocam", "deveria", "deveriam", "faz", "fazem", "extrapola", "extrapolam", "confunde", "confundem", "inverte", "invertem", "mistura", "cita", "indica", "apresenta", "afirma", "diz", "usa", "generaliza", "restringe", "exagera", "limita", "corresponde", "define", "deforma", "deformam", "seria", "fica", "vale", "aponta"]);
function ehLetra(txt, i, L) {
  const antes = txt.slice(Math.max(0, i - 4), i);
  const depois = txt.slice(i + 1);
  if (/[+\-$º]\s*$/.test(antes)) return false;           // Win + D, 4º-A, $A$1
  if (/^[\d$]/.test(depois)) return false;               // B1, A$1
  if (L !== "A") return true;
  if (/^\s*[,;)]/.test(depois)) return true;            // "A, C e D"
  if (/(^|\s)(e|ou|Só|só|alternativas?|letra)\s*$/.test(txt.slice(Math.max(0, i - 14), i))) return true;
  const w = (depois.match(/^\s+([^\s,.;:]+)/) || [])[1];
  if (w === "e" || w === "ou") return /^\s+(e|ou)\s+[A-E](?![A-Za-zÀ-ú])/.test(depois);
  return w !== undefined && VERBO_A.has(w);
}
const revisao = [];
function remapeia(txt, mapa, id) {
  if (!txt) return txt;
  let mudou = false;
  const out = txt.replace(/(^|[^A-Za-zÀ-ú0-9])([A-E])(?=[^A-Za-zÀ-ú0-9]|$)/g, (m, pre, L, off) => {
    const i = off + pre.length;
    if (!ehLetra(txt, i, L)) return m;
    const novo = "ABCDE"[mapa["ABCDE".indexOf(L)]];
    if (novo !== L) mudou = true;
    return pre + novo;
  });
  if (mudou || /(^|[^A-Za-zÀ-ú0-9])[A-E](?=[^A-Za-zÀ-ú0-9]|$)/.test(txt)) revisao.push([id, txt, out]);
  return out;
}

// Embaralha uma questão para que a correta caia na posição "alvo".
function embaralha(alts, certa, alvo, seed) {
  if (ordemFixa(alts)) return { alts, certa, mapa: [0, 1, 2, 3, 4], fixa: true };
  const r = rng(hash(seed));
  const outras = shuffled([0, 1, 2, 3, 4].filter(i => i !== certa), r);
  const ordem = []; // ordem[novaPos] = posição antiga
  let k = 0;
  for (let p = 0; p < 5; p++) ordem.push(p === alvo ? certa : outras[k++]);
  const mapa = []; ordem.forEach((velha, nova) => { mapa[velha] = nova; });
  return { alts: ordem.map(i => alts[i]), certa: alvo, mapa, fixa: false };
}

const dist = [0, 0, 0, 0, 0];
let fixas = 0;
for (const a of AULAS) {
  const t = alvos(a.q.length, "aula:" + a.id);
  a.q = a.q.map((q, i) => {
    const [enun, alts, certa, com] = q;
    if (alts.some(x => /(alternativas? [A-E]\b|todas as anteriores|nenhuma das anteriores)/i.test(x))) throw new Error("alternativa que cita outra em " + a.id + "#" + i);
    const e = embaralha(alts, certa, t[i], a.id + "#" + i + enun);
    if (e.fixa) fixas++;
    dist[e.certa]++;
    return [enun, e.alts, e.certa, remapeia(com, e.mapa, a.id + "#" + i)];
  });
}
const simDist = [0, 0, 0, 0, 0];
{
  const t = alvos(SIMULADO.q.length, "sim:" + SIMULADO.id);
  SIMULADO.q = SIMULADO.q.map((q, i) => {
    const [m, enun, alts, certa, com, txt] = q;
    const e = embaralha(alts, certa, t[i], "sim#" + i + enun);
    if (e.fixa) fixas++;
    simDist[e.certa]++;
    const nq = [m, enun, e.alts, e.certa, remapeia(com, e.mapa, "SIM#" + i)];
    if (txt) nq.push(txt);
    return nq;
  });
}

/* ---------- validação ---------- */
const ids = new Set();
for (const a of AULAS) {
  if (ids.has(a.id)) throw new Error("aula duplicada " + a.id);
  ids.add(a.id);
  if (a.q.length !== 8) throw new Error(a.id + " não tem 8 questões");
  a.q.forEach((q, i) => { if (q[1].length !== 5) throw new Error(a.id + "#" + i + " sem 5 alternativas"); });
}
let ncards = 0;
for (const id in CARDS) {
  if (!ids.has(id)) throw new Error("flashcards de aula inexistente " + id);
  CARDS[id].forEach((c, i) => { if (!Array.isArray(c) || c.length !== 2 || !c[0] || !c[1]) throw new Error("flashcard inválido " + id + "#" + i); });
  ncards += CARDS[id].length;
}
const semCards = [...ids].filter(id => !CARDS[id]);
if (semCards.length) console.log("aulas sem flashcards:", semCards.join(" "));
for (const p of PROVAS) {
  if (p.g.length !== p.st.length) throw new Error(p.id + ": gabarito e status com tamanhos diferentes");
  for (const n in p.c) if (!ids.has(p.c[n][0])) throw new Error(p.id + "#" + n + " cita aula inexistente " + p.c[n][0]);
}

if (REVIEW) {
  for (const [id, a, b] of revisao) console.log(id.padEnd(8), a === b ? "=" : "*", "\n   antes:", a, "\n  depois:", b);
}
console.log("aulas", AULAS.length, "· questões", AULAS.length * 8, "· gabaritos A–E", dist.join("/"), "· simulado", simDist.join("/"), "· ordem fixa", fixas, "· comentários com letras", revisao.length, "· flashcards", ncards);

/* ---------- monta o HTML ---------- */
const DATA = { aulas: AULAS, sim: SIMULADO, provas: PROVAS, edital: EDITAL, cards: CARDS };
const json = JSON.stringify(DATA).replace(/</g, "\\u003c").split(String.fromCharCode(0x2028)).join("\\u2028").split(String.fromCharCode(0x2029)).join("\\u2029");
const tpl = fs.readFileSync(path.join(SRC, "app.html"), "utf8");
function gera(alvo) {
  return tpl.replace("/*__DATA__*/null", () => json).replace("/*__ALVO__*/\"artifact\"", JSON.stringify(alvo));
}
fs.mkdirSync(path.join(DIST, "github"), { recursive: true });
fs.writeFileSync(path.join(DIST, "caderno-sesa.html"), gera("artifact"));
const head = [
  '<!doctype html>', '<html lang="pt-BR">', '<head>', '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">',
  '<link rel="apple-touch-icon" href="apple-touch-icon.png">',
  '<meta name="theme-color" content="#0E6A5B">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="Caderno SESA">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default">', ''].join("\n");
const gh = gera("github");
const corte = gh.indexOf("</style>") + "</style>".length;
fs.writeFileSync(path.join(DIST, "github", "index.html"), head + gh.slice(0, corte) + "\n</head>\n<body>\n" + gh.slice(corte) + "\n</body>\n</html>\n");
// Arquivos para instalar como app (PWA) e funcionar sem internet
const GH = path.join(DIST, "github");
for (const f of ["icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"]) fs.copyFileSync(path.join(SRC, "pwa", f), path.join(GH, f));
fs.writeFileSync(path.join(GH, "manifest.webmanifest"), JSON.stringify({
  name: "Caderno SESA · Pedagogo", short_name: "Caderno SESA", lang: "pt-BR",
  description: "Plataforma de estudo para o concurso SESA-AP 2026, cargo 472 · Pedagogo.",
  start_url: "./#inicio", scope: "./", display: "standalone", orientation: "any",
  background_color: "#F3F4EF", theme_color: "#0E6A5B",
  icons: [
    { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    { src: "icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
  ]
}, null, 2));
const versao = hash(fs.readFileSync(path.join(GH, "index.html"), "utf8")).toString(36);
fs.writeFileSync(path.join(GH, "sw.js"), fs.readFileSync(path.join(SRC, "pwa", "sw.js"), "utf8").replace("__VERSAO__", versao));
fs.writeFileSync(path.join(GH, ".nojekyll"), "");
console.log("ok:", (fs.statSync(path.join(DIST, "caderno-sesa.html")).size / 1024).toFixed(0) + " KB");
