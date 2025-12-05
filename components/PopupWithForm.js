import Popup from "./Popup.js";
import { addPlace } from "../scripts/index.js";
import { api } from "../components/Api.js";
import UserInfo from "./UserInfo.js";
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

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      if (this.selector === ".popup__profile") {
        this.setUserInfo(inputValues.name, inputValues.about);
      } else if (this.selector === ".popup__avatar") {
        console.log(inputValues.link);
        console.log(this.setUserInfo);
        this.setUserInfo(inputValues.link);
      } else {
        const saveButton = this.form.querySelector(".popup__button");
        saveButton.textContent = "guardando";
        api
          .setCards(inputValues.title, inputValues.link)
          .then((data) => {
            addPlace(data.name, data.link);
          })
          .catch((err) => {
            console.log(err); // registra el error en la consola
          })
          ////////////////////////??????????????????????????????????????????????
          .finally(() => {
            saveButton.textContent = "Guardar";
          });
        /////////////////////////????????????????????????????????
      }
      this.form.reset();
      this.cerrar();
    });
  }
}
