window.addEventListener('scroll', function() {

    if ( window.scrollY > 100) {
        // console.log("bajando");
    
        document.getElementsByClassName("navbar")[0].classList.add("color-change");

    } else {
        // console.log("llego arriba");
        document.getElementsByClassName("navbar")[0].classList.remove("color-change");
    
    }
  });