import sumar from "./sumador";
import multiplicar from "./multiplicador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const first_m = document.querySelector("#primer-numero-multiplicar");
const second_m = document.querySelector("#segundo-numero-multiplicar");
const form_m = document.querySelector("#multiplicar-form");
const div_m = document.querySelector("#resultado-div-multiplicar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form_m.addEventListener("submit", (event)=>{
  event.preventDefault();

  const firstNumberMult = Number.parseInt(first_m.value);
  const secondNumberMult = Number.parseInt(second_m.value);

  div_m.innerHTML = "<p>" + multiplicar(firstNumberMult, secondNumberMult) + "</p>";
})