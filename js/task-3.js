const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    console.log("event.currentTarget.value - " + event.currentTarget.value);
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
