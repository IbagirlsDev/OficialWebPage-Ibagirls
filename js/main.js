(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
})(jQuery);

const redes = document.getElementById("redess")
const boton_lo = document.getElementById("foto_log")

boton_lo.addEventListener("click", (e)=>{
    e.preventDefault();
    redes.style.display="block"
})