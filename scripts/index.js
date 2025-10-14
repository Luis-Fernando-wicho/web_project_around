import { enableValidation } from "./validate.js";

/* Oppen dialogs */
const dialogProfile = document.querySelector(".popup__profile");
const openDialogProfile = document.querySelector(".profile__info_edit");

const dialogPlaces = document.querySelector(".popup__places");
const openDialogPlaces = document.querySelector(".profile__add-button");

openDialogProfile.addEventListener("click", () => {
  dialogProfile.showModal();
});

openDialogPlaces.addEventListener("click", () => {
  dialogPlaces.showModal();
});

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
const template = document.querySelector("#placetemplate").content;

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
  const element = template.querySelector(".element").cloneNode(true);
  const img = element.querySelector(".element__image");
  const imgText = element.querySelector(".element__white_title");

  /* agregar valores a targetas */

  imgText.textContent = placeValue;
  img.setAttribute("alt", placeValue);

  img.setAttribute("src", imageValue);

  /* abrir img grande */

  const imgButton = element.querySelector(".element__image");
  const imgOpen = document.querySelector("#myDialogImg");
  const imgOpensrc = imgOpen.querySelector(".img_open__img");
  const imgOpenText = imgOpen.querySelector(".img_open__text");

  imgButton.addEventListener("click", () => {
    imgOpensrc.src = imageValue;
    imgOpensrc.alt = placeValue;
    imgOpenText.textContent = placeValue;

    imgOpen.showModal();

    imgOpen.classList.add("img_open-active");
  });

  /* aparece las targetas al principio */

  elements.prepend(element);
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

/* burbujeo like button */
/* evt.target nos dice donde damos click dnetro de elements
si donde damos click tenemos la clase element__white_button
ponemos o quitamos la clase activada */

elements.addEventListener("click", function (evt) {
  const heardButton = evt.target;
  if (heardButton.classList.contains("element__white_button")) {
    heardButton.classList.toggle("element__white_button-active");
  }
});

/* eliminar targeta */

elements.addEventListener("click", function (evt) {
  const trashButton = evt.target;
  if (trashButton.classList.contains("element__trash")) {
    const item = evt.target.parentElement;
    elements.removeChild(item);
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
