import { getRandomHexColor } from "./task-6.js";

let changeColorButton = document.querySelector(".change-color");
let colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", hendlerClickColorBtn);

function hendlerClickColorBtn() {
  let colorInput = getRandomHexColor();
  document.body.style.backgroundColor = colorInput;
  colorSpan.textContent = colorInput;
  console.log("colorInput", colorInput);
  console.log("colorSpan ", colorSpan);
}
