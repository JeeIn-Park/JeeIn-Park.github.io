document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");

    // Ensure preloader is hidden after the page loads
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 800); // Delay to match the fade-out animation

    // Add page transition effect on navigation links
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            const targetURL = this.href; // Get the link URL

            // Show preloader before navigating
            preloader.classList.remove("hidden");

            gsap.to(preloader, { 
                duration: 0.5, 
                opacity: 1, 
                onComplete: () => {
                    window.location.href = targetURL; // Change page after animation
                }
            });
        });
    });
});
