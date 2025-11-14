export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.showModal();
  }

  cerrarbajo() {
    console.log("<------ cerrar");
    this._popup.close();
  }

  setEventListeners() {}
}
