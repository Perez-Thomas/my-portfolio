"use strict";
var i = 0;
var images = [];
var time = 1000;

images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";

function changeImg() {
  document.hasChildNodes.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;

// onclick take to top of page

// const submitButton = document.querySelector("#submit-form");
// submitButton.addEventListener("click", topOfPage);

// function topOfPage() {
//   document.querySelector("html").style.backgroundColor = "lightblue";
// }
