'use strict';

// MOUSE EVENT
let mousePointer;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const SPEED = 0.12;

function loop() {
  mx += (x - mx) * SPEED;
  my += (y - my) * SPEED;
  mousePointer.style.transform = `translate(${mx}px, ${my}px)`;
  window.requestAnimationFrame(loop);
}

window.onload = function() {
  mousePointer = document.querySelector('.mouse_pointer');

  function mouseFunc(e) {
    x = e.clientX;
    y = e.clientY;
  }

  window.addEventListener('mousemove', mouseFunc, false);

  loop();
}

const stopMoveMousePointer = () => {
  mousePointer.style.display = 'none';
};
const moveMousePointer = () => {
  mousePointer.style.display = 'block';
};



// MAIN SECTION SLIDE
// Variable Declare
const sections = document.querySelectorAll('.main_section');
const divBlack = document.querySelector('.div_black');
const upBtn = document.querySelector('.up_btn');
const downBtn = document.querySelector('.down_btn');

let mainIndex = 0;
let checkWheelEvent;


// Black Div  - Animation
const stopAnimationBlackDiv = () => {
  divBlack.style.animation = '';
}
const animationBlackDiv = function() {
  divBlack.style.animation = 'showBlackDiv 1.3s ease-in';
  setTimeout(stopAnimationBlackDiv, 1500);
}


// Pagination
const pagination = (idx) => {
  const paginationSpan = document.querySelector('.pagination span');
  paginationSpan.innerText = idx + 1;
}


// Change Index
const changeMainIdx = (idx) => {
  mainIndex += idx;

  if (mainIndex > sections.length - 1) {
    mainIndex = 0;
  } else if (mainIndex < 0) {
    mainIndex = sections.length - 1;
  }

  pagination(mainIndex);
}

const animationSection = () => {
  setTimeout(() => {
    sections.forEach(e => e.style.transform = 'translateX(100%)');
    sections[mainIndex].style.transform = 'translateX(0px)';
  }, 700)
}

// Next Slide
const nextSlide = () => {
  changeMainIdx(1);
  animationBlackDiv();
  animationSection();
}

// Prev Slide
const prevSlide = () => {
  changeMainIdx(-1);
  animationBlackDiv();
  animationSection();
}

// Initialize translateX
const initMainSectionsTranslateX = () => {
  sections.forEach(e => e.style.transform = 'translateX(0px)');
  console.log("제자리");
};



// scroll to move 휠 이동 감지하면 사라지기
const hiddenScrollToMove = () => {
  const scrollToMoveAni = document.querySelector('.scroll_to_move');
  scrollToMoveAni.classList.add('hidden');
}

// 휠 작동시 이동은 한번만 작동
const onWheelEvent = () => {
  document.addEventListener('wheel', e => {
    if (e.deltaY > 0) {
      nextSlide();
      console.log('down');
    } else if (e.deltaY < 0) {
      prevSlide()
      console.log('up');
    }
    hiddenScrollToMove();

    console.log("판별중");
  }, {once: true});
}





// CLICK ASIDE BTN 
upBtn.addEventListener('click', prevSlide);
downBtn.addEventListener('click', nextSlide);





// MORE BTN MOUSEOVER COLOR CHANGE 
const moreBtn = document.querySelectorAll('.more_btn');
const main_bg = document.querySelectorAll('.main_bg');

moreBtn.forEach((e, idx) => e.addEventListener('mouseover', () => {
  main_bg[idx].classList.add('color');
}));
moreBtn.forEach((e) => e.addEventListener('mouseout', () => {
  main_bg.forEach(e => e.classList.remove('color'));
}));



// viewport 768px 이하
const mediaQuery = window.matchMedia('(max-width: 768px)');

function checkTabletSize(e) {
  if(e.matches) {
    console.log('768이하')
    // stopMoveMousePointer();
    stopAnimationBlackDiv();
    clearInterval(checkWheelEvent);
  } else {
    console.log('769이상');
  }
}

// Initial check
checkWheelEvent = setInterval(onWheelEvent, 2000);
checkTabletSize(mediaQuery);

// Register event listener
mediaQuery.addListener(checkTabletSize);
// window.addEventListener('resize', checkTabletSize);

// Resize
// window.addEventListener('resize', e => {
//   let width = e.target.innerWidth;

//   if (width < 768) {
//     initMainSectionsTranslateX();
//     stopAnimationBlackDiv();
//     clearInterval(checkWheelEvent);
//   } 
//   console.log(width);
// });

