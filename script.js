const hamburgerOpenBtn = document.querySelector('#hamburger-btn-open');
const hamburgerCloseBtn = document.querySelector('#hamburger-btn-close');
const slideNav = document.querySelector('#slide-nav');

function openHamburgerMenu() {
  slideNav.classList.add('visible');
  slideNav.classList.add('active');
  setTimeout(() => {
    hamburgerCloseBtn.focus();
  }, 1);
}

function closeHamburgerMenu() {
  slideNav.classList.remove('active');
  setTimeout(() => {
    hamburgerOpenBtn.focus();
  }, 1);
  setTimeout(() => {
    slideNav.classList.remove('visible');
  }, 250);
}

// Event listeners
hamburgerOpenBtn.addEventListener('click', openHamburgerMenu);
hamburgerCloseBtn.addEventListener('click', closeHamburgerMenu);
