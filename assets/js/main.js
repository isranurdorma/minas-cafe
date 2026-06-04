/* ===========================
   MINAS KAFE - MAIN JAVASCRIPT
   =========================== */

(function() {
    'use strict';

    // Mobil Menü Aç/Kapat
    const menuButonu = document.querySelector('.btn-menu');
    const navigasyonListesi = document.querySelector('.nav-list');

    if (menuButonu) {
        menuButonu.addEventListener('click', () => {
            menuButonu.classList.toggle('active');
            navigasyonListesi.classList.toggle('active');
        });

        // Bir linke tıklandığında menüyü kapat
        const navigasyonLinkleri = document.querySelectorAll('.nav-link');
        navigasyonLinkleri.forEach(baglanti => {
            baglanti.addEventListener('click', () => {
                menuButonu.classList.remove('active');
                navigasyonListesi.classList.remove('active');
            });
        });

        // Dışarı tıklandığında menüyü kapat
        document.addEventListener('click', (olay) => {
            if (!olay.target.closest('.navigation') && navigasyonListesi.classList.contains('active')) {
                menuButonu.classList.remove('active');
                navigasyonListesi.classList.remove('active');
            }
        });
    }

    // Yumuşak Kaydırma (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(baglanti => {
        baglanti.addEventListener('click', function(olay) {
            const hedefLink = this.getAttribute('href');
            if (hedefLink !== '#' && document.querySelector(hedefLink)) {
                olay.preventDefault();
                const hedefEleman = document.querySelector(hedefLink);
                const baslikYuksekligi = document.querySelector('header').offsetHeight;
                const hedefPozisyon = hedefEleman.offsetTop - baslikYuksekligi;

                window.scrollTo({
                    top: hedefPozisyon,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Yukarı çıkma butonu işlevselliği
    window.addEventListener('scroll', () => {
        // Yukarı çık butonu buraya eklenebilir
    });

    // Form Doğrulama
    const iletisimFormu = document.getElementById('contactForm');
    if (iletisimFormu) {
        iletisimFormu.addEventListener('submit', function(olay) {
            const isim = document.getElementById('name');
            const eposta = document.getElementById('email');
            const mesaj = document.getElementById('message');

            // Basit doğrulama
            if (!isim.value.trim()) {
                olay.preventDefault();
                alert('Lütfen adınızı girin');
                return;
            }

            if (!eposta.value.trim() || !gecerliEpostaMi(eposta.value)) {
                olay.preventDefault();
                alert('Lütfen geçerli bir e-mail adresi girin');
                return;
            }

            if (!mesaj.value.trim()) {
                olay.preventDefault();
                alert('Lütfen bir mesaj yazın');
                return;
            }
        });
    }

    // E-posta doğrulama fonksiyonu
    function gecerliEpostaMi(eposta) {
        const epostaSabloni = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return epostaSabloni.test(eposta);
    }

    // Galeri Resim Animasyonu
    const galeriElemanlari = document.querySelectorAll('.gallery-item');
    const resimGozlemleyici = new IntersectionObserver((girdiler) => {
        girdiler.forEach(girdi => {
            if (girdi.isIntersecting) {
                girdi.target.style.opacity = '1';
                resimGozlemleyici.unobserve(girdi.target);
            }
        });
    }, {
        threshold: 0.1
    });

    galeriElemanlari.forEach(eleman => {
        eleman.style.opacity = '0';
        eleman.style.transition = 'opacity 0.6s ease-in';
        resimGozlemleyici.observe(eleman);
    });

    // Tembel Yükleme (Lazy Loading) (Eski tarayıcılar için yedek)
    const resimler = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const tembelResimGozlemleyici = new IntersectionObserver((girdiler) => {
            girdiler.forEach(girdi => {
                if (girdi.isIntersecting) {
                    const resim = girdi.target;
                    resim.src = resim.dataset.src || resim.src;
                    resim.classList.add('loaded');
                    tembelResimGozlemleyici.unobserve(resim);
                }
            });
        });

        resimler.forEach(resim => tembelResimGozlemleyici.observe(resim));
    }

    // Kaydırırken Aktif Menü Linkini Vurgulama
    const bolumler = document.querySelectorAll('section[id]');
    const navigasyonLinkleri2 = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let gecerliBolum = '';

        bolumler.forEach(bolum => {
            const bolumUstMesafesi = bolum.offsetTop - 100;
            if (pageYOffset >= bolumUstMesafesi) {
                gecerliBolum = bolum.getAttribute('id');
            }
        });

        navigasyonLinkleri2.forEach(baglanti => {
            baglanti.classList.remove('active');
            if (baglanti.getAttribute('href') === '#' + gecerliBolum) {
                baglanti.classList.add('active');
            }
        });
    });

    // Resim Büyütme Modalı (Image Modal)
    const modal = document.getElementById('imageModal');
    const modalResim = document.getElementById('modalImage');
    const modalKapat = document.querySelector('.close-modal');
    const buyutulecekResimler = document.querySelectorAll('.menu-card img, .gallery-item img');

    if (modal) {
        buyutulecekResimler.forEach(resim => {
            resim.addEventListener('click', function() {
                modal.classList.add('active');
                modalResim.src = this.src;
            });
        });

        // Kapatma butonuna tıklandığında
        if (modalKapat) {
            modalKapat.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Modalın dışına tıklandığında
        modal.addEventListener('click', (olay) => {
            if (olay.target === modal) {
                modal.classList.remove('active');
            }
        });
        
        // ESC tuşuna basıldığında
        document.addEventListener('keydown', (olay) => {
            if (olay.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

    // Hata ayıklama için konsola yazdır
    console.log('MINAS Kafe Web Sitesi Başarıyla Yüklendi');
})();
