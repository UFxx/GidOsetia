const headerMenu = document.querySelector('.header-menu');
const headerMenuItems = document.querySelectorAll('.header-menu ul li')
const headerMenuItemsFirst = document.querySelector('.header-menu ul li:first-child');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
        headerMenu.classList.add('header__fixed');

        headerMenuItems.forEach(el => {
            el.style.borderRadius = '0 0 25px 25px';
            el.style.backgroundColor = '#213E39';
        });
        headerMenuItemsFirst.style.borderRadius = '0 0 25px 0'
    } else {
        headerMenu.classList.remove('header__fixed');
        
        headerMenuItems.forEach(el => {
            el.style.borderRadius = '25px 25px 0 0';
            el.style.backgroundColor = '#7B7B7B';
        })
        headerMenuItemsFirst.style.borderRadius = '0 25px 0 0'
    }
})