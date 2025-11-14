export { openDialogProfile, openDialogPlaces };
import PopupWithForm from "../components/PopupWithForm.js";

const popupProfile = new PopupWithForm(".popup__profile");
popupProfile.setEventListeners();

const popupPlace = new PopupWithForm(".popup__places");
popupPlace.setEventListeners();

/* Oppen dialogs */

const openDialogProfile = document.querySelector(".profile__info_edit");

const openDialogPlaces = document.querySelector(".profile__add-button");

openDialogProfile.addEventListener("click", () => {
  popupProfile.open();
});

openDialogPlaces.addEventListener("click", () => {
  popupPlace.open();
});
