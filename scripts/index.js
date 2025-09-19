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
      evt.target.classList.toggle("element__white_button-active");
    });

  /* eliminar targeta */
  clone
    .querySelector(".element__trash")
    .addEventListener("click", function (evt) {
      const item = evt.target.parentElement;
      elements.removeChild(item);
    });

  /* abrir img */

  function imgBig() {
    imgOpen.setAttribute("style", "display: grid;");
  }
  clone
    .querySelector(".element__image")
    .addEventListener("click", function (evt) {
      imgBig();
      const textImg = document.querySelector(".img_open__text");
      const newIextImg = document.querySelector(".element__white_title");
      textImg.textContent = el.name;

      const srcImg = document.querySelector(".img_open__img");
      const newsrcImg = document.querySelector(".element__image");
      srcImg.src = el.link;
    });

  elements.appendChild(clone);

  template.querySelector("img").setAttribute("src", "");
  template.querySelector("img").setAttribute("alt", "");

  template.querySelector("h2").textContent = " ";
});

//////////////////////////////////////////////////////////////////////////////////////

/* agregar targetas */

function addPlace(placeValue, imageValue) {
  const template = document.querySelector("#placetemplate").content;
  const element = template.querySelector(".element").cloneNode(true);

  element.querySelector("h2").textContent = placeValue;

  element.querySelector("img").setAttribute("src", imageValue);
  element.querySelector("img").setAttribute("alt", placeValue);

  element
    .querySelector(".element__white_button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__white_button-active");
    });

  /* eliminar targeta */

  element
    .querySelector(".element__trash")
    .addEventListener("click", function (evt) {
      const item = evt.target.parentElement;
      elements.removeChild(item);
    });

  /* abrir img */

  function imgBig() {
    imgOpen.setAttribute("style", "display: grid;");
  }
  element
    .querySelector(".element__image")
    .addEventListener("click", function (evt) {
      imgBig();
      const textImg = document.querySelector(".img_open__text");
      textImg.textContent = placeValue;

      const srcImg = document.querySelector(".img_open__img");
      srcImg.src = imageValue;
    });

  elements.prepend(element);
}

saveButtonPlaces.addEventListener("click", function () {
  const namePlace = document.querySelector(".formPlaces__label_name");
  const imagePlace = document.querySelector(".formPlaces__label_ocupation");

  if (namePlace.value !== "" && imagePlace.value !== "") {
    addPlace(namePlace.value, imagePlace.value);

    imagePlace.value = "";
    namePlace.value = "";
    cerrarVentanaPlaces();
  }
});

////////////////////////////////////////////////////////////

/* mostrar img flotante */
const imgOpen = document.querySelector(".img_open");
const imgButton = document.querySelector(".element__image");
const imgX = document.querySelector(".img_open__x");

function CerrarImg() {
  imgOpen.removeAttribute("style", "display: grid;");
}
imgX.addEventListener("click", CerrarImg);
