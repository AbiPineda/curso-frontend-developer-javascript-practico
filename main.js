/* Menu Email */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click',aparecerMenu);

function aparecerMenu(){
    desktopMenu.classList.toggle('inactive');
}

/* Menu hamburguesa (movil) */
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
burgerMenu.addEventListener('click',aparecerMenuHamburguesa);

function aparecerMenuHamburguesa(){
    mobileMenu.classList.toggle('inactive');
}