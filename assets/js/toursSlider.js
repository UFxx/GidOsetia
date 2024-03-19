const sliderLine = document.querySelector('.tours-slider-line');
const sliderLineItems = document.querySelectorAll('.slider-line-item');
const sliderItemTitle = document.querySelectorAll('.slider-item-title');
const sliderMethodCheckbox = document.querySelector('.change-slider-method input');
const sliderLeftArrow = document.querySelector('.slider-arrow-left');
const sliderRightArrow = document.querySelector('.slider-arrow-right');
const sliderLeft = document.querySelector('.slider-line-left');
const sliderRight = document.querySelector('.slider-line-right');

sliderMethodCheckbox.addEventListener('change', () => {
    if (sliderMethodCheckbox.checked) {
        sliderLeft.addEventListener('mouseover', () => {
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

        sliderRight.addEventListener('mouseover', () => {
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
        sliderLeftArrow.style.display = 'none'
        sliderRightArrow.style.display = 'none'
        sliderLeft.style.display= 'block'
        sliderRight.style.display= 'block'
    } else {
        sliderLeftArrow.style.display = 'block'
        sliderRightArrow.style.display = 'block'
        sliderLeft.style.display= 'none'
        sliderRight.style.display= 'none'
    }
})

let sliderOffset = 0;
let maxOffset = (sliderLineItems.length - 2) * 370;

let i = 1;
sliderLineItems[i].classList.add('slider-line-item__active');
sliderItemTitle.forEach(el => {
    el.classList.remove('slider-item-title__active')
})

sliderItemTitle[i].classList.add('slider-item-title__active')

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