// ============================================
// 1. SAUDAÇÃO DINÂMICA
// ============================================
const saudacaoEl = document.getElementById('saudacao');

function atualizarSaudacao() {
  const hora = new Date().getHours();
  let texto = 'Bom dia,';

  if (hora >= 12 && hora < 18) texto = 'Boa tarde,';
  else if (hora >= 18 || hora < 5) texto = 'Boa noite,';

  if (saudacaoEl) saudacaoEl.textContent = texto;
}
atualizarSaudacao();

// ============================================
// 2. MODO CLARO / ESCURO
// ============================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function carregarTema() {
  const temaSalvo = localStorage.getItem('tema');

  if (temaSalvo) {
    html.setAttribute('data-theme', temaSalvo);
  } else {
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefereEscuro ? 'dark' : 'light');
  }
}

function alternarTema() {
  const temaAtual = html.getAttribute('data-theme');
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';

  if (themeToggle) {
    themeToggle.classList.add('spin');
    setTimeout(() => themeToggle.classList.remove('spin'), 400);
  }

  html.setAttribute('data-theme', novoTema);
  localStorage.setItem('tema', novoTema);
}

carregarTema();

if (themeToggle) {
  themeToggle.addEventListener('click', alternarTema);
}

// ============================================
// 3. MENU MOBILE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ============================================
// 4. LINK ATIVO NA NAVBAR
// ============================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function destacarLinkAtivo() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const altura = section.offsetHeight;
    const topo = section.offsetTop - 120;
    const id = section.getAttribute('id');

    if (scrollY >= topo && scrollY < topo + altura) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', destacarLinkAtivo);

// ============================================
// 5. ANIMAÇÃO DE ENTRADA (SCROLL REVEAL)
// ============================================
const elementosAnimados = document.querySelectorAll(
  '.hero-content, .hero-visual, .section-title, .section-subtitle, .about-content, .card, .contact-form'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

elementosAnimados.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// ============================================
// 6. BOTÕES - Efeito de clique (ripple)
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ============================================
// 7. CARDS - Seleção + animação
// ============================================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    card.classList.add('pop');
    setTimeout(() => card.classList.remove('pop'), 400);
  });
});

// ============================================
// 8. FILTRO DE CARDS
// ============================================
const filterButtons = document.querySelectorAll('[data-filter]');

if (filterButtons.length > 0) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filtro = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const categoria = card.getAttribute('data-category');

        if (filtro === 'all' || categoria === filtro) {
          card.style.display = 'block';
          card.classList.remove('hide');
          card.classList.add('show');
        } else {
          card.classList.add('hide');
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ============================================
// 9. SCROLL SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// 10. NAVBAR COM SOMBRA AO ROLAR
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ============================================
// 11. FORMULÁRIO DE CONTATO (exemplo simples)
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Isso é só um exemplo)');
    contactForm.reset();
  });
}