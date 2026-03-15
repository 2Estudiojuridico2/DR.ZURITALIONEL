document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicializar AOS (Animaciones al hacer scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // La animación ocurre solo una vez
        offset: 100
    });

    // 2. Efecto de la Barra de Navegación al hacer Scroll
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 3. Cerrar el menú del celular automáticamente al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarResponsive');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    
    navLinks.forEach(function(l) {
        l.addEventListener('click', function() {
            // Solo lo cierra si el menú está abierto (en móviles)
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

});
