// Informática (I01 a I04) e Raciocínio Lógico (R01 a R03)
AULAS.push(
{
id:"I01", m:"inf", t:"Conceitos, hardware, periféricos e softwares utilitários",
ed:["I1","I2","I3","I4"],
v:[["YrDLtdP4LI4","Informática para concursos: hardware, software e periféricos"],["BWHyFtCTtf0","Memória RAM, ROM e cache"]],
obj:["Diferenciar hardware, software e firmware","Conhecer processador e tipos de memória","Classificar periféricos","Reconhecer softwares utilitários"],
s:[
["Hardware e software",[
{l:["**Hardware**: a parte física (processador, memória, teclado).","**Software**: os programas. **Sistema operacional** (Windows, Linux, Android) gerencia o computador; **aplicativos** fazem tarefas para o usuário; **utilitários** fazem manutenção e apoio.","**Firmware**: software gravado no hardware, como a **BIOS/UEFI** da placa-mãe.","**Software livre** permite usar, estudar, modificar e redistribuir (ex.: LibreOffice, Linux). Gratuito não é o mesmo que livre."]},
"**Unidades**: 1 **byte** = 8 **bits**. Depois vêm KB, MB, GB e TB, cada um cerca de mil (1.024) vezes o anterior."
]],
["Processador e memórias",[
"O **processador (CPU)** executa as instruções. Tem a **Unidade de Controle (UC)**, que coordena, e a **Unidade Lógica e Aritmética (ULA)**, que faz os cálculos, além dos **registradores**.",
{t:[["Memória","Características"],["Registradores","Dentro da CPU; as mais rápidas e menores"],["Cache","Muito rápida, entre a CPU e a RAM; guarda dados usados com frequência"],["RAM","Memória principal; **volátil** (apaga sem energia); leitura e escrita; guarda o que está em uso"],["ROM","**Não volátil**; guarda o firmware (BIOS/UEFI); principalmente leitura"],["Secundária (de massa)","HD (magnético), SSD (memória flash, mais rápido), pendrive, cartão; guarda arquivos permanentemente"],["Memória virtual","Uso de parte do disco como extensão da RAM"]]},
{a:"Hierarquia: quanto mais perto da CPU, **mais rápida, menor e mais cara** por byte. RAM é volátil; ROM não."},
"A **placa-mãe** conecta todos os componentes: soquete do processador, slots de memória e de expansão, chipset e o firmware."
]],
["Periféricos",[
{t:[["Tipo","Exemplos"],["Entrada","Teclado, mouse, scanner, microfone, webcam, leitor biométrico"],["Saída","Monitor, impressora, caixa de som, projetor"],["Entrada e saída (mistos)","Tela sensível ao toque, impressora multifuncional, headset com microfone, modem"],["Armazenamento","Pendrive, HD externo, cartão de memória (leitura e gravação)"]]},
"Conexões comuns: **USB**, **HDMI** (vídeo e áudio), **Bluetooth** e **Wi-Fi** (sem fio)."
]],
["Softwares utilitários",[
{l:["**Compactadores**: reduzem e agrupam arquivos (formatos .zip, .rar, .7z; programas como 7-Zip e WinRAR).","**Antivírus**: detectam e removem códigos maliciosos.","**Limpeza e desfragmentação de disco**: a desfragmentação ajuda em HDs; em SSD não é recomendada.","**Backup**: cópias de segurança.","**Visualizadores**: de imagem, vídeo (VLC) e PDF.","**Comunicação**: e-mail (Outlook, Thunderbird), chat e videoconferência (WhatsApp, Teams, Meet, Zoom)."]}
]]
],
r:["Hardware: físico. Software: programas (SO, aplicativos, utilitários). Firmware: BIOS/UEFI.","Software livre: usar, estudar, modificar, redistribuir.","CPU: UC (controle), ULA (cálculos), registradores.","RAM volátil (principal); ROM não volátil (firmware); cache entre CPU e RAM.","Periféricos: entrada, saída, mistos (touchscreen, multifuncional) e armazenamento.","Utilitários: compactadores, antivírus, backup, limpeza, visualizadores."],
q:[
["A memória principal do computador, volátil, que armazena temporariamente os programas e dados em uso, é a",["ROM.","RAM.","memória flash do pendrive.","BIOS.","HD."],1,"A RAM é a memória principal e volátil."],
["O componente do processador responsável pelos cálculos aritméticos e pelas operações lógicas é a",["Unidade de Controle.","Unidade Lógica e Aritmética.","memória cache.","placa de vídeo.","fonte de alimentação."],1,"A ULA faz os cálculos; a UC coordena."],
["A memória que armazena o firmware de inicialização do computador e não perde seu conteúdo quando o equipamento é desligado é a",["RAM.","cache.","ROM.","memória virtual.","registrador."],2,"A ROM é não volátil e guarda o firmware (BIOS/UEFI)."],
["São exemplos de periféricos de entrada e saída (mistos):",["teclado e mouse.","monitor e caixa de som.","tela sensível ao toque e impressora multifuncional.","scanner e microfone.","projetor e impressora a laser."],2,"Tela sensível ao toque e multifuncional enviam e recebem dados."],
["Um byte corresponde a",["2 bits.","4 bits.","8 bits.","16 bits.","1.024 bits."],2,"1 byte = 8 bits."],
["Sobre software livre, é correto afirmar que",["é sempre pago.","permite ao usuário usar, estudar, modificar e redistribuir o programa.","não pode ser instalado em computadores públicos.","é sinônimo de freeware.","não tem código-fonte disponível."],1,"Essas são as liberdades do software livre. Freeware é gratuito, mas pode ser fechado."],
["Os programas 7-Zip e WinRAR são exemplos de",["navegadores.","sistemas operacionais.","compactadores de arquivos.","editores de texto.","antivírus."],2,"Compactam e agrupam arquivos em formatos como .zip, .rar e .7z."],
["Assinale a alternativa que ordena corretamente as memórias da mais rápida para a mais lenta.",["HD, RAM, cache, registradores.","Registradores, cache, RAM, HD.","Cache, registradores, HD, RAM.","RAM, HD, cache, registradores.","HD, cache, RAM, registradores."],1,"Registradores > cache > RAM > armazenamento secundário."]
]
},
{
id:"I02", m:"inf", t:"Windows 10 e 11",
ed:["I5"],
v:[["gGyyNiNuVdY","Informática para concursos: Windows 11 (Prof. Alan Souza)"],["9r5VY7ph37Y","Atalhos do Windows que caem em todo concurso"]],
obj:["Reconhecer as novidades do Windows 11","Usar o Explorador de Arquivos e a Lixeira","Dominar os atalhos mais cobrados","Entender copiar, mover e criar atalho com o mouse"],
s:[
["O que mudou no Windows 11",[
{l:["**Menu Iniciar centralizado** na barra de tarefas (pode ser alinhado à esquerda).","**Configurações Rápidas**: rede, volume e bateria ficam num único botão; um clique abre o painel com Wi-Fi, Bluetooth, brilho e volume (**Win + A**).","Clicar na **data e hora** abre a **central de notificações** com o calendário (**Win + N**).","**Layouts de ajuste (Snap Layouts)** para organizar janelas (**Win + Z**).","**Widgets** (**Win + W**).","**Explorador de Arquivos com abas**.","O botão **Mostrar área de trabalho** continua no canto direito da barra."]},
"No Windows 10, a **Central de Ações** (**Win + A**) reunia notificações e ações rápidas, e o menu Iniciar tinha **blocos dinâmicos**."
]],
["Explorador de Arquivos e Lixeira",[
{l:["**Win + E** abre o Explorador. Lá estão Este Computador, pastas, unidades e Rede.","Nomes de arquivos **não podem** conter: \\ / : * ? \" < > |","Arquivos excluídos de unidades internas vão para a **Lixeira** e podem ser restaurados.","**Shift + Delete** exclui permanentemente, sem passar pela Lixeira.","Arquivos excluídos de **pendrive** ou da **rede** em geral não vão para a Lixeira.","Excluir um **atalho** não exclui o arquivo original."]},
{t:[["Ação com o mouse","Resultado"],["Arrastar na mesma unidade","Move"],["Arrastar para outra unidade","Copia"],["Ctrl + arrastar","Copia"],["Shift + arrastar","Move"],["Alt + arrastar","Cria atalho"]]}
]],
["Atalhos mais cobrados",[
{t:[["Atalho","Função"],["Ctrl + C / Ctrl + X / Ctrl + V","Copiar / recortar / colar"],["Ctrl + Z / Ctrl + Y","Desfazer / refazer"],["Ctrl + A","Selecionar tudo"],["F2","Renomear"],["F5","Atualizar"],["Alt + Tab","Alternar entre janelas"],["Alt + F4","Fechar a janela ativa"],["Win + D","Mostrar a área de trabalho"],["Win + E","Explorador de Arquivos"],["Win + L","Bloquear o computador"],["Win + I","Configurações"],["Win + R","Executar"],["Win + V","Histórico da área de transferência"],["Win + Shift + S","Captura de tela (Ferramenta de Captura)"],["Win + Tab","Visão de tarefas"],["Win + Ctrl + D","Nova área de trabalho virtual"],["Win + X","Menu de links rápidos"],["Ctrl + Shift + Esc","Gerenciador de Tarefas"]]}
]]
],
r:["Windows 11: Iniciar centralizado, Configurações Rápidas (Win+A), notificações e calendário (Win+N), Snap Layouts (Win+Z), widgets, Explorador com abas.","Lixeira: exclusões de unidades internas. Shift+Delete apaga de vez. Pendrive e rede não vão para a Lixeira.","Arrastar: mesma unidade move, outra unidade copia; Ctrl copia, Shift move, Alt cria atalho.","Win+D, Win+E, Win+L, Win+I, Win+R, Win+V, Win+Shift+S, Ctrl+Shift+Esc."],
q:[
["No Windows 11, ao clicar com o botão esquerdo sobre os ícones de rede, volume e bateria na barra de tarefas,",["abre-se o Painel de Controle.","abre-se o painel de Configurações Rápidas, que permite ajustar conexões, volume e brilho.","o computador é bloqueado.","abre-se o Gerenciador de Tarefas.","nada acontece, pois os ícones são apenas informativos."],1,"No Windows 11 esses ícones foram unificados e abrem as Configurações Rápidas."],
["O atalho que mostra a área de trabalho, minimizando todas as janelas, é",["Win + L.","Win + E.","Win + D.","Alt + F4.","Ctrl + Esc."],2,"Win + D mostra a área de trabalho. Win + L bloqueia; Win + E abre o Explorador."],
["Para excluir um arquivo permanentemente, sem enviá-lo à Lixeira, utiliza-se",["Delete.","Ctrl + Delete.","Shift + Delete.","Alt + Delete.","F2."],2,"Shift + Delete exclui permanentemente."],
["No Explorador de Arquivos, ao arrastar um arquivo com o mouse de uma pasta do disco C: para um pendrive, sem pressionar teclas, o arquivo será",["movido.","copiado.","excluído.","renomeado.","compactado."],1,"Entre unidades diferentes, arrastar copia. Na mesma unidade, move."],
["O atalho do Windows que abre o histórico da área de transferência é",["Win + V.","Ctrl + V.","Win + C.","Ctrl + Shift + V.","Alt + V."],0,"Win + V mostra o histórico de itens copiados (se ativado)."],
["Assinale a alternativa que apresenta um caractere NÃO permitido em nomes de arquivos no Windows.",["Hífen (-).","Sublinhado (_).","Ponto de interrogação (?).","Parênteses ( ).","Número."],2,"Não são permitidos: \\ / : * ? \" < > |."],
["Para capturar uma parte da tela com a Ferramenta de Captura, o atalho é",["Print Screen + Ctrl.","Win + Shift + S.","Ctrl + P.","Alt + Print Screen apenas.","Win + S."],1,"Win + Shift + S abre a captura de recorte."],
["Sobre a exclusão de um atalho na área de trabalho, é correto afirmar que",["exclui também o arquivo original.","apaga o programa do computador.","remove apenas o atalho, mantendo o arquivo ou programa original.","não é permitida.","exige permissão de administrador sempre."],2,"O atalho é só um apontador; o original permanece."]
]
},
{
id:"I03", m:"inf", t:"LibreOffice (Writer, Calc e Impress) e WPS Office",
ed:["I6","I7"],
v:[["oxdtB6EZAGs","LibreOffice Calc para concursos (Rodrigo Schaeffer)"],["7LnGS-toA10","Revisão de teclas de atalho do LibreOffice com questões"]],
obj:["Conhecer a suíte LibreOffice e seus formatos","Dominar os atalhos do Writer","Escrever fórmulas e funções no Calc","Diferenciar transição e animação no Impress e conhecer o WPS"],
s:[
["A suíte",[
{t:[["Programa","Para que serve","Formato padrão"],["Writer","Textos","**.odt**"],["Calc","Planilhas","**.ods**"],["Impress","Apresentações","**.odp**"],["Draw","Desenhos e diagramas",".odg"],["Base","Banco de dados",".odb"]]},
"O LibreOffice é **livre e gratuito**. Usa o formato aberto **ODF**, mas abre e salva arquivos do Microsoft Office (.docx, .xlsx, .pptx) e **exporta direto para PDF**.",
"O **WPS Office** é uma suíte gratuita (com anúncios) muito parecida com o Microsoft Office, compatível com seus formatos, com editor de texto, planilhas, apresentações e PDF."
]],
["Writer: atalhos",[
{t:[["Atalho","Função"],["Ctrl + B","Negrito"],["Ctrl + I","Itálico"],["Ctrl + U","Sublinhado"],["Ctrl + E","Centralizar"],["Ctrl + L / Ctrl + R / Ctrl + J","Alinhar à esquerda / à direita / justificar"],["Ctrl + S","Salvar"],["Ctrl + N / Ctrl + O","Novo / abrir"],["Ctrl + P","Imprimir"],["Ctrl + F / Ctrl + H","Localizar / localizar e substituir"],["Ctrl + Enter","Quebra de página"],["F7","Ortografia"],["Ctrl + F12","Inserir tabela"],["F5","Navegador"]]},
{a:"No LibreOffice o negrito é **Ctrl + B**; no Word em português é **Ctrl + N**. No LibreOffice, Ctrl + N cria um documento novo."},
"Os **estilos** de título (Título 1, Título 2) permitem gerar **sumário automático**. O **Clonar formatação** (pincel) copia a formatação de um trecho para outro."
]],
["Calc: fórmulas e funções",[
"Toda fórmula começa com **=**. Os argumentos são separados por **;** e os intervalos por **:**.",
{t:[["Função","O que faz","Exemplo"],["SOMA","Soma valores","=SOMA(A1:A10)"],["MÉDIA","Média aritmética","=MÉDIA(B2:B8)"],["MÁXIMO / MÍNIMO","Maior / menor valor","=MÁXIMO(C1:C5)"],["CONT.NÚM","Conta células com números","=CONT.NÚM(A1:A20)"],["CONT.VALORES","Conta células não vazias","=CONT.VALORES(A1:A20)"],["CONT.SE","Conta células que atendem a um critério","=CONT.SE(B2:B31;\"Home Office\")"],["SOMASE","Soma conforme um critério","=SOMASE(A2:A10;\"Pago\";B2:B10)"],["SE","Teste lógico","=SE(A1>=30;\"Aprovada\";\"Reprovada\")"],["PROCV","Procura na primeira coluna e devolve outra coluna","=PROCV(E2;A2:C50;3;0)"],["HOJE / AGORA","Data atual / data e hora","=HOJE()"]]},
{l:["**Referência relativa** (A1) muda ao copiar a fórmula; **absoluta** ($A$1) não muda; **mista** ($A1 ou A$1) trava só a coluna ou só a linha.","No Calc, **Shift + F4** alterna os tipos de referência (no Excel é F4).","Referência a outra planilha no Calc usa ponto: **Planilha2.A1** (no Excel: Planilha2!A1).","**&** concatena textos. **^** é potência.","Erros: **#DIV/0!** (divisão por zero), **#NOME?** (nome de função errado), **#REF!** (referência inválida), **###** (coluna estreita)."]}
]],
["Impress",[
{l:["**Transição**: efeito na passagem de um slide para outro.","**Animação**: efeito aplicado a um objeto dentro do slide.","**F5** inicia a apresentação do primeiro slide; **Shift + F5**, do slide atual.","**Slide mestre** define o padrão visual de todos os slides.","Modos de exibição: Normal, Estrutura de tópicos, Notas e Classificador de slides."]}
]]
],
r:["Writer .odt, Calc .ods, Impress .odp; formato ODF; exporta PDF; abre arquivos do MS Office.","WPS: suíte gratuita compatível com o MS Office.","LibreOffice: Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado, Ctrl+E centraliza, Ctrl+S salva.","Calc: = inicia fórmula; ; separa argumentos; : indica intervalo.","SOMA, MÉDIA, CONT.SE, SOMASE, SE, PROCV. Relativa × absoluta ($). Shift+F4 no Calc.","Transição (entre slides) × animação (objetos). F5 do início; Shift+F5 do atual."],
q:[
["O formato padrão de arquivo do LibreOffice Writer é",[".docx.",".odt.",".ods.",".odp.",".txt."],1,"Writer salva em .odt; Calc em .ods; Impress em .odp."],
["No LibreOffice Writer, o atalho para aplicar negrito ao texto selecionado é",["Ctrl + N.","Ctrl + B.","Ctrl + G.","Ctrl + E.","Ctrl + S."],1,"No LibreOffice, Ctrl + B. No Word em português é Ctrl + N."],
["Em uma planilha, a coluna B registra o status de cada dia (“Presencial” ou “Home Office”). Para contar quantos dias foram de “Home Office”, a função adequada é",["SOMA.","CONT.SE.","PROCV.","MÁXIMO.","CLASSIFICAR."],1,"CONT.SE conta as células que atendem a um critério."],
["No LibreOffice Calc, a fórmula =SE(A1>=30;\"Aprovada\";\"Eliminada\"), com o valor 28 em A1, retorna",["Aprovada.","Eliminada.","28.","VERDADEIRO.","#NOME?"],1,"28 não é maior ou igual a 30: o teste é falso e retorna o terceiro argumento."],
["Ao copiar a fórmula =$A$1*B1 da célula C1 para a célula C2, a nova fórmula será",["=$A$1*B1.","=$A$2*B2.","=$A$1*B2.","=A2*B2.","=$A$1*C2."],2,"$A$1 é absoluta e não muda; B1 é relativa e vira B2."],
["No LibreOffice Impress, o efeito aplicado na passagem de um slide para o seguinte é chamado de",["animação personalizada.","transição de slides.","slide mestre.","layout.","marcador."],1,"Transição é entre slides; animação é em objetos."],
["Para iniciar a apresentação a partir do slide atual no LibreOffice Impress, usa-se",["F5.","Shift + F5.","Ctrl + F5.","F7.","Alt + F5."],1,"F5 começa do primeiro slide; Shift + F5, do atual."],
["Sobre o LibreOffice, é correto afirmar que",["é um software proprietário pago.","não consegue abrir arquivos do Microsoft Office.","é livre e gratuito, usa o formato ODF e permite exportar documentos diretamente para PDF.","só funciona no sistema Linux.","não possui editor de planilhas."],2,"O LibreOffice é livre, gratuito, multiplataforma e exporta PDF."]
]
},
{
id:"I04", m:"inf", t:"Internet, navegadores, segurança e ferramentas Google",
ed:["I8","I9","I10","I11"],
v:[["STDeZe68aS8","Navegadores da internet (Rodrigo Schaeffer)"],["K2aUdyJpd8k","Segurança da informação para concursos"]],
obj:["Diferenciar internet, intranet e protocolos","Usar atalhos e recursos dos navegadores","Reconhecer malwares e golpes","Usar Gmail, Drive, Docs, Formulários, Meet e Agenda"],
s:[
["Internet e protocolos",[
{l:["**Internet**: rede mundial. **Intranet**: rede privada de uma organização, com as mesmas tecnologias da internet. **Extranet**: parte da intranet aberta a parceiros.","**HTTP** carrega páginas; **HTTPS** faz o mesmo com **criptografia** (cadeado na barra de endereço).","**DNS** traduz nomes (gov.br) em endereços IP.","E-mail: **SMTP** envia; **POP3** e **IMAP** recebem (o IMAP sincroniza com o servidor).","**URL** é o endereço: protocolo://domínio/caminho."]},
{t:[["Busca no Google","Efeito"],["\"frase exata\"","Busca a frase exata"],["-palavra","Exclui a palavra"],["site:gov.br","Busca só naquele site ou domínio"],["filetype:pdf","Busca por tipo de arquivo"],["OR","Uma palavra ou outra"]]}
]],
["Navegadores",[
{l:["**Chrome** (Google): a barra de endereço, chamada **Omnibox**, aceita endereços e pesquisas; tem **leitor de PDF** e **tradução** integrados; **não exige login** com conta Google.","**Edge** (Microsoft): baseado no Chromium; substituiu o Internet Explorer, encerrado em 2022.","**Firefox** (Mozilla): código aberto."]},
{t:[["Atalho","Função"],["Ctrl + T","Nova guia"],["Ctrl + W","Fechar guia"],["Ctrl + Shift + T","Reabrir guia fechada"],["Ctrl + Shift + N","Janela anônima (Chrome) / InPrivate (Edge)"],["Ctrl + Shift + P","Janela privativa (Firefox)"],["Ctrl + H / Ctrl + J","Histórico / downloads"],["Ctrl + D","Adicionar aos favoritos"],["F5 / Ctrl + F5","Atualizar / atualizar sem cache"],["Ctrl + L","Ir para a barra de endereço"]]},
{a:"A navegação anônima **não salva** histórico, cookies e dados de formulário no computador depois que a janela é fechada. Ela **não esconde** a navegação do provedor de internet, da empresa ou dos sites. Downloads e favoritos criados continuam."}
]],
["Segurança",[
{t:[["Ameaça","Como age"],["Vírus","Se anexa a arquivos e precisa ser executado para se espalhar"],["Worm","Se propaga sozinho pela rede, explorando falhas"],["Cavalo de Troia","Parece um programa legítimo e abre caminho para outros ataques"],["Ransomware","Criptografa os dados e exige resgate"],["Spyware / keylogger","Espiona; o keylogger registra o que é digitado"],["Phishing","Mensagem ou site falso que engana para roubar dados"],["Pharming","Redireciona o endereço verdadeiro para um site falso"]]},
{l:["Proteção: antivírus atualizado, **firewall** (filtra o tráfego da rede), atualizações do sistema, senhas fortes e diferentes, **verificação em duas etapas**, **backup**.","Desconfie de links e anexos inesperados; confira o **https** e o domínio antes de digitar senha ou cartão.","Princípios da segurança da informação: **confidencialidade**, **integridade** e **disponibilidade**, além da **autenticidade**."]}
]],
["Ferramentas Google",[
{l:["**Gmail**: usa **marcadores** em vez de pastas; **Cc** envia cópia visível e **Cco** cópia oculta; filtros e spam. O espaço gratuito (15 GB) é **compartilhado** com Drive e Fotos.","**Drive**: armazenamento em nuvem; compartilhamento com permissão de **leitor**, **comentarista** ou **editor**.","**Documentos, Planilhas e Apresentações**: edição **simultânea** por várias pessoas, salvamento automático, comentários e **histórico de versões**.","**Formulários**: questionários; as respostas aparecem em resumo com gráficos e podem ir para uma planilha.","**Meet**: videoconferência. **Agenda**: eventos, convites e lembretes."]}
]]
],
r:["Internet × intranet × extranet. HTTPS = criptografia (cadeado). DNS traduz nomes. SMTP envia; POP3/IMAP recebem.","Busca: aspas, menos, site:, filetype:, OR.","Chrome: Omnibox, PDF e tradução nativos, login opcional. Edge substituiu o IE.","Anônima: não guarda histórico local, mas não esconde do provedor.","Vírus precisa de execução; worm se propaga sozinho; ransomware pede resgate; phishing engana.","Gmail: marcadores, Cc/Cco, 15 GB compartilhados. Drive: leitor, comentarista, editor. Docs: edição simultânea e histórico."],
q:[
["Ao acessar um site para digitar dados bancários, o indicativo de conexão segura é",["o endereço começar com http:// e não exibir cadeado.","o endereço começar com https:// e exibir um cadeado na barra de endereço.","a página ter muitas imagens.","a barra de endereço ficar vermelha.","o site ter sido aberto por um link recebido por e-mail."],1,"HTTPS com cadeado indica comunicação criptografada. Mesmo assim, confira o domínio."],
["Sobre o Google Chrome em uma instalação padrão, assinale a alternativa INCORRETA.",["A Omnibox permite digitar endereços e fazer pesquisas.","O navegador abre arquivos PDF sem leitor externo.","A navegação anônima não garante anonimato perante o provedor de internet.","O recurso de tradução pode oferecer a tradução de páginas em outro idioma.","É obrigatório fazer login com uma Conta Google para usar o navegador."],4,"O login é opcional. As demais afirmações estão corretas."],
["O malware que se propaga automaticamente pela rede, explorando vulnerabilidades, sem precisar ser executado pelo usuário, é o",["vírus.","worm.","cavalo de Troia.","adware.","keylogger."],1,"O worm se propaga sozinho. O vírus depende de execução do arquivo infectado."],
["O tipo de ataque que criptografa os arquivos da vítima e exige pagamento para liberá-los é o",["phishing.","spyware.","ransomware.","pharming.","spam."],2,"Ransomware sequestra dados e cobra resgate."],
["Uma mensagem que imita o banco e pede que o usuário clique num link para “atualizar seus dados” caracteriza",["firewall.","phishing.","backup.","criptografia.","worm."],1,"Phishing é golpe por mensagem ou site falso para roubar dados."],
["No Gmail, para enviar uma cópia da mensagem a um destinatário sem que os demais saibam, usa-se o campo",["Para.","Cc.","Cco.","Assunto.","Marcador."],2,"Cco é cópia oculta."],
["No Google Docs, é correto afirmar que",["só uma pessoa pode editar o documento por vez.","o documento precisa ser salvo manualmente a cada alteração.","várias pessoas podem editar simultaneamente, e há histórico de versões.","não é possível inserir comentários.","os arquivos ficam apenas no computador do usuário."],2,"Edição simultânea, salvamento automático, comentários e histórico de versões."],
["Na pesquisa do Google, para buscar apenas resultados dentro de sites do governo brasileiro, utiliza-se",["\"gov.br\".","site:gov.br.","filetype:gov.br.","-gov.br.","gov.br OR."],1,"O operador site: restringe a busca a um domínio."]
]
},
{
id:"R01", m:"rl", t:"Frações, porcentagem, razão e proporção",
ed:["R1","R3","R7","R8"],
v:[["S0nPZnq7ApM","Matemática para concursos: porcentagem passo a passo"],["F88XEI5fW8s","Porcentagem: aumentos e descontos sucessivos"]],
obj:["Operar com frações e calcular fração de uma quantidade","Calcular porcentagens com fatores","Resolver aumentos e descontos sucessivos","Usar razão, proporção e divisão proporcional"],
s:[
["Frações",[
{l:["**Fração de uma quantidade**: divida pelo denominador e multiplique pelo numerador. 2/5 de 200 = 200 ÷ 5 × 2 = **80**.","**Somar e subtrair**: iguale os denominadores (MMC). 1/2 + 1/3 = 3/6 + 2/6 = **5/6**.","**Multiplicar**: numerador × numerador e denominador × denominador.","**Dividir**: multiplique pela fração invertida. (1/2) ÷ (1/4) = 1/2 × 4 = **2**."]},
{ex:"Um jarro foi esvaziado até ficar com 2/7 da capacidade, restando 300 mL. Então 2/7 da capacidade = 300 mL; 1/7 = 150 mL; capacidade = 7 × 150 = **1.050 mL**."}
]],
["Porcentagem",[
"x% = x/100. Para calcular, transforme em decimal: 15% = 0,15.",
{t:[["Situação","Fator","Exemplo"],["Aumento de 20%","× 1,20","100 → 120"],["Desconto de 15%","× 0,85","200 → 170"],["Aumentos ou descontos sucessivos","Multiplique os fatores","Desconto de 20% e depois 30%: 0,8 × 0,7 = 0,56"]]},
{a:"Descontos sucessivos de 20% e 30% **não** somam 50%. O preço final é 56% do inicial (14/25), ou seja, desconto total de 44%. Subir 10% e depois descer 10% não volta ao valor: 1,1 × 0,9 = 0,99."},
"**Variação percentual** = (valor novo − valor antigo) ÷ valor antigo × 100."
]],
["Razão e proporção",[
{l:["**Razão** é a divisão entre duas grandezas: 3 meninos para 2 meninas = 3/2.","**Proporção** é a igualdade entre duas razões: a/b = c/d, com a·d = b·c (multiplicação cruzada).","**Divisão proporcional**: dividir 120 em partes proporcionais a 2 e 3 → total de partes 5; cada parte vale 24; resultado **48 e 72**."]}
]]
],
r:["Fração de quantidade: ÷ denominador × numerador.","Soma de frações: MMC. Divisão: multiplicar pelo inverso.","Aumento de i%: × (1 + i). Desconto de i%: × (1 − i).","Sucessivos: multiplicar os fatores (20% e 30% de desconto = 0,56).","Proporção: produto cruzado. Divisão proporcional: some as partes e divida."],
q:[
["Uma blusa custava R$ 200,00 e foi vendida com desconto de 15% para pagamento à vista. O valor pago foi",["R$ 150,00.","R$ 160,00.","R$ 165,00.","R$ 170,00.","R$ 185,00."],3,"200 × 0,85 = 170."],
["Uma mercadoria sofreu um desconto de 20% e, sobre o novo preço, outro desconto de 30%. Ao final, o preço corresponde a que fração do preço inicial?",["1/2.","14/25.","3/50.","29/16.","100/30."],1,"0,8 × 0,7 = 0,56 = 56/100 = 14/25."],
["Um jarro cheio de suco foi esvaziado até ficar com 2/7 da sua capacidade, restando 300 mL. A capacidade total do jarro é",["850 mL.","900 mL.","1.000 mL.","1.050 mL.","1.200 mL."],3,"2/7 = 300 mL → 1/7 = 150 mL → 7/7 = 1.050 mL."],
["Quanto é 3/4 de 2/5 de 400?",["80.","100.","120.","150.","240."],2,"2/5 de 400 = 160; 3/4 de 160 = 120."],
["Um salário de R$ 2.000,00 teve aumento de 10% e, no mês seguinte, redução de 10%. O valor final é",["R$ 2.000,00.","R$ 1.980,00.","R$ 2.020,00.","R$ 1.800,00.","R$ 2.200,00."],1,"2.000 × 1,1 × 0,9 = 1.980."],
["Em uma classe hospitalar, a razão entre o número de meninos e de meninas é 3/2. Se há 10 meninas, o número de meninos é",["12.","13.","15.","18.","20."],2,"3/2 = x/10 → x = 15."],
["Dividindo R$ 120,00 entre duas crianças, em partes diretamente proporcionais a 2 e 3, as partes serão",["R$ 40,00 e R$ 80,00.","R$ 48,00 e R$ 72,00.","R$ 50,00 e R$ 70,00.","R$ 60,00 e R$ 60,00.","R$ 24,00 e R$ 96,00."],1,"Total de 5 partes: 120 ÷ 5 = 24; 2 × 24 = 48 e 3 × 24 = 72."],
["Um preço passou de R$ 80,00 para R$ 100,00. O aumento percentual foi de",["20%.","25%.","30%.","15%.","80%."],1,"(100 − 80) ÷ 80 = 20 ÷ 80 = 0,25 = 25%."]
]
},
{
id:"R02", m:"rl", t:"Regra de três, equações, sistemas e função de 1º grau",
ed:["R5","R6","R9","R10","R11"],
v:[["CQFFaa9fmS0","Regra de três simples e composta"],["BxGoikTpDm0","Regra de três composta: questões de concurso resolvidas"]],
obj:["Identificar grandezas diretas e inversas","Resolver regra de três simples e composta","Montar e resolver equações e sistemas de 1º grau","Interpretar a função afim f(x) = ax + b"],
s:[
["Grandezas e regra de três simples",[
{l:["**Diretamente proporcionais**: uma aumenta e a outra também (mais horas, mais páginas).","**Inversamente proporcionais**: uma aumenta e a outra diminui (mais impressoras, menos tempo)."]},
{ex:"A impressora A imprime 3 páginas enquanto a B imprime 2. A leva 40 minutos para um lote. B é mais lenta, então leva mais tempo (grandezas inversas): tempo de B = 40 × 3 ÷ 2 = **60 minutos**."},
"Passo a passo: monte a tabela, compare o sentido das grandezas, multiplique cruzado se forem diretas ou em linha se forem inversas."
]],
["Regra de três composta",[
"Coloque a incógnita numa coluna e compare **cada** grandeza com ela, separadamente. Inverta as que forem inversas e monte uma única proporção.",
{ex:"6 pedagogos atendem 30 crianças em 5 dias. Quantos dias 3 pedagogos levam para atender 60 crianças? Dias × pedagogos: inversa (menos pedagogos, mais dias). Dias × crianças: direta (mais crianças, mais dias). x = 5 × (6/3) × (60/30) = 5 × 2 × 2 = **20 dias**."}
]],
["Equações e sistemas",[
{l:["**Equação de 1º grau**: isole o x. “Um número somado ao seu dobro dá 36” → x + 2x = 36 → x = **12**.","**Sistemas**: use substituição ou adição. x + y = 12 e x − y = 4 → somando, 2x = 16, x = 8 e y = 4."]},
{ex:"Mistura: quantos litros de solução A (20% de álcool) e B (50%) formam 12 L a 30%? a + b = 12 e 0,2a + 0,5b = 3,6. Substituindo b = 12 − a: 0,2a + 6 − 0,5a = 3,6 → a = **8 L** e b = **4 L**."}
]],
["Função de 1º grau (afim)",[
"f(x) = **a**x + **b**. O **a** (coeficiente angular) é a taxa de variação: se a > 0 a função cresce; se a < 0, decresce. O **b** (coeficiente linear) é o valor quando x = 0, onde a reta corta o eixo y. A raiz é x = −b/a.",
{ex:"Táxi: R$ 5,00 de bandeirada + R$ 2,50 por km → f(x) = 2,5x + 5. Para 10 km: 2,5 × 10 + 5 = **R$ 30,00**."}
]]
],
r:["Diretas: mesmo sentido; inversas: sentidos opostos.","Simples: produto cruzado (direta) ou em linha (inversa).","Composta: compare cada grandeza com a incógnita; inverta as inversas.","Equação: isole x. Sistema: substituição ou adição.","f(x) = ax + b: a é a taxa (crescente se a > 0); b é o ponto em que corta o eixo y; raiz −b/a."],
q:[
["A impressora A imprime 3 páginas enquanto a impressora B imprime 2. Se A leva 40 minutos para imprimir um lote sozinha, B levará",["cerca de 27 minutos.","entre 30 e 40 minutos.","60 minutos.","70 minutos.","mais de 80 minutos."],2,"A segunda impressora é mais lenta: 40 × 3 ÷ 2 = 60 minutos."],
["Se 4 enfermeiras organizam uma ala em 6 horas, 3 enfermeiras, no mesmo ritmo, levarão",["4 horas e 30 minutos.","6 horas.","7 horas.","8 horas.","9 horas."],3,"Inversa: 6 × 4 ÷ 3 = 8 horas."],
["Seis pedagogos atendem 30 crianças em 5 dias. Mantido o ritmo, três pedagogos atenderão 60 crianças em",["5 dias.","10 dias.","15 dias.","20 dias.","25 dias."],3,"5 × (6/3) × (60/30) = 20 dias."],
["Um número somado ao seu triplo resulta em 48. Esse número é",["10.","12.","14.","16.","24."],1,"x + 3x = 48 → 4x = 48 → x = 12."],
["Deseja-se obter 12 litros de mistura com 30% de álcool, a partir de uma solução A com 20% e uma solução B com 50%. A diferença entre as quantidades de A e de B é",["2 litros.","3 litros.","4 litros.","6 litros.","8 litros."],2,"a = 8 L e b = 4 L; diferença de 4 L."],
["Em um grupo, há 30 pessoas entre adultos e crianças. O número de adultos é o dobro do de crianças. Quantas crianças há?",["8.","10.","12.","15.","20."],1,"x + 2x = 30 → x = 10 crianças."],
["Uma corrida de táxi custa R$ 5,00 fixos mais R$ 2,50 por quilômetro. Uma corrida de 12 km custa",["R$ 30,00.","R$ 32,50.","R$ 35,00.","R$ 37,50.","R$ 40,00."],2,"2,5 × 12 + 5 = 30 + 5 = 35."],
["Na função f(x) = −2x + 8, é correto afirmar que",["a função é crescente.","a raiz é x = 4.","a reta corta o eixo y em −2.","f(1) = 10.","a raiz é x = −4."],1,"−2x + 8 = 0 → x = 4. Como a < 0, é decrescente; corta o eixo y em 8; f(1) = 6."]
]
},
{
id:"R03", m:"rl", t:"Conjuntos e sequências",
ed:["R2","R4"],
v:[["wumvgj2ZTGc","Como resolver problemas de conjuntos (diagrama de Venn)"],["-CKyLMxOF8o","Sequências de números, figuras, letras e palavras"]],
obj:["Usar união, interseção e diferença de conjuntos","Resolver problemas com diagrama de Venn de 2 e 3 conjuntos","Encontrar o padrão de sequências numéricas e de letras","Usar progressão aritmética"],
s:[
["Operações com conjuntos",[
{l:["**União** (A ∪ B): elementos de A ou de B.","**Interseção** (A ∩ B): elementos de A e de B ao mesmo tempo.","**Diferença** (A − B): elementos de A que não estão em B.","**n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**.","Com três conjuntos: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)."]},
{ex:"200 pessoas; 160 escolheram X e 80 escolheram Y; todas escolheram pelo menos um. Interseção = 160 + 80 − 200 = 40. **Só X** = 160 − 40 = 120, ou seja, 60% do grupo."},
{a:"No diagrama de Venn, comece **sempre pela interseção** e vá subtraindo para preencher as regiões de “somente”."},
"Lembre: o **2** é o único número primo par. Se A é o conjunto dos primos e B o dos ímpares, A − B = {2}, um conjunto **unitário**."
]],
["Sequências",[
{l:["**Progressão aritmética (PA)**: soma-se sempre a mesma razão. aₙ = a₁ + (n − 1)·r.","**Progressão geométrica (PG)**: multiplica-se sempre pelo mesmo número.","**Sequências alternadas**: dois padrões intercalados (+3, +2, +3, +2...).","**Letras**: use a posição no alfabeto (A = 1, B = 2...; o alfabeto tem 26 letras, com K, W e Y).","**Padrões cíclicos**: use o **resto da divisão** para descobrir qual elemento aparece numa posição distante."]},
{ex:"Saulo pisa nos degraus 2, 5, 7, 10, 12, 15, 17... (soma 3, soma 2, alternando). Os números que aparecem são os terminados em 0, 2, 5 e 7: ele pisa em **todos os múltiplos de 5**."},
{ex:"Pares consecutivos a partir de 12: 12, 14, 16, 18, 20, 22, 24, 26. O 8º termo menos o 5º: 26 − 20 = **6** (três passos de razão 2)."}
]]
],
r:["União, interseção, diferença. n(A∪B) = n(A) + n(B) − n(A∩B).","Venn: comece pela interseção.","2 é o único primo par.","PA: aₙ = a₁ + (n−1)r. PG: multiplica.","Sequências alternadas, letras pela posição, ciclos pelo resto da divisão."],
q:[
["Em um grupo de 200 pessoas, 160 preferem o produto X e 80 preferem o produto Y, e todas preferem pelo menos um deles. A porcentagem que prefere apenas o produto X é",["40%.","50%.","60%.","70%.","80%."],2,"Interseção = 40; só X = 120; 120/200 = 60%."],
["Se A é o conjunto dos números primos e B é o conjunto dos números ímpares, o conjunto A − B",["tem infinitos elementos.","só tem números ímpares.","é unitário.","é vazio.","é igual a B − A."],2,"O único primo que não é ímpar é o 2, então a diferença entre os conjuntos é {2}, um conjunto unitário."],
["Em uma pesquisa com 220 servidores, todos usam pelo menos um de três sistemas: 120 usam o sistema 1, 100 o sistema 2 e 80 o sistema 3; 40 usam 1 e 2; 30 usam 1 e 3; 25 usam 2 e 3. O número de servidores que usam exatamente dois sistemas é",["40.","50.","60.","70.","80."],1,"220 = 300 − 95 + x → x (os três) = 15. Exatamente dois: 25 + 15 + 10 = 50."],
["Considere a sequência de números pares consecutivos iniciada em 12. A diferença entre o oitavo e o quinto termos é",["2.","3.","4.","6.","8."],3,"Três passos de razão 2: 6."],
["O próximo termo da sequência 3, 7, 11, 15, ... é",["17.","18.","19.","20.","21."],2,"PA de razão 4: 15 + 4 = 19."],
["Na sequência 2, 6, 18, 54, ..., o próximo termo é",["108.","148.","162.","216.","72."],2,"PG de razão 3: 54 × 3 = 162."],
["Na sequência de letras A, C, F, J, O, ..., a próxima letra é",["P.","S.","T.","U.","Q."],3,"Posições 1, 3, 6, 10, 15 (somando 2, 3, 4, 5); a próxima soma 6: 21 = U."],
["Uma sequência repete as cores azul, verde, amarelo, azul, verde, amarelo... A cor da 50ª posição é",["azul.","verde.","amarelo.","vermelho.","não é possível determinar."],1,"Ciclo de 3: 50 ÷ 3 deixa resto 2, que corresponde ao 2º elemento, verde."]
]
}
);
