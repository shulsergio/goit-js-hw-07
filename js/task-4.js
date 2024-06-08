const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", hendlerClickOk);

function hendlerClickOk(evt) {
  evt.preventDefault();

  const formData = new FormData(loginForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  }
  console.log(data);
}
