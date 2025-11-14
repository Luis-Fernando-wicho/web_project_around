import Popup from "./Popup.js";
import { addPlace } from "../scripts/index.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, setUserInfo) {
    super(popupSelector);
    this.setUserInfo = setUserInfo;
    this._popupSelector = document.querySelector(popupSelector);
    this.selector = popupSelector;
    this.form = this._popupSelector.querySelector(".popup__form");
  }

  open() {
    super.open();
  }

  cerrar() {
    const SaveButton = this.form.querySelector(".popup__button");

    SaveButton.classList.add("popup__button_disabled");
    SaveButton.disabled = true;

    super.cerrarbajo();
  }

  _getInputValues() {
    const inputsValue = {};
    const inputs = Array.from(this.form.querySelectorAll(".popup__input"));
    inputs.forEach((input) => {
      inputsValue[input.name] = input.value;
    });
    return inputsValue;
  }

  editprofile(inputValues) {
    this.setUserInfo(inputValues.name, inputValues.about);
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      this.selector === ".popup__profile"
        ? this.editprofile(inputValues)
        : addPlace(inputValues.title, inputValues.link);
      console.log("<------ antes de cerrar");
      this.form.reset();
      this.cerrar();
    });
  }
}
