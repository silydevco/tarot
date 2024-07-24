document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var closeModalSpan = document.getElementsByClassName('close')[0];
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    if (openModalBtn && closeModalBtn && modal) {
        openModalBtn.onclick = function() {
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            closeModalBtn.focus(); // Set focus on the close button
        };

        closeModalBtn.onclick = closeModalSpan.onclick = function() {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            openModalBtn.focus(); // Return focus to the open button
        };

        // Close modal on outside click
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
                openModalBtn.focus();
            }
        };

        // Close modal with Escape key
        document.onkeydown = function(event) {
            if (event.key === "Escape" && modal.style.display === 'flex') {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
                openModalBtn.focus();
            }
        };
    }

    // WhatsApp button functionality
    var whatsappButton = document.getElementById('whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            var phoneNumber = '1234567890'; // Replace with your phone number
            var message = 'Hello, I would like to know more about your services.';
            var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
            window.open(url, '_blank');
        });
    }

    // Navigation toggle for hamburger menu
    if (navToggle && navMenu) {
        navToggle.onclick = function() {
            navMenu.classList.toggle('active');
            var expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
        };
    }

    // Carousel functionality
    var carouselIndex = 0;
    var slides = document.querySelectorAll('.carousel img');
    var prevButton = document.querySelector('.carousel .prev');
    var nextButton = document.querySelector('.carousel .next');

    if (prevButton && nextButton && slides.length > 0) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            carouselIndex = (carouselIndex + 1) % slides.length;
            showSlide(carouselIndex);
        }

        function prevSlide() {
            carouselIndex = (carouselIndex - 1 + slides.length) % slides.length;
            showSlide(carouselIndex);
        }

        nextButton.onclick = nextSlide;
        prevButton.onclick = prevSlide;

        showSlide(carouselIndex);
    }
});
