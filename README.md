# Caderno SESA · Pedagogo

Plataforma de estudo para o concurso da **Secretaria de Estado da Saúde do Amapá (SESA-AP), Edital nº 001/2026**, banca **Instituto AOCP**, cargo **472 · Pedagogo** (Região Central). Prova objetiva em **20 de dezembro de 2026, à tarde**: 60 questões, mínimo de 30 acertos.

É um site estático que pode ser instalado como app na tela de início do celular, do tablet e do computador. Depois da primeira abertura, funciona sem internet (as videoaulas precisam de conexão).

## O que tem

| Parte | Conteúdo |
|---|---|
| Início (painel) | Tempo estudado hoje e na semana, gráfico dos últimos 14 dias, mapa de constância até a prova, sequência de dias, estimativa de nota e a disciplina onde vale mais a pena reforçar. |
| Trilha | Plano até 18/12 com a rotina dela: dias da semana e tempo por dia escolhidos na própria trilha. Dá para marcar folga num dia; se ela estuda num dia fora da rotina, a trilha usa esse dia sozinha. Se atrasar ou adiantar, tudo se reorganiza. |
| Tempo de estudo | Conta sozinho enquanto ela estuda nas aulas, questões e provas. Estudo fora da plataforma (videoaula no YouTube, livro, papel) pode ser somado à mão. |
| Aulas | 49 aulas no formato **conteúdo → questões → videoaulas → resumo**: 20 de Conhecimentos Específicos, 10 de Português, 7 de SUS, 5 de Amapá, 4 de Informática e 3 de Raciocínio Lógico. |
| Questões | 392 questões inéditas no estilo AOCP (8 por aula), com comentário. As erradas voltam para revisão em 1, 3, 7 e 14 dias. |
| Flashcards | 291 cartões tirados dos resumos, com repetição espaçada: os cartões de cada aula entram na rotação quando ela conclui a aula. |
| Por que errei | Em cada erro ela marca o motivo (não sabia, confundiu, leu rápido, pegadinha, chute). O painel mostra o padrão e uma dica, e dá para refazer as questões de cada motivo. |
| Provas online | Uma prova com tempo por disciplina e um simulado completo de 60 questões em 5 horas, na divisão do edital. |
| Provas reais | Folha de respostas para três provas de pedagogo da AOCP (UNIRIO 2025, EBSERH HRL-UFS 2016 e EBSERH CH-UFPA 2016), com gabarito oficial e comentário de cada questão que cai no edital da SESA. O PDF da prova é aberto pela própria aluna. |
| Edital verticalizado | Todos os itens do Anexo II do cargo 472, com a aula que cobre cada um. |
| Backup e aparelhos | Código de backup para copiar e colar (ou arquivo), restauração e junção do progresso de dois aparelhos, instruções para instalar como app. |

## Como publicar no GitHub Pages

1. Crie um repositório **público** (no plano gratuito, o GitHub Pages só funciona em repositório público).
2. Envie para a raiz do repositório todos os arquivos desta pasta: `index.html`, `manifest.webmanifest`, `sw.js`, os quatro `.png`, `.nojekyll` e `README.md`. A pasta `fonte/` é opcional.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em um ou dois minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Depois de publicado, não mude o nome do repositório nem o seu usuário: o progresso fica guardado pelo endereço do site.

## Instalar como app

- **iPhone e iPad:** abra o link no Safari → Compartilhar → **Adicionar à Tela de Início**. Use sempre pelo ícone: o Safari e o ícone guardam progressos separados.
- **Android:** abra no Chrome → menu ⋮ → **Instalar app** (ou Adicionar à tela inicial).
- **Computador:** no Chrome ou no Edge, clique no ícone de instalar no fim da barra de endereço.

## Sobre o progresso

O progresso fica salvo no próprio aparelho (no navegador ou no app instalado). Por isso:

- cada aparelho tem o seu progresso; eles não sincronizam sozinhos;
- para levar o progresso de um aparelho para outro, use **Backup e aparelhos → Copiar código** num e **Ler backup → Juntar** no outro;
- desinstalar o app ou limpar os dados do navegador apaga o progresso daquele aparelho: faça o backup semanal (o painel avisa).

## Editar o conteúdo

A pasta `fonte/` tem o conteúdo e o montador:

- `fonte/src/c_*.js`: aulas, questões, simulado, provas reais, edital e flashcards;
- `fonte/src/app.html`: a interface;
- `fonte/src/pwa/`: ícones e service worker;
- `fonte/build.js`: junta tudo.

Depois de editar, rode `node build.js` dentro de `fonte/` (precisa do Node.js 18 ou mais novo). O site sai em `fonte/dist/github/`. O montador embaralha as alternativas de forma fixa para equilibrar as letras do gabarito e ajusta as letras citadas nos comentários.

## Fontes e avisos

- Conteúdo programático: Anexo II do Edital SESA-AP nº 001/2026 (retificado em 17/09/2026). Confira sempre datas e regras no site do Instituto AOCP.
- As aulas, as questões das aulas, os flashcards e o simulado foram escritos para esta plataforma, no estilo da banca. Não são questões oficiais.
- As provas reais não estão reproduzidas aqui: a plataforma traz só a folha de respostas, o gabarito oficial e comentários próprios. Os cadernos de prova podem ser baixados em sites de provas anteriores, como a PCI Concursos.
- As videoaulas são links para vídeos gratuitos no YouTube, de seus respectivos autores.
