"use strict";
// each of the still images were screenshots at 150x150 on Macbook

let calculate = document.querySelector("#calculate");
calculate.addEventListener("click", triangleArea);
// #1
function triangleArea() {
  const tribase = document.querySelector("#triangle-base").value;
  let trianswer = document.querySelector("#answer1").innerHTML;

  const triheight = document.querySelector("#triangle-height").value;

  trianswer = (tribase * triheight) / 2;
  document.querySelector("#answer1").innerHTML = `Area = ${trianswer}`;

  console.log(`Area = ${trianswer}`);
  return;
}

calculate.addEventListener("click", squareArea);

// #2
function squareArea() {
  const side = document.querySelector("#side").value;
  const answer2 = document.querySelector("#answer2").innerHTML;

  const perimeter = side * 4;
  const area = Math.pow(side, 2);

  document.querySelector("#answer2").innerHTML = `Area = ${area}`;
  answer2 = `Perimeter = ${perimeter}`;

  console.log(`Area = ${answer2}`);
}

// #3
function rectangleAreaPerimeter() {
  const length = document.querySelector("#length").value;
  const width = document.querySelector("#width").value;
  const area = length * width;
  const perimeter = 2(length) * 2(width);
  document.querySelector("#answer3").innerHTML = `Area = ${area}`;
}

// #4
function circleCircumferenceArea() {
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * Math.pow(Radius, 2);
}

// #5
function parallelogramArea() {
  const area = base * height;
}

// #6
function trapezoidArea() {
  const area = ((base1 + base2) * height) / 2;
}
// #7
function rectangularPrismVolumeSurfaceArea() {
  const volume = length * width * height;
  2(length * width) + 2(length * height) + 2(width * height);
}
// #8
function triangularPrismVolumeLateralAreaSurfaceArea() {
  const volume = basearea * height;
  const lateralarea = h * p;
  const surfacearea = h * p + 2(basearea);
}

// #9
function triangularPyramid() {
  const volume = basearea * height;
  const lateralarea = (slantheight * p) / 2;
  const surfacearea = (slantheight * p) / 2 + basearea;
}
// #10
function cylinderVolumeLateralSurfaceArea() {
  const volume = Math.PI * Math.pow(radius, 2) * height;
  const lateralarea = 2 * Math.PI * radius * height;
  const surfacearea = slantheight * p + basearea;
}
// #11
function coneVolumeLateralSurfaceArea() {
  const volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  const lateralarea = Math.PI * radius * slantheight;
  const surfacearea =
    Math.PI * Math.pow(radius, 2) + Math.PI * radius * slantheight;
}
// #12
function rightTrianglePythagorean() {
  const circumferencesquared = Math.pow(sideA, 2) + Math.pow(sideB, 2);
  const circumference = circumferencesquared.sqrt;
}
// #13
function sphereVolumeSurfaceArea() {
  const volume = Math.PI * Math.pow(radius, 3) * (4 / 3);
  const surfacearea = Math.PI * Math.pow(radius, 2) * 4;
}

// #14
function hemisphereVolumeSurfaceArea() {
  const volume = Math.PI * Math.pow(radius, 3) * (2 / 3);
  const surfacearea = Math.PI * Math.pow(radius, 2) * 3;
}
// #15
function circleSegmentAreaArcLength() {
  const area = Degrees * ((Math.PI * Math.pow(radius, 2)) / 360);
}
