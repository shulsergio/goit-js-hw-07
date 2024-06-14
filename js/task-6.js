function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let boxes = document.querySelector("#boxes");
let amount = document.querySelector("input");
let buttonCreate = document.querySelector("[data-create]");
let buttonDestroy = document.querySelector("[data-destroy]");

/**
 * @param {*} amount.value - тягну цифру з інпуту
 * роблю нові елементи передаю у масив об*єектів
 */
function createBoxes() {
  let images = [];
  let newBoxes = [];
  boxes.innerHTML = "";
  console.log("before amount.value- ", amount.value);
  console.log("before images.length- ", images.length);
  console.log("before images- ", images);

  for (let i = 0; i < amount.value; i++) {
    newBoxes = document.createElement("div");
    newBoxes.classList.add("new-box");
    newBoxes.style.width = `${30 + 10 * images.length}px`;
    newBoxes.style.height = `${30 + 10 * images.length}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();
    images.push(newBoxes);

    console.log("after images.length- ", images.length);
    console.log("after images- ", images);
  }
  boxes.append(...images);
  console.log("after boxes- ", boxes);
}
/**
 * удаляю всі дані
 */
function destroyBoxes() {
  amount.value = "";
  boxes.innerHTML = "";
}
buttonCreate.addEventListener("click", () => {
  amount.value > 0 && amount.value <= 100
    ? createBoxes()
    : alert("Число має бути від 1 до 100");
});
buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
  console.log("after amount.value-", amount.value);
});
