const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', () => {
  document.querySelector('.burger-menu-none').classList.toggle('burger-menu-active');
  console.log(1);
});
