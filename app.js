const form = document.querySelector("form");
const passReq = document.querySelector("ul");
const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirm-pass");
const submit = document.querySelector("button");
const logo = document.querySelector(".logo");
const mediaQuery = window.matchMedia("(min-width: 961px)");

confirmPass.addEventListener("input", (e) => {
  if (confirmPass.value !== password.value) {
    confirmPass.setCustomValidity("Passwords do not match");
  }
});

mediaQuery.addEventListener("change", mediaHandler);

function mediaHandler(e) {
  if (mediaQuery.matches) {
    passReq.remove();
    logo.remove();
    console.log("works!");
  }
}

console.log(mediaQuery.matches);
