document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", { duration: 1, opacity: 0, y: -50 });
    gsap.from(".project-card", { duration: 1, opacity: 0, y: 30, stagger: 0.3 });
});
