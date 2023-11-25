"use strict"
let card13D = document.querySelector("#seccion4-card1");
let card23D = document.querySelector("#seccion4-card2");
let card33D = document.querySelector("#seccion4-card3");
let seccion4 = document.querySelector("#seccion4");

window.addEventListener('scroll', function(e){
    let rect = seccion4.getBoundingClientRect();

    if (rect.top + 100 <= window.innerHeight && rect.bottom - 400 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scrollTop = window.scrollY;
        let scrollTop2 = scrollTop / 12;
        


        card13D.style.transform = 'translate(0, ' + scrollTop2 + 'px)';
        card23D.style.transform = 'translate(0, ' + scrollTop2 + 'px)';
        card33D.style.transform = 'translate(0, ' + scrollTop2 + 'px)';
    }
});

