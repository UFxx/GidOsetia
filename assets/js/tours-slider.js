const sliderLeftArrow = document.querySelector('.slider-arrow-left');
const sliderRightArrow = document.querySelector('.slider-arrow-right');
const sliderLine = document.querySelector('.tours-slider-line');
const sliderLineItems = document.querySelectorAll('.slider-line-item');
let sliderOffset = 0;
let maxOffset = 3200;

sliderLeftArrow.addEventListener('click', () => {
    if (sliderOffset > 0) {
        sliderOffset = -3040;
    }
    sliderOffset += 760;
    sliderLine.style.marginLeft = sliderOffset + 'px';
    console.log(sliderOffset);
})

sliderRightArrow.addEventListener('click', () => {
    if (sliderOffset < -3040) {
        sliderOffset = 0;
    }
    sliderOffset -= 760;
    sliderLine.style.marginLeft = sliderOffset + 'px';
})