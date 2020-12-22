// BOX ITEM
window.addEventListener('load', boxPositioning);
window.addEventListener('resize', boxPositioning);

function boxPositioning() {

  const largeBox = document.querySelectorAll('.large');
  const largeBoxSize = document.querySelector('.large').getBoundingClientRect();
  
  const mediumColummBox = document.querySelectorAll('.medium_columm');
  const mediumColummBoxSize = document.querySelector('.medium_columm').getBoundingClientRect();
  
  const mediumRowBox = document.querySelectorAll('.medium_row');
  const mediumRowBoxSize = document.querySelector('.medium_row').getBoundingClientRect();
  
  // console.log(mediumRowBox[0].offsetTop);
  // console.log(mediumRowBoxSize.height);

  largeBox[1].style.left = largeBoxSize.width + "px";
  largeBox[2].style.top = largeBoxSize.height + "px";
  largeBox[2].style.left = (largeBoxSize.width / 2) + "px";

  mediumColummBox[0].style.top = mediumColummBoxSize.height + "px";
  mediumColummBox[1].style.top = mediumColummBoxSize.height + "px";
  mediumColummBox[1].style.left = (mediumColummBoxSize.width * 3) + "px";

  mediumRowBox[0].style.top = (mediumRowBoxSize.height * 4) + "px";
  mediumRowBox[1].style.top = (mediumRowBoxSize.height * 5) + "px";  

  let viewWidthSize = window.innerWidth;
  console.log(viewWidthSize);

  if (viewWidthSize < 560) {
    largeBox[1].style.left = "0px";
    largeBox[1].style.top = largeBoxSize.height + "px";
    largeBox[2].style.left = "0px";
    largeBox[2].style.top = largeBoxSize.height * 3 + "px";

    mediumColummBox[0].style.top = mediumColummBoxSize.height * 2 + "px";
    mediumColummBox[0].style.left = "0px";
    mediumColummBox[1].style.top = mediumColummBoxSize.height * 2 + "px";
    mediumColummBox[1].style.left = mediumColummBoxSize.width + "px";

    mediumRowBox[0].style.top = (mediumRowBoxSize.height * 8) + "px";
    mediumRowBox[1].style.top = (mediumRowBoxSize.height * 9) + "px";
  } else {largeBox[1].style.top = "0px";}
}
