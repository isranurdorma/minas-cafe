/* ===========================
   MINAS KAFE - THEME MANAGEMENT
   =========================== */

(function() {
    'use strict';

    const body = document.body;
    const themeBtn = document.querySelector('.btn-theme');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Get saved theme from localStorage or use system preference
    function getInitialTheme() {
        const saved = localStorage.getItem('theme');
        
        if (saved) {
            return saved;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark-theme';
        }
        
        return 'light-theme';
    }

    // Initialize theme
    function initTheme() {
        const theme = getInitialTheme();
        setTheme(theme);
    }

    // Set theme
    function setTheme(theme) {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
        updateMetaThemeColor(theme);
    }

    // Update theme icon
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark-theme' ? '☀️' : '🌙';
        }
    }

    // Update meta theme-color tag for mobile browsers
    function updateMetaThemeColor(theme) {
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.setAttribute('content', theme === 'dark-theme' ? '#1a3d0a' : '#2d5016');
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        setTheme(newTheme);
    }

    // Theme button event listener
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a theme
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark-theme' : 'light-theme');
            }
        });
    }

    // Add keyboard shortcut (Ctrl/Cmd + Shift + T to toggle theme)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            toggleTheme();
        }
    });

    // Initialize theme on load
    initTheme();

    console.log('Theme module loaded - Current theme: ' + getInitialTheme());
})();
