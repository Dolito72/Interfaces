const btnLoguin = document.getElementById("btn-loguin");

//let botonMostrarOcultar = document.getElementById("btn-jugar");
//let divOculto = document.getElementById("div-instrucciones-oculto");

btnLoguin.addEventListener("click", function() {
  // Aplicar la animación al botón
  this.style.animation = "animacionBoton 2s";
 // Cambiar el texto del botón
 btnLoguin.textContent = "Redirigiendo...";
 console.log(this.click.target.value);



  // Después de que termine la animación, redirigir al enlace
  setTimeout(() => {
      window.location.href = document.getElementById("loading").href;
  }, 2000); // Cambia el valor a la duración de tu animación en milisegundos
});
