// Enhanced Menu Toggle with Accessibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    const body = document.body;
    const menuBtn = document.querySelector('.menu-btn');

    menu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
        menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuBtn = document.querySelector('.menu-btn');

    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const menu = document.getElementById('menu');
        const menuBtn = document.querySelector('.menu-btn');

        menu.classList.remove('active');
        document.body.style.overflow = '';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Initialize menu button accessibility
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    }
});