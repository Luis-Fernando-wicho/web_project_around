import { enableValidation } from "./validate.js";

import {
  openDialogProfile,
  openDialogPlaces,
  dialogProfile,
  dialogPlaces,
} from "../utils.js";

import { Card } from "./Card.js";
/////////////////////////////////////////////////////////////////////////////////////

/* CAMBIAR NOMBRE */

const NameProfile = document.querySelector(".profile__info_name");
const OcupationProfile = document.querySelector(".profile__info_ocupation");

const NewNameProfile = document.querySelector(".popup__input_name");
const NewOcupationProfile = document.querySelector(".popup__input_ocupation");

const saveButtonProfile = document.querySelector(".popup__button_profile");

function CambiarNombre(event) {
  event.preventDefault();

  if (NewNameProfile.value !== "" && NewOcupationProfile.value !== "") {
    NameProfile.textContent = NewNameProfile.value;
    OcupationProfile.textContent = NewOcupationProfile.value;

    NewNameProfile.value = "";
    NewOcupationProfile.value = "";
    saveButtonProfile.classList.add("popup__button_disabled");
    saveButtonProfile.disabled = true;
    dialogProfile.close();
  }
}
saveButtonProfile.addEventListener("click", CambiarNombre);

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

initialCards.forEach((el) => {
  addPlace(el.name, el.link);
});

//////////////////////////////////////////////////////////////////////////////////////

/* agregar targetas */

function addPlace(placeValue, imageValue) {
  const placeElement = new Card(placeValue, imageValue).addPlaceElement();
  elements.prepend(placeElement);
}

const saveButtonPlaces = document.querySelector(".popup__button_places");
const namePlace = document.querySelector(".popup__input_namePlace");
const imagePlace = document.querySelector(".popup__input_URL");

saveButtonPlaces.addEventListener("click", function () {
  if (namePlace.value !== "" && imagePlace.value !== "") {
    addPlace(namePlace.value, imagePlace.value);
    imagePlace.value = "";
    namePlace.value = "";
    saveButtonPlaces.classList.add("popup__button_disabled");
    saveButtonPlaces.disabled = true;
    dialogPlaces.close();
  }
});

/* burbujeo like button bbo */

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

elements.addEventListener("click", function (evt) {
  const openimage = evt.target;
  const imgOpen = document.querySelector("#myDialogImg");
  const imgOpensrc = imgOpen.querySelector(".img_open__img");
  const imgOpenText = imgOpen.querySelector(".img_open__text");

  if (openimage.classList.contains("element__image")) {
    imgOpensrc.src = openimage.src;
    imgOpensrc.alt = openimage.alt;
    imgOpenText.textContent = openimage.alt;

    imgOpen.showModal();

    imgOpen.classList.add("img_open-active");
  }
});

////////////////////////////////////////////////////////////

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
