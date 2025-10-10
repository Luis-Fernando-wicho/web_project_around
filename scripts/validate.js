//inputs validation
// TODO: function that show an error
function showInputError(input, errorMessage, config) {
  const errorElement = document.querySelector(`#error-${input.name}`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
  input.classList.add(config.inputErrorClass);
}

// TODO: funcion than hide an error
function hideInputError(input, config) {
  const errorElement = document.querySelector(`#error-${input.name}`);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
  input.classList.remove(config.inputErrorClass);
}

// TODO: function that validate if we have an error ---> show or hide an error
function checkInputValidity(input, config) {
  if (input.validity.valid) {
    hideInputError(input, config);
  } else {
    showInputError(input, input.validationMessage, config);
  }
}

// button validation
// TODO: function that validate the whole form
function isFormValid(inputList) {
  return inputList.some((input) => !input.validity.valid);
}
// TODO: function that handle button state(enable or disabled)
function toggleButtonState(inputList, config) {
  const buttonElement = document.querySelector(config.submitButtonSelector);
  if (isFormValid(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

//Inputs y button
// TODO: function that set event listeners

function setEventListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  toggleButtonState(inputList, config);

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(input, config);
      toggleButtonState(inputList, config);
    });
  });
}

export function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    setEventListeners(form, config);
  });
}
