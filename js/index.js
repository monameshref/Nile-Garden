//! AOS library
AOS.init();

//! Owl library
$(document).ready(function(){
    $(".owl-carousel.banner").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots:true,
        nav: false,
        // stagePadding: 150,
        rtl: true
    });
});

$(document).ready(function(){
    $(".owl-carousel.our-customers").owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dots: false,
        nav: true,
        rtl: true,
    });
});


//! GSAP library (Overlay)
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const overlay = card.querySelector(".overlay");

    const getDirection = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = rect.width;
        const h = rect.height;

        const fromTop = Math.abs(y);
        const fromBottom = Math.abs(h - y);
        const fromLeft = Math.abs(x);
        const fromRight = Math.abs(w - x);

        const min = Math.min(fromTop, fromBottom, fromLeft, fromRight);

        if (min === fromTop) return "top";
        if (min === fromBottom) return "bottom";
        if (min === fromLeft) return "left";
        return "right";
    };

    card.addEventListener("mouseenter", (e) => {
        const dir = getDirection(e);
        let from = { x: 0, y: 0 };

        if (dir === "top") from = { y: "-100%" };
        if (dir === "bottom") from = { y: "100%" };
        if (dir === "left") from = { x: "-100%" };
        if (dir === "right") from = { x: "100%" };

        gsap.fromTo(overlay, from, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", (e) => {
        const dir = getDirection(e);
        let to = { x: 0, y: 0 };

        if (dir === "top") to = { y: "-100%" };
        if (dir === "bottom") to = { y: "100%" };
        if (dir === "left") to = { x: "-100%" };
        if (dir === "right") to = { x: "100%" };

        gsap.to(overlay, { ...to, duration: 0.4, ease: "power2.in" });
    });
});


//! Navbar
    const menuBtn = document.querySelector('.menu i');
    const bottomBar = document.querySelector('.bottom-bar');

    menuBtn.addEventListener('click', () => {
        bottomBar.classList.toggle('show-menu');
    });
