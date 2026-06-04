/* ===========================
   MINAS KAFE - THEME MANAGEMENT
   =========================== */

(function() {
    'use strict';

    const govde = document.body;
    const temaButonu = document.querySelector('.btn-theme');
    const temaIkonu = document.querySelector('.theme-icon');
    
    // Kayıtlı temayı veya sistem tercihini al
    function baslangicTemasiniAl() {
        const kaydedilen = localStorage.getItem('theme');
        
        if (kaydedilen) {
            return kaydedilen;
        }
        
        // Sistem tercihini kontrol et
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark-theme';
        }
        
        return 'light-theme';
    }

    // Temayı başlat
    function temayiBaslat() {
        const tema = baslangicTemasiniAl();
        temayiAyarla(tema);
    }

    // Temayı ayarla
    function temayiAyarla(tema) {
        govde.classList.remove('light-theme', 'dark-theme');
        govde.classList.add(tema);
        localStorage.setItem('theme', tema);
        temaIkonunuGuncelle(tema);
        metaTemaRenginiGuncelle(tema);
    }

    // Tema ikonunu güncelle
    function temaIkonunuGuncelle(tema) {
        if (temaIkonu) {
            temaIkonu.textContent = tema === 'dark-theme' ? '☀️' : '🌙';
        }
    }

    // Mobil tarayıcılar için meta tema rengini güncelle
    function metaTemaRenginiGuncelle(tema) {
        const metaTema = document.querySelector('meta[name="theme-color"]');
        if (metaTema) {
            metaTema.setAttribute('content', tema === 'dark-theme' ? '#1a3d0a' : '#2d5016');
        }
    }

    // Temayı değiştir
    function temayiDegistir() {
        const gecerliTema = govde.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        const yeniTema = gecerliTema === 'dark-theme' ? 'light-theme' : 'dark-theme';
        temayiAyarla(yeniTema);
    }

    // Tema butonu tıklama dinleyicisi
    if (temaButonu) {
        temaButonu.addEventListener('click', temayiDegistir);
    }

    // Sistem teması değişikliklerini dinle
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (olay) => {
            // Kullanıcı manuel olarak tema ayarlamadıysa otomatik değiştir
            if (!localStorage.getItem('theme')) {
                temayiAyarla(olay.matches ? 'dark-theme' : 'light-theme');
            }
        });
    }

    // Klavye kısayolu ekle (Ctrl/Cmd + Shift + T)
    document.addEventListener('keydown', (olay) => {
        if ((olay.ctrlKey || olay.metaKey) && olay.shiftKey && olay.key === 'T') {
            olay.preventDefault();
            temayiDegistir();
        }
    });

    // Yüklenirken temayı başlat
    temayiBaslat();

    console.log('Tema modülü yüklendi - Geçerli tema: ' + baslangicTemasiniAl());
})();
