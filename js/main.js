'use strick';

// MOUSE EVENT
let mousePointer;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.12;

window.onload = function() {
  mousePointer = document.querySelector('.mouse_pointer');

  window.addEventListener('mousemove', mouseFunc, false);
  
  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
  }

  loop();
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  mousePointer.style.transform = `translate(${mx}px, ${my}px)`;
  window.requestAnimationFrame(loop);
}




// SLIDE SHOW
const sections = document.querySelectorAll('.main_section');
let mainIndex = 0;

function goToMain(idx) {
  mainIndex += idx;

  if (mainIndex > sections.length - 1) {
    mainIndex = 0;
  } else if (mainIndex < 0) {
    mainIndex = sections.length - 1;
  }

  for (let i=0; i<sections.length; i++) {
    sections[i].style.transform = "translate(0px, -100%)";
  }
  sections[mainIndex].style.transform = `translate(0px, 0px)`;
  console.log(mainIndex);
}
goToMain(mainIndex);


const upBtn = document.querySelector('.up_btn');
const downBtn = document.querySelector('.down_btn');

upBtn.addEventListener('click', () => goToMain(-1));
downBtn.addEventListener('click', () => goToMain(1));



// 2초마다 휠값을 판별
let goToMainNextLoop = setInterval(onWheelEvent, 2000);

// 휠 작동시 이동은 한번만 작동
function onWheelEvent() {
  document.addEventListener('wheel', e => {
    // console.log(e);
    if (e.deltaY > 0) {
      console.log("down");
      goToMain(1);
    } else if (e.deltaY < 0) {
      goToMain(-1)
      console.log("up");
    }
  }, {once: true});
}













// MORE BTN MOUSEOVER COLOR CHANGE 
const moreBtn = document.querySelectorAll('.more_btn');
const main_bg = document.querySelectorAll('.main_bg');

moreBtn.forEach((e, idx) => e.addEventListener('mouseover', () => {
  main_bg[idx].classList.add('color');
}));
moreBtn.forEach((e) => e.addEventListener('mouseout', () => {
  main_bg.forEach(e => e.classList.remove('color'));
}));




// MENU SIDE NAV
const menuBar = document.querySelector('.menu_bar');
const closeBar = document.querySelector('.close_bar');

menuBar.addEventListener('click', function() {
  const sideNav = document.querySelector('.sidenav');
  sideNav.style.width = "100vw";
  sideNav.style.right = "0";
  closeBar.style.opacity = "1";
  closeBar.style.display = "block";
});
closeBar.addEventListener('click', function() {
  const sideNav = document.querySelector('.sidenav');
  sideNav.style.width = "0%";
  sideNav.style.right = "-50%";
  closeBar.style.opacity = "0";
  closeBar.style.display = "none";
});