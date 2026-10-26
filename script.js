const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

function updateSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');

    if (currentSlide === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentSlide === slides.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
    }
});

updateSlides();
