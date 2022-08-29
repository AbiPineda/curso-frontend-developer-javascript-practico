/* Desktop */
const menuEmail = document.querySelector('.navbar-email');
/* Mobile */
const menuHamIcon = document.querySelector('.menu');
/* Carrito */
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

/* ------------------------------------------------------------------- */
/* Desktop */
const desktopMenu = document.querySelector('.desktop-menu');
/* Mobile */
const mobileMenu = document.querySelector('.mobile-menu');
/* Carrito */
const aside = document.querySelector('.product-detail');


/* ------------------------------------------------------------------- */
/* Desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
/* Mobile */
menuHamIcon.addEventListener('click', toggleMobileMenu);
/* Carrito */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');
}