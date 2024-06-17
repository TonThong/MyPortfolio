function SlideToRight() {
  let slidePage = document.querySelector(".page-slide-right");
  slidePage.style.zIndex = "10";
  slidePage.style.transition = "all 1.5s";
  slidePage.style.transform =
    "rotateX(15deg) translateY(calc(-70% - 10px)) translateX(-100%) rotateY(180deg)";
  setTimeout(() => {
    slidePage.style.zIndex = "1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform =
      "rotateX(15deg) translateY(calc(-70% - 10px)) translateX(-100%)";
  }, 1500);
}

function SlideToLeft() {
  let slidePage = document.querySelector(".page-slide-left");
  slidePage.style.transition = "all 1.5s";
  slidePage.style.zIndex = "10";
  slidePage.style.transform =
    "rotateX(15deg) translateY(calc(-70% - 10px)) rotateY(-180deg)";
  setTimeout(() => {
    slidePage.style.zIndex = "-1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform = "rotateX(15deg) translateY(calc(-70% - 10px))";
  }, 1500);
}

let myTimeOut;
function HandleOpen(checkbox) {
  let pageSlideRight = document.querySelector(".page-slide-right");
  let pageSlideLeft = document.querySelector(".page-slide-left");
  let pagePreview = document.querySelector(".page-preview");
  let preview = document.querySelector(".preview");
  if (checkbox.checked == true) {
    console.log(checkbox.checked);
    myTimeOut = setTimeout(() => {
      pageSlideRight.style.display = "block";
      pageSlideLeft.style.display = "block";
      pagePreview.style.display = "flex";
      preview.style.display = "block";
    }, 1500);
  } else {
    clearTimeout(myTimeOut);
    console.log(checkbox.checked);
    pagePreview.style.display = "none";
    pageSlideRight.style.display = "none";
    preview.style.display = "none";
    pageSlideLeft.style.display = "none";
  }
}
