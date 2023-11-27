"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const btnHambur = document.getElementById("btn-hambur");

    btnHambur.addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
});