function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let images = [];
let boxes = document.querySelector("#boxes");
let amount = document.querySelector("input");
let buttonCreate = document.querySelector("[data-create]");
let buttonDestroy = document.querySelector("[data-destroy]");

/**
 * @param {*} amount.value - тягну цифру з інпуту
 * роблю нові елементи передаю у масив об*єектів
 */
function createBoxes() {
  console.log("amount.value-", amount.value);
  for (let i = 0; i < amount.value; i++) {
    const newBoxes = document.createElement("div");
    newBoxes.classList.add("new-box");
    newBoxes.style.width = `${30 + 10 * images.length}px`;
    newBoxes.style.height = `${30 + 10 * images.length}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    boxes.append(newBoxes);
    images.push({
      divName: newBoxes.id,
      divWidth: newBoxes.width,
      divHeight: newBoxes.height,
      divColor: newBoxes.style.backgroundColor,
    });
  }
}
/**
 * удаляю всі дані
 */
function removeBoxes() {
  amount.value = 0;
  images = [];
  boxes.innerHTML = "";
}
buttonCreate.addEventListener("click", () => {
  createBoxes();
});
buttonDestroy.addEventListener("click", () => {
  removeBoxes();
  console.log("after amount.value-", amount.value);
});
