// selecione os seus menus fixos
var menuFixoAtivo = document.querySelector('.menu-fixo-ativo');
var menuFixoInativo = document.querySelector('.menu-fixo-inativo');

// salve a altura do menu fixo ativo em relação ao topo da página
var alturaMenuFixoAtivo = menuFixoAtivo.offsetTop;

// adicione a classe "menu-fixo-inativo-ativo" e remova a classe "menu-fixo-ativo" quando o usuário rolar a página além da altura do menu fixo ativo
window.addEventListener('scroll', function() {
  if (window.pageYOffset >= alturaMenuFixoAtivo) {
    menuFixoAtivo.classList.remove('menu-fixo-ativo');
    menuFixoInativo.classList.add('menu-fixo-inativo-ativo');
  } else {
    menuFixoAtivo.classList.add('menu-fixo-ativo');
    menuFixoInativo.classList.remove('menu-fixo-inativo-ativo');
  }
});