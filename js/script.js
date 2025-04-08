document.addEventListener("DOMContentLoaded", function () {
  // Elementos do DOM
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.querySelector(".search__button");

  // Função para alternar o menu mobile
  function toggleMenu() {
    const isOpen = navMenu.classList.contains("nav__menu--open");

    // Alternar estado do menu
    navMenu.classList.toggle("nav__menu--open");
    navToggle.setAttribute("aria-expanded", !isOpen);

    // Alternar ícone do botão
    const icon = navToggle.querySelector(".nav__icon");
    icon.textContent = isOpen ? "menu_open" : "close";

    // Bloquear scroll do body quando menu está aberto
    document.body.style.overflow = isOpen ? "" : "hidden";
  }

  // Função para fechar o menu ao clicar em um link
  function closeMenuOnLinkClick() {
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  }

  // Função para lidar com redimensionamento da tela
  function handleResize() {
    if (window.innerWidth >= 768) {
      // Resetar menu em telas maiores
      navMenu.classList.remove("nav__menu--open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";

      // Resetar ícone
      const icon = navToggle.querySelector(".nav__icon");
      icon.textContent = "menu_open";
    }
  }

  // Função para buscar notícias
  function searchNews() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      alert(`Buscando por: ${searchTerm}`);
      // Aqui você implementaria a lógica de busca real
    }
  }

  // Event Listeners
  navToggle.addEventListener("click", toggleMenu);

  // Fechar menu ao clicar nos links
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", closeMenuOnLinkClick);
  });

  // Buscar ao clicar no botão ou pressionar Enter
  searchButton.addEventListener("click", searchNews);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchNews();
    }
  });

  // Lidar com redimensionamento da janela
  window.addEventListener("resize", handleResize);

  // Inicialização
  handleResize();
});
