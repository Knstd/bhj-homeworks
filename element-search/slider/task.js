let sliders = Array.from(document.getElementsByClassName("slider__item"));
let right = document.querySelector(".slider__arrow_next");
let left = document.querySelector(".slider__arrow_prev");
let currentSlide = 0;

right.onclick = () => {
    sliders[currentSlide].className = "slider__item";
    currentSlide++;
    if (currentSlide >= sliders.length) {
        currentSlide = 0;
    }
    sliders[currentSlide].className = "slider__item slider__item_active";
};

left.onclick = () => {
    sliders[currentSlide].className = "slider__item";
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliders.length - 1;
    }
    sliders[currentSlide].className = "slider__item slider__item_active";
};