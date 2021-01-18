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
let mainSlideIndex = 1;
mainSlideShow(mainSlideIndex);




function mainSlideShow(n) {

  if (n > sections.length) {
    mainSlideIndex = 1;
  } else if (n < 1) {
    mainSlideIndex = sections.length;
  }

  for (let section of sections) {
    section.style.display = "none";  
  }
  sections[mainSlideIndex-1].style.display = "block";  
}

// Slide Btn Click
function plusSlides(n) {
  mainSlideShow(mainSlideIndex += n);
}


// BTN CLICK -> SLIDE CHANGE
const upBtn = document.querySelector('.up_btn');
const downBtn = document.querySelector('.down_btn');

upBtn.addEventListener('click', () => mainSlideShow(mainSlideIndex += -1));
downBtn.addEventListener('click', () => mainSlideShow(mainSlideIndex += 1));





// Wheel Event
// document.addEventListener("wheel", mainWheel);
/*
function mainWheel(event) {
  let y = event.deltaY;
  // let wheelSlide; 
  console.log(y);
  
  // scroll up
  if (y < -120) {
    plusSlides(-1);
    // wheelSlide = window.setInterval(plusSlides, 3000, -1);
    // setTimeout(plusSlides, 5000, -1);
    console.log(y + "up");
    // return;
  }
  // clearInterval(wheelSlide, 3000);
  
  // scroll down
  else if (y > 120) {
    plusSlides(1);
    // wheelSlide = window.setInterval(plusSlides, 5000, 1);
    // setTimeout(plusSlides, 5000, 1);
    console.log( y + "down");
    // return;
  }
  // clearInterval(wheelSlide, 3000);

}
*/







// 768PX 이하에서 슬라이드, 휠이벤트 초기화
// let viewWidthSize = document.documentElement.clientWidth;
window.addEventListener('resize', function() {
  let viewWidthSize = window.innerWidth;
  console.log(viewWidthSize);

    if (viewWidthSize < 768) {
      console.log("in");
      document.removeEventListener("wheel", mainWheel);
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";  
      }
    } else {
      console.log("out");
      document.addEventListener("wheel", mainWheel);
      mainSlideShow(1);
    }
});












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