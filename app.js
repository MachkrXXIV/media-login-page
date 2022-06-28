const form = document.querySelector("form");
const passReq = document.querySelector("ul");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-pass");
const submit = document.querySelector("button");
const logo = document.querySelector(".logo");

passReq.remove();

confirmPass.addEventListener("input", (e) => {
  if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity("Passwords do not match");
  }
});
