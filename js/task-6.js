export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let boxes = document.querySelector("#boxes");
let amount = document.querySelector("input");
let buttonCreate = document.querySelector("[data-create]");
let buttonDestroy = document.querySelector("[data-destroy]");

buttonCreate.addEventListener("click", () => {
  createBoxes(amount);
});
function createBoxes(amount) {
  console.log("amount.value-", amount.value);
}
