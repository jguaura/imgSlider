let showcase = document.querySelector(".showcase");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

// Contador que usaremos para cambiar el nombre de la img actual.
let contador = 1;

btnNext.addEventListener("click", () => {
  showcase.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 650,
    fill: "forwards"
  });
  //Si el contador es 4 (ultima foto) cambiar la cuenta a -1 para al hacer click en next cambiar la cuenta a 0 y continuar mostrando las imagenes
  if (contador === 4) {
    contador = -1;
  }
  contador++;
  showcase.style.backgroundImage = `url(/imgSlider/img/${contador}.jpg)`;
});

btnPrev.addEventListener("click", () => {
  showcase.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 650,
    fill: "forwards"
  });
  if (contador === 0) {
    contador = 5;
  }

  contador--;
  showcase.style.backgroundImage = `url(/imgSlider/img/${contador}.jpg)`;
});
