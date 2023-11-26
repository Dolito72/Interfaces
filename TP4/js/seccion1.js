"use strict"
const logo = document.querySelector(".logo");
const header = document.getElementById("header");
const spiderBlanco = document.querySelector(".spiderBlanco");
const spiderRojo = document.querySelector(".spiderRojo");
const spiderNegro = document.querySelector(".spiderNegro");
const edificiosIzquierda = document.querySelector(".edificiosIzquierda");
const edificiosDerecha = document.querySelector(".edificiosDerecha");
const edificiosCentro = document.querySelector(".edificiosCentro");
const cielo = document.querySelector(".cielo");
const imagesSection1 = [spiderBlanco, spiderRojo, spiderNegro, edificiosIzquierda, edificiosDerecha, edificiosCentro, logo];

const cargarElem = () => {
  imagesSection1.forEach((c) => {
    c.classList.remove("invisible");
  });
};


setTimeout(cargarElem, 500);


window.addEventListener("scroll", () =>{
  

  let scroll = window.scrollY;
  //el logo se achica cuando se scrollea
  if(scroll > 20){
    logo.style.transform = `translateY(-25%)  translateX(-5%) scale(0.25) `;
    logo.style.position = `fixed`;
    headerSticky();// se hace sticky el header 
  }
   else {
    header.style.height = "227px";
    document.body.classList.remove("sticky-header");
    logo.style.transform = `scale(1) `;
    logo.style.position = `absolute`;
    logo.style.top = "-30px";
    header.style.zIndex = `1`;
  }

 //spiders
  spiderBlanco.style.transform = `translateY(${-scroll*0.35}px) translateX(${-scroll*0.35}px) `;
  spiderNegro.style.transform = `translateY(${-scroll*0.25}px) translateX(${scroll*0.25}px)`;
  spiderRojo.style.transform = ` translateY(${-scroll*0.25}px) translateX(${scroll*-0.25}px)`;

  //cielo
  cielo.style.transform = `translateY(${scroll*0.4}px)`

  //edificios
  edificiosCentro.style.transform = `scale(${1+scroll*0.0005}) translateX(${scroll*0.050}px)`;
  edificiosIzquierda.style.transform = `translateY(${scroll*0.10}px) translateX(${-scroll*0.10}px) `;
  edificiosDerecha.style.transform = `translateY(${scroll*0.10}px)translateX(${scroll*0.10}px)  `;

})


const headerSticky = ()=> {
   header.style.height = "80px";
   header.style.zIndex = `10001`;
   document.body.classList.add("sticky-header");
   header.style.position = "sticky";
}

