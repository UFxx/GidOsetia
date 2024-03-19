const mainImg = document.querySelector('.main-img');
const attractionItems = document.querySelectorAll(`.main-content-attraction-item`);

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        mainImg.style.transform = 'translateY(0)';
        mainImg.style.opacity = 100;
        attractionItems.forEach(el => {
            el.style.transform = 'translateY(0)';
            el.style.opacity = 100;
        })
        attractionItems[0].style.transition = '.6s ease opacity, .6s ease transform'
        attractionItems[1].style.transition = '.9s ease opacity, .9s ease transform'
        attractionItems[2].style.transition = '1.2s ease opacity, 1.2s ease transform'
    }
})