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




// MAIN SECTION SLIDE
const sections = document.querySelectorAll('.main_section');
let mainIndex = -1;

const scrollToMoveAni = document.querySelector('.scroll_to_move');

function changeMainIdx(idx) {
  mainIndex += idx;

  if (mainIndex > sections.length - 1) {
    mainIndex = 0;
  } else if (mainIndex < 0) {
    mainIndex = sections.length - 1;
  }

  pagination(mainIndex);
}

nextMain(); //첫화면 호출

function nextMain() {
  changeMainIdx(1);

  for (let i=0; i<sections.length; i++) {
    sections[i].style.transform = "translate(0px, 100%)";
    sections[i].style.zIndex = `1`;
  }

  if (mainIndex === sections.length - 1) { //마지막 페이지 예외처리
    for (let i=0; i<sections.length; i++) {
      sections[i].style.transform = "translate(0px, -100%)";
      sections[i].style.zIndex = `1`;
    }
    sections[0].style.transform = "translate(0px, 100%)";
    sections[0].style.zIndex = `2`;
  } else if (mainIndex === 0) { //마지막 페이지 예외처리
    sections[sections.length - 1].style.transform = `translate(0px, -100%)`;
    sections[sections.length - 1].style.zIndex = `2`;
  } else { //중간 페이지 적용
    sections[mainIndex - 1].style.transform = "translate(0px, -100%)";
    sections[mainIndex - 1].style.zIndex = `2`;
  } 

  sections[mainIndex].style.transform = `translate(0px, 0px)`;
  sections[mainIndex].style.zIndex = `5`;

}


function prevMain() {
  changeMainIdx(-1);

  if (mainIndex === 0) {
    for (let i=0; i<sections.length; i++) {
      sections[i].style.transform = "translate(0px, 100%)";
      sections[i].style.zIndex = `2`;
    }
    sections[sections.length - 1].style.transform = `translate(0px, -100%)`;
    sections[sections.length - 1].style.zIndex = `1`;
  } else if (mainIndex === sections.length - 1) {
    for (let i=0; i<sections.length; i++) {
      sections[i].style.transform = "translate(0px, -100%)";
      sections[i].style.zIndex = `1`;
    }
    sections[0].style.transform = "translate(0px, 100%)";
    sections[0].style.zIndex = `2`;
  } else {
    for (let i=0; i<sections.length; i++) {
      sections[i].style.transform = "translate(0px, 100%)";
      sections[i].style.zIndex = `1`;
    }
    sections[mainIndex - 1].style.transform = "translate(0px, -100%)";
    // sections[mainIndex - 1].style.zIndex = `2`;
  } 

  sections[mainIndex].style.transform = `translate(0px, 0px)`;
  sections[mainIndex].style.zIndex = `5`;
}



// scroll to move 휠 이동 변화하면 사라지기
function hiddenScrollToMove() {
  scrollToMoveAni.classList.add('hidden');
}


function pagination(idx) {
  const paginationDiv = document.querySelector('.pagination');
  paginationDiv.innerHTML = `4 | <span>${idx + 1}</span>`;
}



// ASIDE BTN 
const upBtn = document.querySelector('.up_btn');
const downBtn = document.querySelector('.down_btn');

upBtn.addEventListener('click', prevMain);
downBtn.addEventListener('click', nextMain);



// n초마다 휠값을 판별
let goToMainNextLoop = setInterval(onWheelEvent, 1700);

// 휠 작동시 이동은 한번만 작동
function onWheelEvent() {
  document.addEventListener('wheel', e => {
    // console.log(e);
    if (e.deltaY > 0) {
      nextMain();
      console.log("down");
    } else if (e.deltaY < 0) {
      prevMain()
      console.log("up");
    }
    hiddenScrollToMove();
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