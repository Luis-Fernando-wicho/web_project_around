import { api } from "../components/Api.js";
export default class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
    this.form = document.querySelector(".popup");
  }

  getUserInfo() {
    api
      .getInitialData()
      .then((data) => {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
        this._avatarSelector.src = data.avatar;
      })
      .catch((err) => {
        console.log(err); // registra el error en la consola
      });
  }

  setUserInfo(newname, newjob) {
    const saveButton = this.form.querySelector(".popup__button");
    saveButton.textContent = "guardando";
    api
      .setData(newname, newjob)
      .then((data) => {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
      })
      .catch((err) => {
        console.log(err); // registra el error en la consola
      })
      .finally(() => {
        saveButton.textContent = "Guardar";
      });
  }

  setUserAvatar(url) {
    console.log(url);
    const saveButton = this.form.querySelector(".popup__button");
    saveButton.textContent = "guardando";
    api
      .setAvatar(url)
      .then((data) => {
        this._avatarSelector.src = data.avatar;
      })
      .catch((err) => {
        console.log(err); // registra el error en la consola
      })
      .finally(() => {
        saveButton.textContent = "Guardar";
      });
  }
}
