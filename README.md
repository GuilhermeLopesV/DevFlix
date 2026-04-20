# DevFlix - Projeto de Streaming

Olá! Este é o DevFlix, um projeto de streaming feito com HTML, CSS e JavaScript. É como uma versão simples do Netflix, mas feita por desenvolvedores para desenvolvedores.

## Como funciona o projeto

O DevFlix tem duas páginas principais:

### 1. Página de Perfis (`pages/perfis/index.html`)
- Mostra uma lista de perfis para escolher
- Você pode criar novos perfis ou editar os existentes
- Tem um botão para mudar entre tema claro e escuro
- Quando clica em um perfil, vai para o catálogo

### 2. Página do Catálogo (`pages/catalogo/index.html`)
- Mostra carrosséis de filmes e séries organizados por categoria
- Cada filme/série tem uma capa que vira vídeo quando passa o mouse
- Mostra informações como pontuação, duração e botões de ação
- Também tem controle de tema claro/escuro

## Estrutura do projeto

```
Projeto Netflix/
├── assets/                    # Imagens e recursos visuais
├── pages/                     # Páginas HTML organizadas
│   ├── perfis/               # Página de seleção de perfis
│   ├── catalogo/             # Página do catálogo de filmes
│   └── error/                # Página de erro
├── scripts/                   # JavaScript organizado
│   ├── perfis.js             # Lógica da página de perfis
│   ├── catalogo.js           # Lógica da página do catálogo
│   ├── profile-images.js     # ← GERENCIADOR DE IMAGENS DOS PERFIS
│   └── catalog/              # Scripts específicos do catálogo
│       ├── data.js           # Dados dos filmes/séries
│       ├── utils.js          # Funções auxiliares
│       └── components/       # Componentes reutilizáveis
│           ├── Carousel.js   # Carrosséis de filmes
│           └── Card.js       # Cards individuais
├── styles/                    # CSS organizado
│   ├── perfis.css            # Estilos da página de perfis
│   └── catalogo.css          # Estilos da página do catálogo
├── perfis/                    # Pasta com imagens dos perfis
│   ├── perfil-carro.jpg      # Imagens dos perfis
│   ├── perfil-2.jpg
│   ├── perfil-3.jpg
│   ├── perfil-novo.png
│   └── COMO-ADICIONAR-IMAGENS.md  # ← INSTRUÇÕES PARA ADICIONAR IMAGENS
├── index.html                # Página inicial (redireciona)
├── error.html                # Página de erro (redireciona)
└── README.md                 # Este arquivo
```

## Como usar

1. Abra o arquivo `index.html` no navegador
2. Ele vai te levar para a página de perfis
3. Escolha um perfil ou crie um novo
4. Clique no perfil para ir ao catálogo
5. Navegue pelos filmes e séries
6. Use o botão "Modo Claro" para mudar o tema

## Adicionando novas imagens aos perfis

Não quer editar código toda vez que adicionar uma imagem? Agora é fácil!

### Método Mais Fácil (Recomendado):
1. **Coloque sua imagem** na pasta `perfis/`
2. **Abra** `scripts/profile-images.js`
3. **Adicione** o caminho na lista `perfisImages`
4. **Pronto!** A imagem aparece automaticamente

**Exemplo:**
```javascript
export const perfisImages = [
  '../../perfis/perfil-carro.jpg',
  '../../perfis/perfil-2.jpg',
  '../../perfis/perfil-3.jpg',
  '../../perfis/perfil-novo.png',
  '../../perfis/minha-nova-imagem.jpg'  // ← SUA IMAGEM AQUI
];
```

### Arquivo de Ajuda:
Também tem o arquivo `perfis/COMO-ADICIONAR-IMAGENS.md` com instruções detalhadas!

## Tecnologias usadas

- **HTML**: Estrutura das páginas
- **CSS**: Estilos e animações
- **JavaScript**: Lógica e interatividade
- **LocalStorage**: Salvar perfis e tema
- **YouTube API**: Vídeos nos cards

## Funcionalidades legais

- 🎭 Múltiplos perfis
- 🌙/☀️ Tema claro e escuro
- 🎬 Pré-visualização de vídeos
- 📱 Design responsivo
- 💾 Dados salvos no navegador
- 🎨 Animações suaves
- 🖼️ Sistema fácil de adicionar imagens (só 3 passos!)

## Como contribuir

Se quiser melhorar o projeto:

1. Organize melhor o código
2. Adicione mais filmes/séries
3. Melhore o design
4. Corrija bugs
5. Adicione novas funcionalidades

Divirta-se codando! 🚀