const menuBars = document.querySelector('.menu_bars');
const closeBtn = document.querySelector('.close_btn');
const sideNav = document.querySelector('.sidenav');

menuBars.addEventListener('click', () => {
  sideNav.style.transform = 'translateX(0px)';
});
closeBtn.addEventListener('click', function() {
  sideNav.style.transform = 'translateX(100%)';
});