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

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navList.style.display = isExpanded ? 'none' : 'flex';

        menuStatus.textContent = isExpanded ? 'Menu closed' : 'Menu opened';

        if (!isExpanded) {
            firstFocusableElement.focus();
            document.addEventListener('keydown', trapFocus);
        } else {
            menuToggle.focus();
            document.removeEventListener('keydown', trapFocus);
        }
    });

    navList.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menuToggle.setAttribute('aria-expanded', false);
            navList.style.display = 'none';
            menuToggle.focus();
            menuStatus.textContent = 'Menu closed';
            document.removeEventListener('keydown', trapFocus);
        }
    });
});

const whatsappNumber = "1234567890";


function contactWhatsApp(service) {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`שלום, אני מעוניין/ת ב${service}.`)}`;
    window.open(url, '_blank');
}
