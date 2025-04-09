document.addEventListener("DOMContentLoaded", function () {
  // Elementos do DOM
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.querySelector(".search__button");
  const navLinks = document.querySelectorAll(".nav__link");

  // Função para alternar o menu mobile
  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("nav__menu--open");
    navToggle.setAttribute("aria-expanded", isOpen);

    // Alternar ícone
    const icon = navToggle.querySelector(".nav__icon");
    icon.textContent = isOpen ? "close" : "menu_open";

    // Bloquear scroll quando menu está aberto
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  // Fechar menu ao clicar em um link (mobile)
  function closeMenuOnLinkClick() {
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  }

  // Lidar com redimensionamento da tela
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

  // Função de busca
  function handleSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      alert(`Buscando por: ${searchTerm}`);
      // Implementação real iria aqui
    }
  }

  // Event Listeners
  navToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenuOnLinkClick);
  });

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  window.addEventListener("resize", handleResize);

  // Inicialização
  handleResize();
});
