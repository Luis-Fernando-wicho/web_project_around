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

const likebutton = document.querySelectorAll(".element__white_button");

const SaveButton = document.querySelector(".form__submit");
const saveButtonPlaces = document.querySelector(".formPlaces__submit");

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

SaveButton.addEventListener("click", cerrarVentanaPlaces);

/* cerrar ventana flotante Places */

function cerrarVentanaPlaces() {
  VentanaFlotantePlaces.removeAttribute("style", "display: grid;");
}
buttonXPlaces.addEventListener("click", cerrarVentanaPlaces);

saveButtonPlaces.addEventListener("click", CerrarVentana);

///////////////////////////////////////////////////////////////////////////////////

/* CAMBIAR NOMBRE */

function CambiarNombre(event) /* no sube datos */ {
  event.preventDefault();
  NameProfile.textContent = NewNameProfile.value;
  OcupationProfile.textContent = NewOcupationProfile.value;

  NewNameProfile.value = "";
  NewOcupationProfile.value = "";
}
formForm.addEventListener("submit", CambiarNombre);
formForm.addEventListener("submit", CerrarVentana);

///////////////////////////////////////////////////////////////////////////////////////

const element = document.querySelector(".element");
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
  template.querySelector("img").setAttribute("src", el.link);
  template.querySelector("img").setAttribute("alt", el.name);

  template.querySelector("h2").textContent = el.name;

  const clone = document.importNode(template, true);

  clone
    .querySelector(".element__white_button")
    .addEventListener("click", function (evt) {
      console.log("funciona click");
      evt.target.classList.toggle("element__white_button-active");
    });

  elements.appendChild(clone);
});

//element.appendChild(elements);

//////////////////////////////////////////////////////////////////////////////////////

/* agregar targetas */

function addPlace(placeValue, imageValue) {
  const template = document.querySelector("#placetemplate").content;
  const element = template.querySelector(".element").cloneNode(true);

  template.querySelector("h2").textContent = placeValue;

  template.querySelector("img").setAttribute("src", imageValue);
  template.querySelector("img").setAttribute("alt", placeValue);

  element
    .querySelector(".element__white_button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__white_button-active");
    });

  elements.append(element);
}

saveButtonPlaces.addEventListener("click", function () {
  const imagePlace = document.querySelector(".formPlaces__label_name");
  const namePlace = document.querySelector(".formPlaces__label_ocupation");

  addPlace(namePlace.value, imagePlace.value);

  imagePlace.value = "";
  namePlace.value = "";
});

////////////////////////////////////////////////////////////
