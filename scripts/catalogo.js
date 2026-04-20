import { categories } from './catalog/data.js';
import { createCarousel } from './catalog/components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        const normalizeImageSrc = src => {
            if (/^https?:\/\//i.test(src)) return src;
            if (src.startsWith('/')) return src;
            if (src.startsWith('..')) return src;
            return `../../${src}`;
        };

        const finalImage = normalizeImageSrc(imagemPerfil);

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = finalImage;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }

    const themeBtn = document.getElementById('theme-toggle-catalog');

    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light');
            if (themeBtn) {
                themeBtn.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
            }
        } else {
            document.body.classList.remove('light');
            if (themeBtn) {
                themeBtn.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
            }
        }
        localStorage.setItem('devflix-theme', theme);
    };

    const savedTheme = localStorage.getItem('devflix-theme') || 'dark';
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.contains('light');
            applyTheme(isLight ? 'dark' : 'light');
        });
    }
});
