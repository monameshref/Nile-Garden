//! AOS library
AOS.init();




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


























// const cards = document.querySelectorAll('.image');

// cards.forEach(card => {
//     const overlay = card.querySelector('.overlay');

//     card.addEventListener('mouseenter', (e) => {
//         const direction = getDirection(e, card);
//         overlay.classList.remove('from-top', 'from-bottom', 'from-left', 'from-right');
//         overlay.classList.add(direction);
//     });

//     card.addEventListener('mouseleave', (e) => {
//         const direction = getDirection(e, card);
//         overlay.classList.remove('from-top', 'from-bottom', 'from-left', 'from-right');
//         overlay.classList.add(direction);
//     });
// });

// function getDirection(e, element) {
//     const rect = element.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     const angle = Math.atan2(y, x) * (180 / Math.PI);
//     const directions = ['from-right', 'from-bottom', 'from-left', 'from-top'];
//     const index = Math.round(((angle + 180) / 90) + 3) % 4;
//     return directions[index];
// }
