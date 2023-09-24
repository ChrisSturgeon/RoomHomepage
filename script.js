const minimumDesktopPixelWidth = 1024;
const hamburgerOpenBtn = document.querySelector('#hamburger-btn-open');
const hamburgerCloseBtn = document.querySelector('#hamburger-btn-close');
const slideNav = document.querySelector('#slide-nav');
const contactLink = document.querySelector('#contact-nav-link');
const navBackground = document.querySelector('#nav-background');

// Prevents focus from jumping out of
// hamburger menu when tabbing backwards
function trapFocusPreviousDirection(event) {
  if (event.key === 'Tab' && event.shiftKey) {
    event.preventDefault();
    contactLink.focus();
  }
}

// Prevents focus from jumping out of
// hamburger menu when tabbing forwards
function trapFocusNextDirection(event) {
  if (event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    hamburgerCloseBtn.focus();
  }
}

function openHamburgerMenu() {
  // navBackground.classList.add('active');
  slideNav.classList.add('visible');
  slideNav.classList.add('active');

  setTimeout(() => {
    hamburgerCloseBtn.focus();
  }, 1);

  hamburgerCloseBtn.addEventListener('keydown', trapFocusPreviousDirection);
  contactLink.addEventListener('keydown', trapFocusNextDirection);
}

function closeHamburgerMenu() {
  // navBackground.classList.remove('active');
  slideNav.classList.remove('active');

  setTimeout(() => {
    hamburgerOpenBtn.focus();
  }, 1);

  setTimeout(() => {
    slideNav.classList.remove('visible');
  }, 150);

  hamburgerCloseBtn.removeEventListener('keydown', trapFocusPreviousDirection);
  contactLink.removeEventListener('keydown', trapFocusNextDirection);
}

// Attach Global Event listeners
hamburgerOpenBtn.addEventListener('click', openHamburgerMenu);
hamburgerCloseBtn.addEventListener('click', closeHamburgerMenu);
