document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const sliderContainer = document.getElementById("slider-container");

    const imagesSrc = [
        "assets/MedicRecallPoster.png",
        "assets/RepVizPoster.png"
    ];

    // Create infinite loop by duplicating images
    for (let i = 0; i < 10; i++) {
        imagesSrc.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.onclick = () => window.location.href = 
                src.includes("MedicRecall") ? 
                'https://medicrecall.com/' : 
                'https://github.com/JeeIn-Park/Training-Tracker-Workout-Monitoring';
            slider.appendChild(img);
        });
    }

    // Dragging Logic
    let isDragging = false;
    let startX, scrollLeft;

    sliderContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = "grabbing";
    });

    sliderContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        slider.style.cursor = "grab";
    });

    sliderContainer.addEventListener("mouseup", () => {
        isDragging = false;
        slider.style.cursor = "grab";
    });

    sliderContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Increase speed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Mobile touch support
    let touchStartX = 0;
    let touchScrollLeft = 0;

    sliderContainer.addEventListener("touchstart", (e) => {
        isDragging = true;
        touchStartX = e.touches[0].pageX - slider.offsetLeft;
        touchScrollLeft = slider.scrollLeft;
    });

    sliderContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - touchStartX) * 2;
        slider.scrollLeft = touchScrollLeft - walk;
    });

    sliderContainer.addEventListener("touchend", () => {
        isDragging = false;
    });
});
