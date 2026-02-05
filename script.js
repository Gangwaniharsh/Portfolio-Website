const nams = document.querySelector("#name");
const emails = document.querySelector("#email");
const message = document.querySelector("#mess");
const formcl = document.querySelector(".form");

let touched = {
  nama: false,
  emaila: false,
  messsaga: false,
};
formcl.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isFormValid = true;
  if (touched.emaila && !emailPattern.test(emails.value)) {
    showError(emails, "Please enter a valid email address");
    isFormValid = false;
  } else {
    removeError(emails);
  }

  if (touched.nama && nams.value.trim().length < 2) {
    showError(nams, "Name is too short");
    isFormValid = false;
  } else {
    removeError(nams);
  }

  if (touched.messsaga && message.value.trim().length < 10) {
    showError(message, "Message too short");
    isFormValid = false;
  } else {
    removeError(message);
  }

  if (!isFormValid) {
    e.preventDefault();
    if (
      touched.nama == false ||
      touched.emaila == false ||
      touched.messsaga == false
    ) {
      alert("Please fill all details first");
    } else {
      alert("Please fill all details correctly");
    }
  } else {
    alert("Success! Sending Your message.....");
    formcl.reset();
  }
});

function showError(input, message) {
  input.style.borderColor = "#ff4757";
  input.nextElementSibling.textContent = message;
}

function removeError(input) {
  input.style.borderColor = "#a18cd1";
  input.nextElementSibling.textContent = "";
}

nams.addEventListener("focus", () => (touched.nama = true));
emails.addEventListener("focus", () => (touched.emaila = true));
message.addEventListener("focus", () => (touched.messsaga = true));

nams.addEventListener("input", () => removeError(nams));
emails.addEventListener("input", () => removeError(emails));
message.addEventListener("input", () => removeError(message));
