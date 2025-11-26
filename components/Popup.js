export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.showModal();
  }

  cerrarbajo() {
    this._popup.close();
  }

  setEventListeners() {}
}
