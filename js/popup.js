var button = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var nameField = popup.querySelector("#modal-name-field");
var email = popup.querySelector("#modal-email-field");
var message = popup.querySelector("#modal-message-field");

var storageSupport = true;
var storageName = null;
var storageEmail = null;

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

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  storageSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  storageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.add("modal-animate");
  overlay.classList.add("modal-show");
  if (storageName) {
    nameField.value = storageName;
    email.focus();
  } else {
    nameField.focus();
  }
  if (storageName && storageEmail) {
    nameField.value = storageName;
    email.value = storageEmail;
    message.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-animate");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-animate");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!nameField.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (storageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-animate");
      popup.classList.remove("modal-error");
    }
    if (overlay.classList.contains("modal-show")) {
      overlay.classList.remove("modal-show");
    }
  }
});

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