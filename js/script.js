const loginFormContainer = document.querySelector("#loginFormContainer");
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginCheckbox = document.querySelector("#loginCheckbox");

const registerFormContainer = document.querySelector("#registerFormContainer");
const registerForm = document.querySelector("#registerForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const repeatPassword = document.querySelector("#repeatPassword");

const forgotPswd = document.querySelector("#forgotPswd");
const formToggleText = document.querySelector("#formToggleText");
const formToggleItem = document.querySelector("#formToggle");

const toastContainer = document.querySelector(".toast-container");

let activeForm;

const url = "http://localhost/login-register/";

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
  if (form === "Login") {
    loginFormContainer.classList.replace("d-none", "d-block");
    registerFormContainer.classList.replace("d-block", "d-none");
    formToggleText.innerHTML = formToggles[0].login.toggleText;
    formToggleItem.innerHTML = formToggles[0].login.toggle;
  } else {
    loginFormContainer.classList.replace("d-block", "d-none");
    registerFormContainer.classList.replace("d-none", "d-block");
    formToggleText.innerHTML = formToggles[0].register.toggleText;
    formToggleItem.innerHTML = formToggles[0].register.toggle;
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let errorTitle = "";
  let errorDescription = "";
  let errorBody = "";
  let email = "";
  let password = "";
  let rememberMe;

  if (!loginEmail.validity.valid) {
    loginEmail.classList.add("is-invalid");
    if (loginEmail.validity.typeMismatch) {
      errorTitle = "Email error 🤷‍♂️";
      errorDescription = "Login failed";
      errorBody = "Email is invalid.";
      let emailToast = document.createElement("div");
      emailToast.className += "toast";
      emailToast.setAttribute("role", "alert");
      emailToast.setAttribute("aria-live", "assertive");
      emailToast.setAttribute("aria-atomic", "true");
      emailToast.setAttribute("data-bs-delay", "1500");
      emailToast.innerHTML = `
          <div class="toast-header">
            <strong class="me-auto toast-title">
              ${errorTitle}
            </strong>
            <small class="toast-description">
              ${errorDescription}
            </small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${errorBody}
          </div>
      `;
      toastContainer.appendChild(emailToast);
      const toast = new bootstrap.Toast(emailToast);
      toast.show();
    } else if (loginEmail.validity.valueMissing) {
      errorTitle = "Email error 🤷‍♂️";
      errorDescription = "Login failed";
      errorBody = "Please enter your email.";
      let emailToast = document.createElement("div");
      emailToast.className += "toast";
      emailToast.setAttribute("role", "alert");
      emailToast.setAttribute("aria-live", "assertive");
      emailToast.setAttribute("aria-atomic", "true");
      emailToast.setAttribute("data-bs-delay", "1500");
      emailToast.innerHTML = `
          <div class="toast-header">
            <strong class="me-auto toast-title">
              ${errorTitle}
            </strong>
            <small class="toast-description">
              ${errorDescription}
            </small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${errorBody}
          </div>
      `;
      toastContainer.appendChild(emailToast);
      const toast = new bootstrap.Toast(emailToast);
      toast.show();
    }
  } else {
    loginEmail.classList.remove("is-invalid");
    email = loginEmail.value;
  }

  if (!loginPassword.validity.valid) {
    loginPassword.classList.add("is-invalid");
    if (loginPassword.validity.valueMissing) {
      errorTitle = "Password error 🤷‍♂️";
      errorDescription = "Login failed";
      errorBody = "Please enter your password.";
    }
    let passwordToast = document.createElement("div");
    passwordToast.className += "toast";
    passwordToast.setAttribute("role", "alert");
    passwordToast.setAttribute("aria-live", "assertive");
    passwordToast.setAttribute("aria-atomic", "true"); 
    passwordToast.setAttribute("data-bs-delay", "1500");
    passwordToast.innerHTML = `
        <div class="toast-header">
          <strong class="me-auto toast-title">
            ${errorTitle}
          </strong>
          <small class="toast-description">
            ${errorDescription}
          </small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${errorBody}
        </div>
    `;
    toastContainer.appendChild(passwordToast);
    const toast = new bootstrap.Toast(passwordToast);
    toast.show();
  } else {
    loginPassword.classList.remove("is-invalid");
    password = loginPassword.value;
  }

  if (password && email) {
    let data = {
      password: password,
      email: email
    };
    login(data);
  }
});

function hide(item) {
  item.hide()
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  register();
});

forgotPswd.addEventListener("click", () => {
  forgotPassword();
});

async function login(data) {
  let resp = await fetch(url + "api/login.php", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  console.log(resp.json())
  return resp.json();
}

async function register() {
  //
}

function forgotPassword() {}
