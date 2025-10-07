/* Oppen dialogs */

const dialogProfile = document.querySelector("#myDialogProfile");
const openDialogProfile = document.querySelector(".profile__info_edit");

const dialogPlaces = document.querySelector("#myDialogPlaces");
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

const NewNameProfile = document.querySelector(".form__label_name");
const NewOcupationProfile = document.querySelector(".form__label_ocupation");

const formForm = document.querySelector(".form__submit");

function CambiarNombre(event) {
  event.preventDefault();

  if (NewNameProfile.value !== "" && NewOcupationProfile.value !== "") {
    NameProfile.textContent = NewNameProfile.value;
    OcupationProfile.textContent = NewOcupationProfile.value;

    NewNameProfile.value = "";
    NewOcupationProfile.value = "";
    dialogProfile.close();
  }
}
formForm.addEventListener("click", CambiarNombre);

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

  /* boton like */
  const likeButton = element.querySelector(".element__white_button");

  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__white_button-active");
  });

  /* eliminar targeta */
  const trashButton = element.querySelector(".element__trash");

  trashButton.addEventListener("click", function (evt) {
    const item = evt.target.parentElement;
    elements.removeChild(item);
  });

  /* abrir img grande */

  const imgButton = element.querySelector(".element__image");
  const imgOpen = document.querySelector(".img_open");
  const imgOpensrc = imgOpen.querySelector(".img_open__img");
  const imgOpenText = imgOpen.querySelector(".img_open__text");

  imgButton.addEventListener("click", () => {
    imgOpensrc.src = imageValue;
    imgOpensrc.alt = placeValue;
    imgOpenText.textContent = placeValue;
    imgOpen.setAttribute("style", "display: grid;");
  });

  /* cerrar img grande */

  const imgX = document.querySelector(".img_open__x");

  imgX.addEventListener("click", () => {
    imgOpen.removeAttribute("style", "display: grid;");
  });

  /* aparece las targetas al principio */

  elements.prepend(element);
}

const saveButtonPlaces = document.querySelector(".formPlaces__submit");
const namePlace = document.querySelector(".formPlaces__label_name");
const imagePlace = document.querySelector(".formPlaces__label_ocupation");

saveButtonPlaces.addEventListener("click", function () {
  if (namePlace.value !== "" && imagePlace.value !== "") {
    addPlace(namePlace.value, imagePlace.value);
    imagePlace.value = "";
    namePlace.value = "";
    cerrarVentanaPlaces();
  }
});

////////////////////////////////////////////////////////////
