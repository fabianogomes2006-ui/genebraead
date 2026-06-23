# Faculdade Genebra EAD — App

## Como publicar de graça (sem precisar instalar nada no computador)

### Passo 1 — Criar uma conta no GitHub
Acesse https://github.com e crie uma conta gratuita (se ainda não tiver).

### Passo 2 — Criar um repositório
1. Clique em "New repository"
2. Dê um nome, ex: `faculdade-genebra-app`
3. Marque como "Public" (pode ser privado também, ambos funcionam)
4. Clique em "Create repository"

### Passo 3 — Subir os arquivos
1. Na página do repositório recém-criado, clique em "uploading an existing file"
2. Arraste TODOS os arquivos e pastas deste projeto (menos a pasta node_modules, que nem existe ainda)
3. Clique em "Commit changes"

### Passo 4 — Publicar no Vercel (de graça)
1. Acesse https://vercel.com e crie uma conta (pode entrar direto com sua conta do GitHub)
2. Clique em "Add New... → Project"
3. Selecione o repositório `faculdade-genebra-app`
4. O Vercel já reconhece automaticamente que é um projeto Vite — não precisa mudar nada
5. Clique em "Deploy"
6. Em menos de 1 minuto você recebe um link tipo `faculdade-genebra-app.vercel.app`

Esse link já pode ser compartilhado com qualquer pessoa, em qualquer dispositivo. Toda vez que você quiser atualizar o app, é só subir os arquivos novos no GitHub — o Vercel publica a atualização automaticamente.

## Importante sobre os dados salvos (perfil e comunidade)
Este app salva dados (nome do perfil, posts da comunidade) usando o armazenamento do navegador de cada visitante. Isso significa:
- Os dados ficam salvos no aparelho de quem está usando, não em um servidor central
- Uma pessoa não vai ver os posts que outra pessoa escreveu, a não ser que estejam no mesmo navegador
- Se quiser uma comunidade de verdade, com posts visíveis para todo mundo, é necessário adicionar um banco de dados (ex: Supabase, que também tem plano gratuito) — posso te ajudar com isso depois.

## Colocar o nome de domínio próprio (opcional)
Se quiser usar `app.genebraead.com.br` em vez do link do Vercel, isso também é gratuito — só precisa configurar um registro DNS no painel do seu domínio apontando para o Vercel. Posso te guiar quando chegar essa hora.
