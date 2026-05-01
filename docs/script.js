document.documentElement.classList.add("js");

// =============================
// ANIMAÇÃO AO ROLAR
// =============================
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));


// =============================
// TEXTO DIGITANDO
// =============================
function typeWriter(element, speed = 50) {
    const text = element.textContent;
    element.textContent = "";

    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}


// =============================
// HEADER SOME AO ROLAR
// =============================
let lastScroll = 0;
const header = document.getElementById("header");

const root = document.documentElement;
const projetosSection = document.querySelector('.section.projetos');
let ticking = false;

function updateProjetosStars() {
    if (!projetosSection) return;
    const rect = projetosSection.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, rect.top / window.innerHeight));
    const opacity = 0.12 + ratio * 0.88;
    root.style.setProperty('--projetos-star-opacity', opacity.toFixed(2));
}

function updateScrollColors() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;
    const hue = 222 + progress * 10;
    const sat = 76 - progress * 4;
    const light1 = 11 + progress * 1.5;
    const light2 = 24 + progress * 2.4;
    const light3 = 32 + progress * 2.8;
    const overlay = 0.08 + progress * 0.07;

    root.style.setProperty('--bg-hue', hue.toFixed(1));
    root.style.setProperty('--bg-sat', `${sat.toFixed(1)}%`);
    root.style.setProperty('--bg-light-1', `${light1.toFixed(1)}%`);
    root.style.setProperty('--bg-light-2', `${light2.toFixed(1)}%`);
    root.style.setProperty('--bg-light-3', `${light3.toFixed(1)}%`);
    root.style.setProperty('--bg-overlay', overlay.toFixed(3));
}

updateScrollColors();
updateProjetosStars();

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollColors();
            updateProjetosStars();
            ticking = false;
        });
        ticking = true;
    }
});


// =============================
// SCROLL SUAVE
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        // 🔥 ignora QUALQUER link inválido
        if (!target || target === "#" || target.length < 2) return;

        const element = document.querySelector(target);

        if (!element) return;

        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
    });
});


// =============================
// CARROSSEL BANNER (COM SETAS + AUTO)
// =============================
const trackBanner = document.querySelector('.track-banner');
const slidesBanner = document.querySelectorAll('.track-banner img');
const prevBanner = document.querySelector('.prev-banner');
const nextBanner = document.querySelector('.next-banner');

if (trackBanner && slidesBanner.length > 0) {
    let bannerIndex = 0;

    const updateBanner = () => {
        trackBanner.style.transform = `translateX(-${bannerIndex * 100}%)`;
    };

    nextBanner?.addEventListener('click', () => {
        bannerIndex = (bannerIndex + 1) % slidesBanner.length;
        updateBanner();
    });

    prevBanner?.addEventListener('click', () => {
        bannerIndex = (bannerIndex - 1 + slidesBanner.length) % slidesBanner.length;
        updateBanner();
    });

    setInterval(() => {
        bannerIndex = (bannerIndex + 1) % slidesBanner.length;
        updateBanner();
    }, 4000);
}

const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('active');
};
window.toggleMenu = toggleMenu;

const toggleDropdown = (e) => {
    if (window.innerWidth > 768) return;
    e.preventDefault();

    const dropdown = e.currentTarget?.closest('.dropdown');
    if (!dropdown) return;

    const isOpen = dropdown.classList.contains('active');
    document.querySelectorAll('.dropdown.active').forEach(d => d.classList.remove('active'));

    if (!isOpen) {
        dropdown.classList.add('active');
    }
};
window.toggleDropdown = toggleDropdown;

const initWhatsApp = () => {
    const whatsapp = document.getElementById('whatsappBtn');
    const bubble = document.getElementById('chatBubble');
    const badge = document.getElementById('badge');

    if (!whatsapp || !bubble || !badge) return;

    setTimeout(() => whatsapp.classList.add('show'), 500);

    setTimeout(() => {
        bubble.style.opacity = '1';
        bubble.style.transform = 'translateY(0)';
    }, 800);

    setTimeout(() => {
        bubble.style.opacity = '0';
    }, 3800);

    setTimeout(() => {
        badge.style.opacity = '1';
        whatsapp.classList.add('glow');

        setInterval(() => {
            badge.classList.add('jump');
            setTimeout(() => badge.classList.remove('jump'), 500);
        }, 4000);
    }, 5000);
};

const initProjetosCarousel = () => {
    const carouselProj = document.querySelector('.carousel-projetos');
    const trackProj = document.querySelector('.track-projetos');
    const itemsProj = document.querySelectorAll('.carousel-projetos .item');
    const nextProj = document.querySelector('.next-projetos');
    const prevProj = document.querySelector('.prev-projetos');

    if (!carouselProj || !trackProj || itemsProj.length === 0) return;

    let index = Math.floor(itemsProj.length / 2);
    const gap = 16;

    const updateProj = () => {
        const itemWidth = itemsProj[0].offsetWidth + gap;
        const containerWidth = carouselProj.offsetWidth;
        const trackWidth = itemWidth * itemsProj.length - gap;
        const centerOffset = index * itemWidth - (containerWidth / 2 - itemsProj[0].offsetWidth / 2);
        const maxOffset = Math.max(0, trackWidth - containerWidth);
        const translateX = trackWidth <= containerWidth
            ? (containerWidth - trackWidth) / 2
            : Math.min(maxOffset, Math.max(0, centerOffset));

        trackProj.style.transform = trackWidth <= containerWidth
            ? `translateX(${translateX}px)`
            : `translateX(-${translateX}px)`;
        itemsProj.forEach(item => item.classList.remove('active'));
        itemsProj[index]?.classList.add('active');
    };

    nextProj?.addEventListener('click', () => {
        if (index < itemsProj.length - 1) {
            index += 1;
            updateProj();
        }
    });

    prevProj?.addEventListener('click', () => {
        if (index > 0) {
            index -= 1;
            updateProj();
        }
    });

    window.addEventListener('resize', updateProj);
    updateProj();
};

const initCatalogCarousel = () => {
    const catalogWindow = document.querySelector('.catalogo-window');
    const catalogTrack = document.querySelector('.catalogo-track');
    const catalogPanels = document.querySelectorAll('.catalogo-panel');
    const prevCatalog = document.querySelector('.catalogo-nav-left');
    const nextCatalog = document.querySelector('.catalogo-nav-right');

    if (!catalogWindow || !catalogTrack || catalogPanels.length === 0) return;

    let currentIndex = 0;
    const gap = 24;

    const updateCatalog = () => {
        const panelWidth = catalogWindow.offsetWidth;
        catalogTrack.style.transform = `translateX(-${currentIndex * (panelWidth + gap)}px)`;
        if (prevCatalog) prevCatalog.disabled = currentIndex === 0;
        if (nextCatalog) nextCatalog.disabled = currentIndex === catalogPanels.length - 1;
    };

    nextCatalog?.addEventListener('click', () => {
        if (currentIndex < catalogPanels.length - 1) {
            currentIndex += 1;
            updateCatalog();
        }
    });

    prevCatalog?.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateCatalog();
        }
    });

    window.addEventListener('resize', updateCatalog);
    updateCatalog();
};

const initFormAtacado = () => {
    const form = document.getElementById('formAtacado');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const celular = document.getElementById('celular')?.value || '';
        const produto = document.getElementById('produto')?.value || '';
        const quantidade = document.getElementById('quantidade')?.value || '';
        const descricao = document.getElementById('descricao')?.value || '';

        const mensagem = `Receba Cotação!\nNome: ${nome}\nEmail: ${email}\nCelular: ${celular}\nProduto: ${produto}\nQuantidade: ${quantidade}\nDescrição: ${descricao}`;
        const url = `https://wa.me/5511919359249?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });
};

const initMenuLinks = () => {
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.classList.contains('btn-produtos')) return;
        link.addEventListener('click', () => {
            document.getElementById('menu')?.classList.remove('active');
        });
    });
};

const ready = () => {
    initWhatsApp();
    initProjetosCarousel();
    initCatalogCarousel();
    initFormAtacado();
    initMenuLinks();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
