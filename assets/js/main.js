// alert ("Hello World");


// window.onload = function () {
//   console.log("Window loaded");
  
//   var scrollView = document.getElementById("scrollView");
//   console.log("scrollView element:", scrollView);

//   scrollView.addEventListener("scroll", function () {
//     console.log("Scroll event detected");
//     console.log("Window scrollY:", window.scrollY);

//     if (window.scrollY > 45) {
//       console.log("Changing background color");
//       scrollView.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     } else {
//       console.log("Keeping background color white");
//       scrollView.style.backgroundColor = "white";
//     }
//   });
// };




function myFunction() {

  var scrollView = document.getElementById("scrollView");
  console.log("function working");
  if (window.scrollY < 45) {
    console.log("Changing background color");
    scrollView.style.backgroundColor = "#000";
  } else {
    console.log("Keeping background color white");
    scrollView.style.backgroundColor = "white";
  }
}



function openMenu() {
  var menuOverlay = document.getElementById("menuOverlay");
  var menu = document.querySelector(".menu");
  menuOverlay.style.display = "block";
  menu.style.left = "0";
}

function closeMenu() {
  var menuOverlay = document.getElementById("menuOverlay");
  var menu = document.querySelector(".menu");
  menuOverlay.style.display = "none";
  menu.style.left = "-300px";
}




//    Menu-scroll view

// window.onload = function () {
//   var scrollView = document.getElementById("scrollView");
//   scrollView.addEventListener("scroll", function () {
//     if (scrollView.scrollTop >= 45) {
//       scrollView.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     } else {
//       scrollView.style.backgroundColor = "white";
//     }
//   });
// };


