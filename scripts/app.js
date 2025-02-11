document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "./assets/MedicRecallPoster.jpg", 
        "./assets/RepVizPoster.jpg"
    ];
    const links = [
        "https://medicrecall.com/", 
        "https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring"
    ];
    const slider = document.getElementById("slider");

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.dataset.index = index;
        img.addEventListener("click", () => {
            window.location.href = links[index];
        });
        slider.appendChild(img);
    });

    let currentIndex = 0;
    function updateActiveImage() {
        const imgs = document.querySelectorAll(".slider img");
        imgs.forEach(img => img.classList.remove("active"));
        imgs[currentIndex].classList.add("active");
    }
    updateActiveImage();

    function slideNext() {
        currentIndex = (currentIndex + 1) % images.length;
        slider.style.transform = `translateX(-${currentIndex * 170}px)`;
        updateActiveImage();
    }
    setInterval(slideNext, 2000);
});
