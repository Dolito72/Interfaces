"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const contenedorParallax = document.querySelector("#contenedor-parallax");
  
    contenedorParallax.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = contenedorParallax;
  

    //  Calcula el centro del contenedor parallax en términos de coordenadas X e Y.
      const centerX = offsetWidth / 2; 
      const centerY = offsetHeight / 2; 
  
     // Calcula el desplazamiento del mouse en términos de X e Y,
     //  dividiendo la distancia entre la posición actual del mouse y el centro del contenedor por 20.

      const moveX = (clientX - centerX) / 20;
      const moveY = (clientY - centerY) / 20;
  
 
      const heroina = document.querySelector(".heroina");
      const negro = document.querySelector(".negro");
      const hulk = document.querySelector(".hulk");
      // transformaciones de translate para los 3
   
      negro.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.7}px) rotate(4deg)`;


      //movimiento de la heroina
      heroina.style.transform = `translateX(${moveX * -1}px) translateY(${moveY * -2.2}px) rotate(${moveY / 5}deg)`;

    
      // Movimiento del "hulk" con escala
      hulk.style.transform = `translateX(${moveX * -1.4}px) translateY(${moveY * -1.7}px) scale(${1 - Math.abs(moveX / 100)})`;
    });
  });
  
  
  