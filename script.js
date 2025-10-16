// Selecciona el botón de menú y los enlaces del menú
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Alternar la clase "active" para mostrar/ocultar el menú en móviles
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Opcional: cerrar el menú cuando se hace clic en cualquier enlace
const links = navLinks.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
