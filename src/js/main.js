document.addEventListener("DOMContentLoaded", (event) => {
  const hamburger = document.querySelector('#hamburger');
  const navItems = document.querySelector('.nav-wrapper');

  hamburger.addEventListener('click', e => navItems.classList.toggle('show'));
});
