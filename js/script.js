const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginCheckbox = document.querySelector("#loginCheckbox");
const loginBtn = document.querySelector("#loginBtn");

const registerForm = document.querySelector("#registerForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const repeatPassword = document.querySelector("#repeatPassword");
const registerBtn = document.querySelector("#registerBtn");

const forgotPassword = document.querySelector("#forgotPassword");
const formToggleText = document.querySelector("#formToggleText");
const formToggleItem = document.querySelector("#formToggle");

let activeForm;

const formToggles = [
  {
    register: {
      toggleText: "Already have an account?",
      toggle: "Login.",
    },
    login: {
      toggleText: "Don't have an account?",
      toggle: "Register.",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  activeForm = "Login";
  document.title = activeForm;
  formToggleText.innerHTML = formToggles[0].login.toggleText;
  formToggleItem.innerHTML = formToggles[0].login.toggle;
});

formToggleItem.addEventListener("click", () => {
  activeForm === "Login" ? (activeForm = "Register") : (activeForm = "Login");
  document.title = activeForm;
  switchForm(activeForm);
});

function switchForm(form) {
    if (form === 'Login') {
        loginForm.classList.replace("d-none", "d-block");
        registerForm.classList.replace("d-block", "d-none");
        formToggleText.innerHTML = formToggles[0].login.toggleText;
        formToggleItem.innerHTML = formToggles[0].login.toggle;
    } else {
        loginForm.classList.replace("d-block", "d-none");
        registerForm.classList.replace("d-none", "d-block");
        formToggleText.innerHTML = formToggles[0].register.toggleText;
        formToggleItem.innerHTML = formToggles[0].register.toggle;
    }
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
});

registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
});

forgotPassword.addEventListener("click", () => {
    //
});

function login() {
    //
}

function register() {
    //
}