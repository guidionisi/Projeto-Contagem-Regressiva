import Countdown from "./Countdown.js";

const dataFutura = new Countdown("15 May 2023");

// console.log(dataFutura.total);

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
setInterval(() => {
  dias.innerText = dataFutura.total.dias;
  horas.innerText = dataFutura.total.horas;
  minutos.innerText = dataFutura.total.minutos;
  segundos.innerText = dataFutura.total.segundos;
}, 1000);
