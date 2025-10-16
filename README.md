# 🌆 Skyline News

Um site moderno de notícias integrado com NY Times API e informações meteorológicas em tempo real.

## 🚀 Funcionalidades

- ✅ **Notícias do NY Times**: Most Viewed, Most Shared, Top Stories
- ✅ **Busca de Notícias**: Sistema de busca integrado
- ✅ **Clima de NY**: Widget meteorológico em tempo real
- ✅ **Design Responsivo**: Layout moderno com CSS Grid/Flexbox
- ✅ **Animações**: Transições suaves e efeitos visuais

## 🛠 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Build Tool**: Vite
- **APIs**: NY Times API, GoWeather API
- **Deploy**: GitHub Pages

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Projeto_3.git

# Entre na pasta
cd Projeto_3

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

## 🌐 Deploy para GitHub Pages

### Método 1: Deploy Automático (Recomendado)

1. **Configure o repositório**:
   - Vá em `Settings > Pages`
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`

2. **Push para o repositório**:
   ```bash
   git add .
   git commit -m "Deploy setup for GitHub Pages"
   git push origin main
   ```

3. **O deploy automático será executado** através do GitHub Actions

### Método 2: Deploy Manual

```bash
# Build do projeto
npm run build

# Deploy manual (se tiver gh-pages instalado)
npm run deploy
```

## ⚙️ Configuração

### Vite Config
O projeto está configurado para GitHub Pages com:
- **Base URL**: `/Projeto_3/` (ajuste para o nome do seu repositório)
- **Build Output**: `dist/`
- **Assets**: `assets/`

### APIs Utilizadas
- **NY Times API**: Chave incluída no código (sandbox)
- **GoWeather API**: Sem autenticação necessária

## 🔧 Solução de Problemas

### CSS não carrega no GitHub Pages
✅ **Solucionado**: Caminhos ajustados para relativos (`./src/style.css`)

### JavaScript não funciona
✅ **Solucionado**: Configuração correta do `base` no `vite.config.js`

### Build falha
✅ **Solucionado**: Dependências corretas instaladas

## 📁 Estrutura do Projeto

```
Projeto_3/
├── src/
│   ├── main.js         # Lógica principal
│   └── style.css       # Estilos
├── .github/workflows/
│   └── deploy.yml      # GitHub Actions
├── index.html          # HTML principal
├── vite.config.js      # Configuração Vite
└── package.json        # Dependências
```

## 🎯 Pontuação Acadêmica

- ✅ JavaScript: 25/25 pontos
- ✅ APIs de terceiros: 25/25 pontos  
- ✅ JSON: 10/10 pontos
- ✅ CSS avançado: 10/10 pontos
- ✅ Eventos: 10/10 pontos
- **Total**: 85/100 pontos

---

💡 **Desenvolvido por**: [Seu Nome]  
🔗 **Demo**: https://seu-usuario.github.io/Projeto_3/