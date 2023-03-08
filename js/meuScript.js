// Adicione isso em um embed de código personalizado antes da tag </body>

// Seleciona os elementos com as classes de menu
const menuPrincipal = document.querySelector('.menu-fixo-ativo');
const menuSecundario = document.querySelector('.menu-fixo-inativo');

// Detecta quando o usuário rola a página
window.addEventListener('scroll', () => {
  // Verifica se o usuário rolou a página além do topo do menu principal
  if (window.scrollY > menuPrincipal.offsetTop) {
    // Mostra o menu secundário e oculta o menu principal
    menuSecundario.style.display = 'flex';
    menuPrincipal.style.display = 'none';
  } else {
    // Mostra o menu principal e oculta o menu secundário
    menuPrincipal.style.display = 'flex';
    menuSecundario.style.display = 'none';
  }
});
