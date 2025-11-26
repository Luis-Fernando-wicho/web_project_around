import FormValidator from "../components/FormValidator.js";

import Card from "../components/Card.js";

import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWithImage.js";

import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";

import { api } from "../components/Api.js";

/////////////////////////////////////////////////////////////////////////////////////

const userInfo = new UserInfo(
  ".profile__info_name",
  ".profile__info_ocupation",
  ".profile__img"
);
userInfo.getUserInfo();

const popupProfile = new PopupWithForm(
  ".popup__profile",
  userInfo.setUserInfo.bind(userInfo)
);
popupProfile.setEventListeners();

const popupAvatar = new PopupWithForm(
  ".popup__avatar",
  userInfo.setUserAvatar.bind(userInfo)
);
popupAvatar.setEventListeners();

const popupPlace = new PopupWithForm(".popup__places");
popupPlace.setEventListeners();

/* Oppen dialogs */

const openDialogAvatar = document.querySelector(".profile__avatar");

openDialogAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

const openDialogProfile = document.querySelector(".profile__info_edit");

openDialogProfile.addEventListener("click", () => {
  popupProfile.open();
});

const openDialogPlaces = document.querySelector(".profile__add-button");

openDialogPlaces.addEventListener("click", () => {
  popupPlace.open();
});

const openDialogARS = document.querySelector(".profile__add-button");

openDialogARS.addEventListener("click", () => {
  popupPlace.open();
});

////////////////////////////////////////////////////////////////////////////

const elements = document.querySelector(".elements");

//////////////////////////////////////////////////////////////////////////////////////

/* burbujeo like button */

function likeCard(id, isLiked) {
  elements.addEventListener("click", function (evt) {
    const heardButton = evt.target;
    const itemId = evt.target.closest(".element").id;
    if (heardButton.classList.contains("element__white_button")) {
      if (itemId === id) {
        isLiked = !isLiked;
        api
          .setlikeCard(id, isLiked)
          .then((data) => {
            console.log(isLiked, "booleano like");
            console.log(id, "id like");
            heardButton.classList.toggle("element__white_button-active");
          })
          .catch((err) => {
            console.log(err); // registra el error en la consola
          });
      }
    }
  });
}

/* elements.addEventListener("click", function (evt) {
  const heardButton = evt.target;
  if (heardButton.classList.contains("element__white_button")) {
    heardButton.classList.toggle("element__white_button-active");
  }
}); */

/* burbujeo  eliminar targeta */

const popupARS = document.querySelector(".popup__ARS");

function handleDeleteCard(id) {
  elements.addEventListener("click", function (evt) {
    const trashButton = evt.target;
    const itemId = evt.target.parentElement.id;

    if (trashButton.classList.contains("element__trash")) {
      popupARS.showModal();
      popupARS.addEventListener("submit", () => {
        if (itemId === id) {
          api
            .deleteCard(id)
            .then((data) => {
              const item = evt.target.parentElement;

              elements.removeChild(item);
            })
            .catch((err) => {
              console.log(err); // registra el error en la consola
            });
        }
      });
    }
  });
}

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
function renderElements() {
  api
    .getInitialCards()
    .then((data) => {
      const section = new Section(data, (item) => {
        addPlace(item.name, item.link, item._id, item.isLiked);
        handleDeleteCard(item._id);
        likeCard(item._id, item.isLiked);
      });
      section.renderItems();
    })
    .catch((err) => {
      console.log(err); // registra el error en la consola
    });
}
renderElements();
export function addPlace(placeValue, imageValue, id, like) {
  const placeElement = new Card(
    placeValue,
    imageValue,
    id,
    like
  ).addPlaceElement();

  elements.prepend(placeElement);
}
