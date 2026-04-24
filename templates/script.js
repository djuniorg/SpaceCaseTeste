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

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});


// =============================
// SCROLL SUAVE
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// =============================
// TUDO QUE PRECISA DO DOM
// =============================
document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // WHATSAPP
    // =============================
    const whatsapp = document.getElementById("whatsappBtn");
    const bubble = document.getElementById("chatBubble");
    const badge = document.getElementById("badge");

    if (whatsapp && bubble && badge) {

        setTimeout(() => {
            whatsapp.classList.add("show");
        }, 500);

        setTimeout(() => {
            bubble.style.opacity = "1";
            bubble.style.transform = "translateY(0)";
        }, 800);

        setTimeout(() => {
            bubble.style.opacity = "0";
        }, 4800);

        setTimeout(() => {
            badge.style.opacity = "1";
            whatsapp.classList.add("glow");

            setInterval(() => {
                badge.classList.add("jump");

                setTimeout(() => {
                    badge.classList.remove("jump");
                }, 500);

            }, 4000);

        }, 5000);
    }


    // =============================
    // CARROSSEL HERO (GRANDE)
    // =============================
    const trackHero = document.querySelector('.carousel-track');
    const slidesHero = document.querySelectorAll('.carousel img');
    const prevHero = document.querySelector('.prev');
    const nextHero = document.querySelector('.next');

    if (trackHero && slidesHero.length > 0) {

        let index = 0;

        function updateHero() {
            trackHero.style.transform = `translateX(-${index * 100}%)`;
        }

        nextHero?.addEventListener('click', () => {
            index = (index + 1) % slidesHero.length;
            updateHero();
        });

        prevHero?.addEventListener('click', () => {
            index = (index - 1 + slidesHero.length) % slidesHero.length;
            updateHero();
        });

        // autoplay
        setInterval(() => {
            index = (index + 1) % slidesHero.length;
            updateHero();
        }, 5000);
    }


    // =============================
    // CARROSSEL PROJETOS (LATERAL)
    // =============================
    const trackProj = document.querySelector('.track-projetos');
    const itemsProj = document.querySelectorAll('.carousel-projetos .item');
    const nextProj = document.querySelector('.next-projetos');
    const prevProj = document.querySelector('.prev-projetos');

    if (trackProj && itemsProj.length > 0) {

        let index = 0;
        const visible = 3; // quantos aparecem por vez

        function updateProj() {
            const itemWidth = itemsProj[0].offsetWidth + 15;
            trackProj.style.transform = `translateX(-${index * itemWidth}px)`;
        }

        nextProj?.addEventListener('click', () => {
            if (index < itemsProj.length - visible) {
                index++;
                updateProj();
            }
        });

        prevProj?.addEventListener('click', () => {
            if (index > 0) {
                index--;
                updateProj();
            }
        });
    }


// =============================
// CARROSSEL BANNER (COM SETAS + AUTO)
// =============================
const trackBanner = document.querySelector('.track-banner');
const slidesBanner = document.querySelectorAll('.track-banner img');
const prevBanner = document.querySelector('.prev-banner');
const nextBanner = document.querySelector('.next-banner');

if (trackBanner && slidesBanner.length > 0) {

    let index = 0;

    function updateBanner() {
        trackBanner.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBanner?.addEventListener('click', () => {
        index = (index + 1) % slidesBanner.length;
        updateBanner();
    });

    prevBanner?.addEventListener('click', () => {
        index = (index - 1 + slidesBanner.length) % slidesBanner.length;
        updateBanner();
    });

    // autoplay
    setInterval(() => {
        index = (index + 1) % slidesBanner.length;
        updateBanner();
    }, 4000);
}})

console.log("JS CARREGOU");

document.addEventListener("DOMContentLoaded", () => {

    function toggleMenu() {
        console.log("clicou");
        const menu = document.getElementById("menu");
        menu.classList.toggle("active");
    }

    // deixa a função global pro HTML usar
    window.toggleMenu = toggleMenu;

    // fecha ao clicar nos links
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("menu").classList.remove("active");
        });
    });

});
