// onwheel="mainWheel(event)"


const section = document.querySelectorAll('.main_section');
// const upBtn = document.querySelector('.up_btn');
// const downBtn = document.querySelector('.down_btn');
let mainSlideIndex = 1;
mainSlideShow(mainSlideIndex);

// upBtn.addEventListener('click', mainSlideUp);
// downBtn.addEventListener('click', mainSlideDown);


// Slide Show
function mainSlideShow(n) {
  if (n > section.length) {mainSlideIndex = 1}    
  if (n < 1) {mainSlideIndex = section.length}
  for (i = 0; i < section.length; i++) {
      section[i].style.display = "none";  
      // section[i].style.opacity = "0";  
  } 
  section[mainSlideIndex-1].style.display = "block";  
  // section[mainSlideIndex-1].style.opacity = "1";  
}

// Slide Btn Click
function plusSlides(n) {
  mainSlideShow(mainSlideIndex += n);
}






// Wheel Event
document.addEventListener("wheel", mainWheel);

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







// 768PX 이하에서 슬라이드, 휠이벤트 초기화
// let viewWidthSize = document.documentElement.clientWidth;
window.addEventListener('resize', function() {
  let viewWidthSize = window.innerWidth;
  console.log(viewWidthSize);

    if (viewWidthSize < 768) {
      console.log("in");
      document.removeEventListener("wheel", mainWheel);
      for (let i = 0; i < section.length; i++) {
        section[i].style.display = "block";  
      }
    } else {
      console.log("out");
      document.addEventListener("wheel", mainWheel);
      mainSlideShow(1);
    }
});












// MORE BTN
const moreBtn = document.querySelectorAll('.more_btn');
const main_bg = document.querySelectorAll('.main_bg');
for (let i=0; i<moreBtn.length; i++) {
  moreBtn[i].addEventListener('mouseover', function() {
    for (let i=0; i<main_bg.length; i++) {
      main_bg[i].classList.add('color');
    }
  });
  moreBtn[i].addEventListener('mouseout', function() {
    for (let i=0; i<main_bg.length; i++) {
      main_bg[i].classList.remove('color');
    }
  });
}


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