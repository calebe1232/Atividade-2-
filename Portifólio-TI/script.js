// Menu hambúrguer (abre e fecha no celular)
const botaoMenu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

botaoMenu.addEventListener('click', () => {
  nav.classList.toggle('open');
  botaoMenu.classList.toggle('active');

  // Atualiza o aria-expanded
  const estaAberto = nav.classList.contains('open');
  botaoMenu.setAttribute('aria-expanded', estaAberto);
});

// Clicar nos links do menu → fecha o menu e vai até a seção
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Fecha o menu no celular
    nav.classList.remove('open');
    botaoMenu.classList.remove('active');
    botaoMenu.setAttribute('aria-expanded', 'false');

    // Pega o id da seção (ex: #projetos, #contato)
    const id = link.getAttribute('href');
    const secao = document.querySelector(id);

    // Rola suavemente até a seção
    if (secao) {
      secao.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});