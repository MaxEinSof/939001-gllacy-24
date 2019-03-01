var buttonGreen = document.querySelector(".button-green");
var buttonViolet = document.querySelector(".button-violet");
var buttonRed = document.querySelector(".button-red");

var slideGreen = document.querySelector(".slide-green");
var slideViolet = document.querySelector(".slide-violet");
var slideRed = document.querySelector(".slide-red");

var imageGreen = document.querySelector(".promo-image-green");
var imageViolet = document.querySelector(".promo-image-violet");
var imageRed = document.querySelector(".promo-image-red");

var bodyColor = document.querySelector("body");

buttonGreen.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideGreen.classList.add("slide-show");
  bodyColor.classList.add("background-green");
  buttonGreen.classList.add("switch-button-current");
  imageGreen.classList.add("icecream-show");

  if (slideViolet.classList.contains("slide-show")) {
    slideViolet.classList.remove("slide-show");
    bodyColor.classList.remove("background-violet");
    buttonViolet.classList.remove("switch-button-current");
    imageViolet.classList.remove("icecream-show");
  }
  if (slideRed.classList.contains("slide-show")) {
    slideRed.classList.remove("slide-show");
    bodyColor.classList.remove("background-red");
    buttonRed.classList.remove("switch-button-current");
    imageRed.classList.remove("icecream-show");
  }
});

buttonViolet.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideViolet.classList.add("slide-show");
  bodyColor.classList.add("background-violet");
  buttonViolet.classList.add("switch-button-current");
  imageViolet.classList.add("icecream-show");

  if (slideGreen.classList.contains("slide-show")) {
    slideGreen.classList.remove("slide-show");
    bodyColor.classList.remove("background-green");
    buttonGreen.classList.remove("switch-button-current");
    imageGreen.classList.remove("icecream-show");
  }
  if (slideRed.classList.contains("slide-show")) {
    slideRed.classList.remove("slide-show");
    bodyColor.classList.remove("background-red");
    buttonRed.classList.remove("switch-button-current");
    imageRed.classList.remove("icecream-show");
  }
});

buttonRed.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideRed.classList.add("slide-show");
  bodyColor.classList.add("background-red");
  buttonRed.classList.add("switch-button-current");
  imageRed.classList.add("icecream-show");
  
  if (slideGreen.classList.contains("slide-show")) {
    slideGreen.classList.remove("slide-show");
    bodyColor.classList.remove("background-green");
    buttonGreen.classList.remove("switch-button-current");
    imageGreen.classList.remove("icecream-show");
  }
  if (slideViolet.classList.contains("slide-show")) {
    slideViolet.classList.remove("slide-show");
    bodyColor.classList.remove("background-violet");
    buttonViolet.classList.remove("switch-button-current");
    imageViolet.classList.remove("icecream-show");
  }
});