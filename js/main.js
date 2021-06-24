(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
})(jQuery);




/* Animación Misión y Visión */
const vision = document.querySelector("#visionBtn");
const mision = document.querySelector("#misionBtn");
const conMiVi = document.querySelector(".conteMiVi");

mision.addEventListener("click", () => {
  conMiVi.classList.add("mision-mode");
});

vision.addEventListener("click", () => {
  conMiVi.classList.remove("mision-mode");
});