window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.getElementsByClassName("navbar")[0].classList.add("color-change");
  } else {
    document
      .getElementsByClassName("navbar")[0]
      .classList.remove("color-change");
  }
});

// Responsive Navbar
document.querySelector("#close").onclick = function () {
  document
    .querySelector("body > nav > div.navbar-desplegado")
    .classList.add("oculto");
  console.log("Click Close");
};

// Responsive Navbar
document.querySelector("#menu").onclick = function () {
  document
    .querySelector("body > nav > div.navbar-desplegado")
    .classList.remove("oculto");
  console.log("Click abrir");
};
