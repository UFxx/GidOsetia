const sliderLeftArrow = document.querySelector('.slider-arrow-left');
const sliderRightArrow = document.querySelector('.slider-arrow-right');
const sliderLine = document.querySelector('.events-slider-line');
const sliderLineItems = document.querySelectorAll('.slider-line-item');
let sliderOffset = 0;
let maxOffset = (sliderLineItems.length - 2) * 370;

let i = 1;
sliderLineItems[i].classList.add('slider-line-item__active');
sliderLeftArrow.addEventListener('click', () => {
    sliderOffset += 370;
    if (sliderOffset > maxOffset - (2 * 370)) {
        sliderOffset = -maxOffset;
        i = sliderLineItems.length;
    }

    sliderLine.style.left = sliderOffset + 'px';
    sliderLineItems.forEach(el => {
        el.classList.remove('slider-line-item__active');
    })

    i -= 1;
    sliderLineItems[i].classList.add('slider-line-item__active');
})

// !!!
sliderRightArrow.addEventListener('click', () => {
    sliderOffset -= 370;
    if (sliderOffset < -maxOffset) {
        sliderOffset = 500;
        i = -1;
    }
    sliderLine.style.left = sliderOffset + 'px';

    sliderLineItems.forEach(el => {
        el.classList.remove('slider-line-item__active');
    })

    i += 1;
    sliderLineItems[i].classList.add('slider-line-item__active');
})