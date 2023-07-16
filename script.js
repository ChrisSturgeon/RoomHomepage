console.log('Test');

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
  const navMenu = document.querySelector('#nav-wrapper');
  navMenu.classList.toggle('hidden');
});
