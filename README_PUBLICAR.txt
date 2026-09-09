FÓRUM ECONOMIA AZUL — ATUALIZAÇÃO v10 — 09SET2026

CONTEÚDO
- index.html
- manifest.webmanifest
- sw.js
- app-icon.png
- assets/
  - programação atualizada do Fórum
  - fotos dos palestrantes
  - fotos das autoridades
  - placeholders para fotos ainda não fornecidas

PRINCIPAIS ATUALIZAÇÕES
1. Deslocamento da equipe para Recife: 10SET2026 às 13h30.
2. Programação do Fórum atualizada conforme a arte fornecida.
3. Nova aba “Agenda” com o Programa de Eventos do DN-01 e autoridades (13 a 20SET).
4. A aba Agenda mostra hora atual em Recife, evento em andamento e próximo evento com horário definido.
5. Recepções no Aeroporto exibem fotos das autoridades disponíveis.
6. Nova aba “Equipe” com distribuição de hospedagem/check-in conforme FORUM RECIFE ATU_10SET.ods.
7. Atualização automática a cada 15 segundos.
8. Cache do PWA alterado para forum-v10-20260909 para evitar conteúdo antigo.

FOTO DO CALTE BESSA
O arquivo:
assets/autoridades/CAlte_Bessa.png
é um placeholder. Quando tiver a fotografia, substitua SOMENTE esse arquivo por uma nova imagem PNG com o mesmo nome.
Não será necessário alterar o index.html.

Também foram deixados placeholders para:
assets/autoridades/Alte_Esq_Andre.png
assets/autoridades/CMG_IM_Marcelo_Bezerra.png

COMO SUBSTITUIR NO GITHUB
1. Descompacte este ZIP.
2. Abra no GitHub o repositório forum-economia-azul.
3. Clique em Add file > Upload files.
4. Arraste TODOS os arquivos e a pasta assets do pacote descompactado.
5. Confirme que index.html, sw.js, manifest.webmanifest e app-icon.png ficam na raiz.
6. No campo de commit, use algo como:
   Atualização 09SET - programação, agenda e equipe
7. Clique em Commit changes.

COMO REATIVAR O GITHUB PAGES
1. Repositório forum-economia-azul > Settings.
2. Menu lateral > Pages.
3. Build and deployment > Source: Deploy from a branch.
4. Branch: main.
5. Folder: /(root).
6. Save.
7. Faça/garanta um commit no branch main.
8. Aguarde o novo deploy.

VERIFICAÇÃO
Ao abrir o site, procure no início:
ATUALIZAÇÃO · 09SET2026 · v10

Se um iPhone instalado na Tela de Início ainda mostrar versão antiga:
- abra primeiro o endereço pelo Safari conectado à internet;
- atualize a página;
- feche e reabra o ícone da Tela de Início.

OBSERVAÇÃO DE PRIVACIDADE
O GitHub Pages não é privado. A página usa meta noindex para desencorajar indexação por buscadores, mas qualquer pessoa que conheça o link poderá acessá-la.
Nesta versão não foram incluídos telefones, placas de viaturas nem NIP.
