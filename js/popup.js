var button = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var name = popup.querySelector("#modal-name-field");
var email = popup.querySelector("#modal-email-field");
var message = popup.querySelector("#modal-message-field");

var storageSupport = true;
var storageName = null;
var storageEmail = null;

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
    name.value = storageName;
    email.focus();
  } else {
    name.focus();
  }
  if (storageEmail) {
    email.value = storageEmail;
    if (storageName) {
      message.focus();
    } else {
      name.focus();
    }
  } else {
    if (storageName) {
      email.focus();
    } else {
      name.focus();
    }
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
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (storageSupport) {
      localStorage.setItem("name", name.value);
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