// 1. definir la clase

export default class FormValidator {
  constructor(config) {
    this.config = config;

    //seleccionar el cotenido del template
  }

  //metodo que agrege un lugar (clone)

  //mostrar error
  showInputError(input, errorMessage) {
    const errorElement = document.querySelector(`#error-${input.name}`);
    errorElement.classList.add(this.config.errorClass);
    errorElement.textContent = errorMessage;
    input.classList.add(this.config.inputErrorClass);
  }

  //ocultar error

  hideInputError(input) {
    const errorElement = document.querySelector(`#error-${input.name}`);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = "";
    input.classList.remove(this.config.inputErrorClass);
  }

  //validar

  checkInputValidity(input) {
    if (input.validity.valid) {
      this.hideInputError(input, this.config);
    } else {
      this.showInputError(input, input.validationMessage, this.config);
    }
  }

  // validar todo el poopup
  isFormValid(inputList) {
    return inputList.some((input) => !input.validity.valid);
  }
  // cambiar estado de boton
  toggleButtonState(form, inputList) {
    const buttonElement = form.querySelector(this.config.submitButtonSelector);
    if (this.isFormValid(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this.config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this.config.inactiveButtonClass);
    }
  }

  // TODO: function that set event listeners

  setEventListeners(form) {
    const inputList = Array.from(
      form.querySelectorAll(this.config.inputSelector)
    );
    this.toggleButtonState(form, inputList, this.config);

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this.checkInputValidity(input, this.config);
        this.toggleButtonState(form, inputList, this.config);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(this.config.formSelector)
    );
    formList.forEach((form) => {
      this.setEventListeners(form);
    });
  }
}
