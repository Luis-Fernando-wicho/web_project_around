export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    /* console.log(this._nameElement);
    console.log(this._jobElement);
    console.log(this._nameElement.textContent);
    console.log(this._jobElement.textContent); */
  }

  getUserInfo() {
    const name = this._nameElement.textContent;

    const job = this._jobElement.textContent;

    return { name, job };
  }

  setUserInfo(newname, newjob) {
    this._nameElement.textContent = newname;

    this._jobElement.textContent = newjob;
  }
}
