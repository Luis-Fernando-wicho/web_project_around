import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageSelector = document.querySelector(popupSelector);
    this.elements = document.querySelector(".elements");
    this.popupimg = this._imageSelector.querySelector(".img_open__img");
    this.nameImage = this._imageSelector.querySelector(".img_open__text");
  }

  open() {
    super.open();
  }

  _getInputValues(place) {
    this.popupimg.src = place.src;
    this.popupimg.alt = place.alt;
    this.nameImage.textContent = place.alt;

    super.open();

    this._imageSelector.classList.add("img_open-active"); //animacion
  }

  setEventListeners() {
    super.setEventListeners();

    this.elements.addEventListener("click", (evt) => {
      const openimage = evt.target;
      if (openimage.classList.contains("element__image")) {
        const inputValues = openimage;
        this._getInputValues(inputValues);
      }
    });
  }
}
