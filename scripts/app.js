const container = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const jobTitle = document.getElementById("job-title");
const implementationTime = document.getElementById("implementation-time");
const techStack = document.getElementById("tech-stack");

// Function to update the description dynamically
function updateDefaultDescription() {
    const activeSlide = document.querySelector(".slide:nth-of-type(4)"); // Always get the front slide
    if (activeSlide) {
        jobTitle.textContent = activeSlide.getAttribute("data-title");
        implementationTime.textContent = activeSlide.getAttribute("data-time");
        techStack.textContent = activeSlide.getAttribute("data-tech");
    }
}

// Set initial description when page loads
document.addEventListener("DOMContentLoaded", () => {
    updateDefaultDescription();

    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.addEventListener("mouseenter", () => {
            jobTitle.textContent = slide.getAttribute("data-title");
            implementationTime.textContent = slide.getAttribute("data-time");
            techStack.textContent = slide.getAttribute("data-tech");
        });

        slide.addEventListener("mouseleave", updateDefaultDescription);
    });
});

// Move first slide to end on 'prev' click
prev.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    container.append(slides[0]); // Move first slide to end
    setTimeout(updateDefaultDescription, 100); // Update description after movement
});

// Move last slide to front on 'next' click
next.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    container.prepend(slides[slides.length - 1]); // Move last slide to beginning
    setTimeout(updateDefaultDescription, 100); // Update description after movement
});
