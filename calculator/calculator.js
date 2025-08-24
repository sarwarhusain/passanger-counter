let num1 = 8;
let num2 = 2;

let sumEl = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function Add() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}
function Sub() {
  let result =  num1 - num2;
  sumEl.textContent = "Sum: " + result;
}
function Div() {
  let result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}

function Mul() {
  let result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}

Add();
Sub();
Div();
Mul();
