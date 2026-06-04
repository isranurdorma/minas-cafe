/* ===========================
   MINAS KAFE - ANIMATIONS JAVASCRIPT
   =========================== */

(function () {
    'use strict';

    /* ────────────────────────────
       1. SCROLL-REVEAL (IntersectionObserver)
    ──────────────────────────── */
    function initScrollReveal() {
        const revealEls = document.querySelectorAll('[data-reveal]');
        if (!revealEls.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => observer.observe(el));
    }

    /* ────────────────────────────
       2. HEADER SCROLL EFEKTİ
    ──────────────────────────── */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ────────────────────────────
       3. YUKARI ÇIK BUTONU
    ──────────────────────────── */
    function initScrollTop() {
        const btn = document.createElement('button');
        btn.className = 'btn-scroll-top';
        btn.setAttribute('aria-label', 'Sayfanın başına git');
        btn.setAttribute('title', 'Yukarı çık');
        btn.innerHTML = '↑';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ────────────────────────────
       4. SAYAÇ ANİMASYONU (Stats)
    ──────────────────────────── */
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;

        const parseTarget = (text) => {
            const num = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            return { num, suffix };
        };

        const animateCounter = (el) => {
            const { num, suffix } = parseTarget(el.textContent.trim());
            const duration = 1600;
            const start = performance.now();

            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                // easeOutExpo
                const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const current = Math.floor(eased * num);
                el.textContent = current + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(el => observer.observe(el));
    }

    /* ────────────────────────────
       5. RİPPLE EFEKTİ (Butonlar)
    ──────────────────────────── */
    function initRipple() {
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', function (e) {
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
                btn.appendChild(ripple);
                ripple.addEventListener('animationend', () => ripple.remove());
            });
        });
    }

    /* ────────────────────────────
       6. KART TİLT EFEKTİ (Menü Kartları)
    ──────────────────────────── */
    function initCardTilt() {
        const cards = document.querySelectorAll('.menu-card');
        const MAX_TILT = 8; // derece

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = (e.clientX - cx) / (rect.width / 2);
                const dy = (e.clientY - cy) / (rect.height / 2);

                card.style.transform =
                    `perspective(800px) rotateY(${dx * MAX_TILT}deg) rotateX(${-dy * MAX_TILT}deg) translateY(-12px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    /* ────────────────────────────
       7. FORM MİKRO-ETKİLEŞİMLERİ
    ──────────────────────────── */
    function initFormInteractions() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Alan bazlı hata gösterimi
        const fields = form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            // Her alan için error span oluştur
            const errSpan = document.createElement('span');
            errSpan.className = 'field-error';
            field.parentElement.appendChild(errSpan);

            field.addEventListener('blur', () => validateField(field, errSpan));
            field.addEventListener('input', () => {
                if (field.parentElement.classList.contains('has-error')) {
                    validateField(field, errSpan);
                }
            });
        });

        function validateField(field, errSpan) {
            const group = field.parentElement;
            let msg = '';

            if (!field.value.trim()) {
                msg = 'Bu alan zorunludur.';
            } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                msg = 'Geçerli bir e-mail adresi girin.';
            }

            group.classList.toggle('has-error', !!msg);
            errSpan.textContent = msg;
        }

        // Form gönderim geri bildirimi
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success-msg';
        successMsg.innerHTML = `
            <span class="success-icon">☕</span>
            <p>Mesajınız alındı! En kısa sürede size dönüş yapacağız.</p>
        `;
        form.parentElement.appendChild(successMsg);

        form.addEventListener('submit', function (e) {
            // Formspree gerçek gönderimi yönetir; sadece UI feedback
            // Eğer Formspree başarılı gönderim sonrası yönlendirme yoksa:
            let valid = true;
            fields.forEach(field => {
                const errSpan = field.parentElement.querySelector('.field-error');
                validateField(field, errSpan);
                if (field.parentElement.classList.contains('has-error')) valid = false;
            });

            if (!valid) {
                e.preventDefault();
                // İlk hatalı alana odaklan
                form.querySelector('.has-error input, .has-error textarea')?.focus();
            }
        });
    }

    /* ────────────────────────────
       8. GALERİ STAGGERED REVEAL
    ──────────────────────────── */
    function initGalleryReveal() {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, i) => {
            item.setAttribute('data-reveal', 'zoom-in');
            item.style.transitionDelay = `${i * 0.08}s`;
        });
    }

    /* ────────────────────────────
       9. NAV LINK HOVER – mürekkep çizgisi animasyonu
    ──────────────────────────── */
    function initNavIndicator() {
        // Zaten CSS ::after ile yapıldı; JS'te aktif klas yönetimi main.js'te var.
        // Burada mobil menü backdrop ekleyelim
        const nav = document.querySelector('.navigation');
        const navList = document.querySelector('.nav-list');
        if (!nav || !navList) return;

        const backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        backdrop.style.cssText = `
            position:fixed;inset:0;background:rgba(0,0,0,0.4);
            opacity:0;pointer-events:none;transition:opacity 0.3s ease;z-index:100;
        `;
        document.body.appendChild(backdrop);

        const menuBtn = document.querySelector('.btn-menu');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                const isOpen = navList.classList.contains('active');
                backdrop.style.opacity = isOpen ? '0.4' : '0';
                backdrop.style.pointerEvents = isOpen ? 'all' : 'none';
            });

            backdrop.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navList.classList.remove('active');
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
            });
        }
    }

    /* ────────────────────────────
       BAŞLAT
    ──────────────────────────── */
    function init() {
        initGalleryReveal();   // data-reveal eklemeden önce
        initScrollReveal();
        initHeaderScroll();
        initScrollTop();
        initCounters();
        initRipple();
        initCardTilt();
        initFormInteractions();
        initNavIndicator();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
