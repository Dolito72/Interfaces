"use strict"
let elf = document.querySelector("#elf");
let seccion2 = document.querySelector("#seccion2");


window.addEventListener('scroll', function(e){
  // El método getBoundingClientRect() devuelve un objeto 
  //con propiedades como top, right, bottom, y left.
    let rect = seccion2.getBoundingClientRect();

    if (rect.top + 400 <= window.innerHeight && rect.bottom - 550 >= 0) {
        let scrollTop = window.scrollY;
        //disminuye la velocidad del desplazamiento
        let scrollTop2 = scrollTop/10
   
          // Movimiento vertical y escala
        
        elf.style.transform = 'translate(0, ' + scrollTop2 + 'px) scale(0.9)';
    
         
    
    
    }
});


