// script.js (最新版)
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.parallax-bg', { // パララックス背景アニメーションの適用対象を .parallax-bg クラスに変更
        backgroundPositionY: '50%',
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".hamburger-menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


