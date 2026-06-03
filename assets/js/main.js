/* ===========================
   MINAS KAFE - MAIN JAVASCRIPT
   =========================== */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const btnMenu = document.querySelector('.btn-menu');
    const navList = document.querySelector('.nav-list');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            btnMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                btnMenu.classList.remove('active');
                navList.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navigation') && navList.classList.contains('active')) {
                btnMenu.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button functionality
    window.addEventListener('scroll', () => {
        // Could add scroll-to-top button here
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Basic validation
            if (!name.value.trim()) {
                e.preventDefault();
                alert('Lütfen adınızı girin');
                return;
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                e.preventDefault();
                alert('Lütfen geçerli bir e-mail adresi girin');
                return;
            }

            if (!message.value.trim()) {
                e.preventDefault();
                alert('Lütfen bir mesaj yazın');
                return;
            }
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Gallery Image Animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                imageObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.6s ease-in';
        imageObserver.observe(item);
    });

    // Lazy Loading for Images (Fallback for older browsers)
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserverLazy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserverLazy.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserverLazy.observe(img));
    }

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Print console for debugging
    console.log('MINAS Kafe Website Loaded Successfully');
})();
