/* boton para editar */
const VentanaFlotante = document.querySelector(".popup");
const VentanaFlotantePlaces = document.querySelector(".popupPlaces");

const InfoEdit = document.querySelector(".profile__info_edit");
const PlacesEdit = document.querySelector(".profile__add-button");
const ButtonX = document.querySelector(".popup__x");
const buttonXPlaces = document.querySelector(".popupPlaces__x");

let NameProfile = document.querySelector(".profile__info_name");
let OcupationProfile = document.querySelector(".profile__info_ocupation");

const NewNameProfile = document.querySelector(".form__label_name");
const NewOcupationProfile = document.querySelector(".form__label_ocupation");

let formForm = document.querySelector(".form");

const SaveButton = document.querySelector(".form__submit");

const buttontrash = document.querySelectorAll(".element__trash");

////////////////////////////////////////////////////////////////////
/* mostrar ventana flotante */
function ProfileEdit() {
  VentanaFlotante.setAttribute("style", "display: grid;");
}
InfoEdit.addEventListener("click", ProfileEdit);

/* mostrar ventana flotante places*/

function placeEdit() {
  VentanaFlotantePlaces.setAttribute("style", "display: grid;");
}
PlacesEdit.addEventListener("click", placeEdit);

////////////////////////////////////////////////////////////////////////////

/* cerrar ventana flotante */

function CerrarVentana() {
  VentanaFlotante.removeAttribute("style", "display: grid;");
}
ButtonX.addEventListener("click", CerrarVentana);

/* cerrar ventana flotante Places */

function cerrarVentanaPlaces() {
  VentanaFlotantePlaces.removeAttribute("style", "display: grid;");
}
buttonXPlaces.addEventListener("click", cerrarVentanaPlaces);

///////////////////////////////////////////////////////////////////////////////////

/* CAMBIAR NOMBRE */

function CambiarNombre(event) /* no sube datos */ {
  event.preventDefault();

  if (NewNameProfile.value !== "" && NewOcupationProfile.value !== "") {
    NameProfile.textContent = NewNameProfile.value;
    OcupationProfile.textContent = NewOcupationProfile.value;

    NewNameProfile.value = "";
    NewOcupationProfile.value = "";
    CerrarVentana();
  }
}
formForm.addEventListener("submit", CambiarNombre);

///////////////////////////////////////////////////////////////////////////////////////

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
