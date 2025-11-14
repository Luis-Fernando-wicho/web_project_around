import FormValidator from "../components/FormValidator.js";

import Card from "../components/Card.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

/////////////////////////////////////////////////////////////////////////////////////

const userInfo = new UserInfo(
  ".profile__info_name",
  ".profile__info_ocupation"
);

const popupProfile = new PopupWithForm(
  ".popup__profile",
  userInfo.setUserInfo.bind(userInfo)
);
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
  console.log("click abrir agregar lugar");
  popupPlace.open();
});

/* CAMBIAR NOMBRE */

////////////////////////////////////////////////////////////////////////////

/* agregar 6 targetas */

const elements = document.querySelector(".elements");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//////////////////////////////////////////////////////////////////////////////////////

/* agregar targetas */

export function addPlace(placeValue, imageValue) {
  const placeElement = new Card(placeValue, imageValue).addPlaceElement();

  elements.prepend(placeElement);
}

const section = new Section(
  initialCards,

  (item) => {
    addPlace(item.name, item.link);
  }
);
section.renderItems();

/* burbujeo like button */

elements.addEventListener("click", function (evt) {
  const heardButton = evt.target;
  if (heardButton.classList.contains("element__white_button")) {
    heardButton.classList.toggle("element__white_button-active");
  }
});

/* burbujeo  eliminar targeta */

elements.addEventListener("click", function (evt) {
  const trashButton = evt.target;
  if (trashButton.classList.contains("element__trash")) {
    const item = evt.target.parentElement;
    elements.removeChild(item);
  }
});

/* burbujeo  abrir img */
const popupImg = new PopupWithImage(".img_open");
popupImg.setEventListeners();

////////////////////////////////////////////////////////////

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const formValidator = new FormValidator(config);
formValidator.enableValidation();

///////////////////////////////////////////////
