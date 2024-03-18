const sliderLeftArrow = document.querySelector('.slider-arrow-left');
const sliderRightArrow = document.querySelector('.slider-arrow-right');
const sliderLine = document.querySelector('.tours-slider-line');
const sliderLineItems = document.querySelectorAll('.slider-line-item');
const sliderItemTitle = document.querySelectorAll('.slider-item-title');
let sliderOffset = 500;
let maxOffset = (sliderLineItems.length - 2) * 370;

let i = 0;
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

    sliderItemTitle.forEach(el => {
        el.classList.remove('slider-item-title__active')
    })

    i -= 1;
    sliderLineItems[i].classList.add('slider-line-item__active');
    sliderItemTitle[i].classList.add('slider-item-title__active');
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

    sliderItemTitle.forEach(el => {
        el.classList.remove('slider-item-title__active')
    })

    i += 1;
    sliderLineItems[i].classList.add('slider-line-item__active');
    sliderItemTitle[i].classList.add('slider-item-title__active');
})