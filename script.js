// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('primary-navigation');
    const menuStatus = document.getElementById('menu-status');

    const focusableElements = navList.querySelectorAll('a');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const trapFocus = (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) { // shift + tab
                if (document.activeElement === firstFocusableElement) {
                    event.preventDefault();
                    lastFocusableElement.focus();
                }
            } else { // tab
                if (document.activeElement === lastFocusableElement) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    };

    const closeMenu = () => {
        menuToggle.setAttribute('aria-expanded', false);
        navList.style.display = 'none';
        navList.hidden = true;
        menuToggle.focus();
        menuStatus.textContent = 'Menu closed';
        document.removeEventListener('keydown', trapFocus);
        document.removeEventListener('click', handleClickOutside);
    };

    const handleClickOutside = (event) => {
        if (!navList.contains(event.target) && event.target !== menuToggle) {
            closeMenu();
        }
    };

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navList.hidden = isExpanded;
        navList.style.display = isExpanded ? 'none' : 'flex';

        menuStatus.textContent = isExpanded ? 'Menu closed' : 'Menu opened';

        if (!isExpanded) {
            firstFocusableElement.focus();
            document.addEventListener('keydown', trapFocus);
            document.addEventListener('click', handleClickOutside);
        } else {
            menuToggle.focus();
            document.removeEventListener('keydown', trapFocus);
            document.removeEventListener('click', handleClickOutside);
        }
    });

    navList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            closeMenu();
        }
    });

    navList.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

const whatsappNumber = "1234567890";

function contactWhatsApp(service) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`שלום, אני מעוניין/ת ב${service}.`)}`;
    window.open(url, '_blank');
}
