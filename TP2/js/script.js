

let btnRegistrar = document.getElementById("btn-reg");

let botonMostrarOcultar = document.getElementById("btn-jugar");
let divOculto = document.getElementById("div-instrucciones-oculto");

btnRegistrar.addEventListener("click", function() {
  // Aplicar la animación al botón
  this.style.animation = "animacionBoton 1s";

  // Después de que termine la animación, redirigir al enlace
  setTimeout(() => {
      window.location.href = document.getElementById("index").href;
  }, 1000); // Cambia el valor a la duración de tu animación en milisegundos
});


//desplegar instrucciones juego



// Agregar un manejador de eventos al hacer clic en la imagen
//botonMostrarOcultar.addEventListener("click", function() {
    // Toggle para mostrar u ocultar el div
   // if (divOculto.style.display === "none" || divOculto.style.display === "") {
//        divOculto.style.display = "block";
 //   } else {
 //       divOculto.style.display = "none";
//    }
 //   divOculto.classList.toggle('instruc-mostrar');
//});


botonMostrarOcultar.addEventListener("click", mostrarInstruc);
function mostrarInstruc() {
    divOculto.classList.toggle("instruc-mostrar");
}