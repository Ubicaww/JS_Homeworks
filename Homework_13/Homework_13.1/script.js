const form = document.querySelector(".form");

const nameInput = document.querySelector(".name");
const messageInput = document.querySelector(".message");
const phoneInput = document.querySelector(".phone");
const emailInput = document.querySelector(".email");

const nameError = document.querySelector(".name-error");
const messageError = document.querySelector(".message-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.textContent = "";
  messageError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  const nameRegex = /^(?=.{2,30}$)[A-ZА-ЯІЇЄ][a-zа-яіїє]+( [A-ZА-ЯІЇЄ][a-zа-яіїє]+)*$/;
  if (!nameRegex.test(nameInput.value.trim())) {
    nameError.textContent = "The name must be capitalized and contain 2-30 symbols.";
    isValid = false;
  }

  const messageRegex = /^.{5,}$/;
  if (!messageRegex.test(messageInput.value.trim())) {
    messageError.textContent = "Minimum 5 symbols";
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = "Format: +380XXXXXXXXX";
    isValid = false;
  }

  const emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "invalid email";
    isValid = false;
  }

  if (isValid) {
    const userData = {
      name: nameInput.value,
      message: messageInput.value,
      phone: phoneInput.value,
      email: emailInput.value
    };

    console.log(userData);

    form.reset();
  }
});