window.addEventListener('scroll', function() {
    if ( window.scrollY > 100) {
        document.getElementsByClassName("navbar")[0].classList.add("color-change");
    } else {
        document.getElementsByClassName("navbar")[0].classList.remove("color-change");
    }
  });

// Responsive Navbar
