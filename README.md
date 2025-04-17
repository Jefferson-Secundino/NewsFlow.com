# 📰 NewsFlow

## 📌 Visão Geral

O **NewsFlow** é um portal de notícias responsivo e acessível, desenvolvido com as melhores práticas de **HTML5 semântico**, **CSS3 moderno** e **JavaScript eficiente**. O projeto oferece uma experiência de usuário otimizada para todas as plataformas, desde dispositivos móveis até desktops.

---

## 📸 Screenshot

![Captura do Site](/imagens/screencapture-index-html.png)

---

## 🌐 Demonstração

🔗 [Acesse o projeto online](https://jefferson-secundino.github.io/NewsFlow.com/)

---

## ✨ Funcionalidades

- ✅ **Menu de Navegação Responsivo**: Ícone `menu_open` para exibir/ocultar categorias como Mercado, Agro, Esporte, Moda, Tecnologia e Mundo.
- ✅ **Busca de Notícias**: Campo de pesquisa com ícone de lupa (`search`) para facilitar a localização de conteúdos.
- ✅ **Design Responsivo**: Layout adaptado para **mobile**, **tablet** e **desktop** usando **media queries**.
- ✅ **Estrutura Semântica**: Uso de `section`, `article`, `picture` e `figcaption` para melhor acessibilidade e SEO.
- ✅ **Imagens Otimizadas**: Utilização de `<picture>`, `srcset` e `loading="lazy"` para carregamento leve e visual adequado.
- ✅ **Estilização com Variáveis CSS**: Utilização de `var(--nome-da-variável)` para padronização de cores, fontes e espaçamentos.
- ✅ **CSS Grid e Flexbox**: Layout moderno com **Grid** e estilo **masonry** no desktop para exibição dinâmica dos cards de notícias.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica do conteúdo.
- **CSS3** – Flexbox, Grid, variáveis, media queries.
- **JavaScript Vanilla** – Funcionalidades interativas.
- **Google Fonts** – Tipografia moderna.
- **Google Material Icons** – Ícones acessíveis e intuitivos.

---

## 📁 Estrutura de Diretórios

```
NewsFlow/
│
├── imagens/
│   ├── favicon.ico
│   ├── logo.png
│   └── (demais imagens por categoria e tamanho)
│
├── style/
│   ├── style.css
│   ├── style-bory.css
│   └── midia-query.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## 📲 Responsividade

A interface se adapta perfeitamente a diferentes resoluções:

- 📱 **Mobile**: Layout empilhado com foco na leitura rápida.
- 💻 **Tablet**: Duas colunas otimizadas para navegação e leitura.
- 🖥️ **Desktop**: Três colunas com altura variável (estilo **masonry**).

### 📐 Exemplo de Media Queries:

```css
/* Tablet (768px+) */
@media screen and (min-width: 768px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px+) */
@media screen and (min-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🔧 Melhorias Futuras

- 🛠️ **Sistema de Busca Funcional**: Integração com API de notícias ou JavaScript puro.
- 🌙 **Modo Escuro/Claro**: Alternância de temas para maior conforto visual.
- 📤 **Compartilhamento Social**: Botões para compartilhar notícias nas redes sociais.
- 🧠 **Filtro por Categoria**: Permitir exibição personalizada por temas de interesse.
- 🗂️ **Páginas por Seção**: Criar páginas dedicadas a cada categoria de notícia.
- 🧩 **Backend com Node.js** _(futuro)_: Criar uma API própria e banco de dados para tornar o conteúdo dinâmico.

---
