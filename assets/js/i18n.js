/* ===========================
   MINAS KAFE - INTERNATIONALIZATION (i18n)
   =========================== */

(function() {
    'use strict';

    // Çeviriler
    const ceviriler = {
        tr: {
            'Anasayfa': 'Anasayfa',
            'Hakkımızda': 'Hakkımızda',
            'Menü': 'Menü',
            'Galeri': 'Galeri',
            'İletişim': 'İletişim',
            'Premium Kahve Deneyimi': 'Premium Kahve Deneyimi',
            'Mükemmel Kahvenin Tadını Çıkar': 'Mükemmel Kahvenin Tadını Çıkar',
            'Dünya standartlarında kahve, yerel sıcaklığında hizmet': 'Dünya standartlarında kahve, yerel sıcaklığında hizmet',
            'İletişim Bilgisi': 'İletişim Bilgisi',
            'MINAS Kafe, 2015 yılından beri Türkiye\'nin en iyi kahvesini sunmaktadır. Etiyopya, Kenya ve Brazil\'den özel olarak seçilmiş kahve çekirdekleri kullanıyoruz.': 'MINAS Kafe, 2015 yılından beri Türkiye\'nin en iyi kahvesini sunmaktadır. Etiyopya, Kenya ve Brazil\'den özel olarak seçilmiş kahve çekirdekleri kullanıyoruz.',
            'Barista ekibimiz dünya şampiyonluklarında ödüllü, kalite ve müşteri memnuniyeti bizim önceliğimiz.': 'Barista ekibimiz dünya şampiyonluklarında ödüllü, kalite ve müşteri memnuniyeti bizim önceliğimiz.',
            'Neden MINAS Kafe?': 'Neden MINAS Kafe?',
            '🏆 Dünya kalitesinde kahve': '🏆 Dünya kalitesinde kahve',
            '👨‍🍳 Profesyonel Barista Ekibi': '👨‍🍳 Profesyonel Barista Ekibi',
            '🌿 Organik & Sürdürülebilir': '🌿 Organik & Sürdürülebilir',
            '❤️ Huzurlu Atmosfer': '❤️ Huzurlu Atmosfer',
            'Yıl Deneyim': 'Yıl Deneyim',
            'Günlük Müşteri': 'Günlük Müşteri',
            'Kahve Çeşidi': 'Kahve Çeşidi',
            'Menülerimiz': 'Menülerimiz',
            'Taze ve lezzetli seçenekler': 'Taze ve lezzetli seçenekler',
            'Cold & Hot Kahveler ve İçecekler': 'Cold & Hot Kahveler ve İçecekler',
            'Espresso, cappuccino, latte ve daha birçok seçenek': 'Espresso, cappuccino, latte ve daha birçok seçenek',
            'İçecekler & Atıştırmalıklar': 'İçecekler & Atıştırmalıklar',
            'Ev yapımı pasta, kurabiye ve serinletici içecekler': 'Ev yapımı pasta, kurabiye ve serinletici içecekler',
            'Mekanımız': 'Mekanımız',
            'Sıcak ve huzurlu atmosfer': 'Sıcak ve huzurlu atmosfer',
            'Rahatlık': 'Rahatlık',
            'Sosyal Alan': 'Sosyal Alan',
            'Bar Bölümü': 'Bar Bölümü',
            'Dış Görünüş': 'Dış Görünüş',
            'Yüksek Kalite': 'Yüksek Kalite',
            'Bize Ulaşın': 'Bize Ulaşın',
            'Sorularınız mı var? Bize yazın!': 'Sorularınız mı var? Bize yazın!',
            'İletişim Bilgileri': 'İletişim Bilgileri',
            'Adres:': 'Adres:',
            'Telefon:': 'Telefon:',
            'E-mail:': 'E-mail:',
            'Çalışma Saatleri:': 'Çalışma Saatleri:',
            'Pazartesi - Pazar: 08:00 - 22:00': 'Pazartesi - Pazar: 08:00 - 22:00',
            'Mesaj Gönderin': 'Mesaj Gönderin',
            'Adınız': 'Adınız',
            'E-mail Adresiniz': 'E-mail Adresiniz',
            'Mesajınız': 'Mesajınız',
            'Gönder': 'Gönder',
            'Hızlı Linkler': 'Hızlı Linkler',
            'Sosyal Ağlar': 'Sosyal Ağlar',
            '© 2024 MINAS Kafe. Tüm hakları saklıdır.': '© 2024 MINAS Kafe. Tüm hakları saklıdır.',
            'Türkiye\'nin en iyi kahvesi, huzurlu ortamında.': 'Türkiye\'nin en iyi kahvesi, huzurlu ortamında.'
        },
        en: {
            'Anasayfa': 'Home',
            'Hakkımızda': 'About',
            'Menü': 'Menu',
            'Galeri': 'Gallery',
            'İletişim': 'Contact',
            'Premium Kahve Deneyimi': 'Premium Coffee Experience',
            'Mükemmel Kahvenin Tadını Çıkar': 'Taste the Perfect Coffee',
            'Dünya standartlarında kahve, yerel sıcaklığında hizmet': 'World-class coffee with local warmth',
            'İletişim Bilgisi': 'Get In Touch',
            'MINAS Kafe, 2015 yılından beri Türkiye\'nin en iyi kahvesini sunmaktadır. Etiyopya, Kenya ve Brazil\'den özel olarak seçilmiş kahve çekirdekleri kullanıyoruz.': 'MINAS Cafe has been serving Turkey\'s finest coffee since 2015. We use specially selected coffee beans from Ethiopia, Kenya, and Brazil.',
            'Barista ekibimiz dünya şampiyonluklarında ödüllü, kalite ve müşteri memnuniyeti bizim önceliğimiz.': 'Our award-winning barista team is committed to quality and customer satisfaction.',
            'Neden MINAS Kafe?': 'Why MINAS Cafe?',
            '🏆 Dünya kalitesinde kahve': '🏆 World-class coffee',
            '👨‍🍳 Profesyonel Barista Ekibi': '👨‍🍳 Professional Barista Team',
            '🌿 Organik & Sürdürülebilir': '🌿 Organic & Sustainable',
            '❤️ Huzurlu Atmosfer': '❤️ Peaceful Atmosphere',
            'Yıl Deneyim': 'Years Experience',
            'Günlük Müşteri': 'Daily Customers',
            'Kahve Çeşidi': 'Coffee Types',
            'Menülerimiz': 'Our Menus',
            'Taze ve lezzetli seçenekler': 'Fresh and delicious options',
            'Cold & Hot Kahveler ve İçecekler': 'Cold & Hot Coffees and Beverages',
            'Espresso, cappuccino, latte ve daha birçok seçenek': 'Espresso, cappuccino, latte and many more options',
            'İçecekler & Atıştırmalıklar': 'Beverages & Snacks',
            'Ev yapımı pasta, kurabiye ve serinletici içecekler': 'Homemade cakes, cookies and refreshing beverages',
            'Mekanımız': 'Our Place',
            'Sıcak ve huzurlu atmosfer': 'Warm and peaceful atmosphere',
            'Rahatlık': 'Comfort',
            'Sosyal Alan': 'Social Space',
            'Bar Bölümü': 'Bar Section',
            'Dış Görünüş': 'Exterior View',
            'Yüksek Kalite': 'Quality',
            'Bize Ulaşın': 'Get In Touch',
            'Sorularınız mı var? Bize yazın!': 'Have questions? Write to us!',
            'İletişim Bilgileri': 'Contact Information',
            'Adres:': 'Address:',
            'Telefon:': 'Phone:',
            'E-mail:': 'Email:',
            'Çalışma Saatleri:': 'Business Hours:',
            'Pazartesi - Pazar: 08:00 - 22:00': 'Monday - Sunday: 08:00 - 22:00',
            'Mesaj Gönderin': 'Send a Message',
            'Adınız': 'Your Name',
            'E-mail Adresiniz': 'Your Email',
            'Mesajınız': 'Your Message',
            'Gönder': 'Send',
            'Hızlı Linkler': 'Quick Links',
            'Sosyal Ağlar': 'Social Media',
            '© 2024 MINAS Kafe. Tüm hakları saklıdır.': '© 2024 MINAS Cafe. All rights reserved.',
            'Türkiye\'nin en iyi kahvesi, huzurlu ortamında.': 'Turkey\'s finest coffee in a peaceful setting.'
        }
    };

    // localStorage'dan dili al veya Türkçe yap
    let gecerliDil = localStorage.getItem('language') || 'tr';

    // Dili başlat
    function diliBaslat() {
        document.documentElement.lang = gecerliDil;
        
        // Butonları güncelle
        document.querySelectorAll('.btn-lang').forEach(buton => {
            buton.classList.toggle('active', buton.dataset.lang === gecerliDil);
        });

        sayfaDiliniGuncelle();
    }

    // Sayfa metinlerini dile göre güncelle
    function sayfaDiliniGuncelle() {
        const gecerliCeviriler = ceviriler[gecerliDil];

        // data-tr ve data-en içeren tüm elemanları güncelle
        document.querySelectorAll('[data-tr]').forEach(eleman => {
            if (gecerliCeviriler[eleman.dataset.tr]) {
                if (eleman.tagName === 'INPUT' || eleman.tagName === 'TEXTAREA') {
                    eleman.placeholder = gecerliDil === 'tr' ? eleman.dataset.tr : eleman.dataset.en;
                } else {
                    eleman.textContent = gecerliDil === 'tr' ? eleman.dataset.tr : eleman.dataset.en;
                }
            }
        });

        // Başlığı güncelle
        if (gecerliDil === 'en') {
            document.title = 'MINAS Cafe - Premium Coffee Experience | Antalya';
            document.querySelector('meta[name="description"]').content = 'MINAS Cafe - Turkey\'s finest coffee. Premium coffee experience in a peaceful setting.';
        } else {
            document.title = 'MINAS Kafe - Premium Kahve Deneyimi | Antalya';
            document.querySelector('meta[name="description"]').content = 'MINAS Kafe - Türkiye\'nin en iyi kahvesi. Huzurlu ortamda premium kahve deneyimi.';
        }
    }

    // Dil butonu dinleyicileri
    document.querySelectorAll('.btn-lang').forEach(buton => {
        buton.addEventListener('click', function() {
            gecerliDil = this.dataset.lang;
            localStorage.setItem('language', gecerliDil);
            
            // Aktif butonu güncelle
            document.querySelectorAll('.btn-lang').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Sayfayı güncelle
            diliBaslat();
            
            // Yönü ayarla (RTL diller için)
            document.documentElement.dir = gecerliDil === 'ar' ? 'rtl' : 'ltr';
        });
    });

    // Yüklenirken başlat
    diliBaslat();

    console.log('Dil modülü yüklendi - Geçerli dil: ' + gecerliDil);
})();
