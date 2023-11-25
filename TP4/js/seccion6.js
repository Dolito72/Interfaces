"use strict"
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".seccion6-columnaImagenes img");
  let currentIndex = 0;

  /*Esta función toma un índice como parámetro y ajusta las propiedades zIndex 
  y opacity de cada imagen en la lista. La imagen con el índice proporcionado 
  se coloca en la parte superior (zIndex = 1) y se muestra con opacidad completa (opacity = 1), 
  mientras que las demás imágenes se colocan detrás (zIndex = 0) y se ocultan (opacity = 0).*/

  function showImage(index) {
      images.forEach((img, i) => {
          img.style.zIndex = i === index ? 1 : 0; // Ajusta la superposición de las imágenes
          img.style.opacity = i === index ? 1 : 0;
      });
  }
  /*Esta función incrementa el índice actual (currentIndex)
   para pasar a la siguiente imagen en la lista. 
   Si currentIndex llega al final, se reinicia al comienzo. Luego, 
  llama a la función showImage para actualizar la visualización de las imágenes.*/

function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  // Cambia imagen cada 3 segundos 
  setInterval(nextImage, 3000);

  // Muestra la primera imagen al cargar la página
  showImage(currentIndex);
});