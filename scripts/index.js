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

saveButtonPlaces.addEventListener("click", CerrarVentana);

/* cerrar ventana flotante Places */

function cerrarVentanaPlaces() {
  VentanaFlotantePlaces.removeAttribute("style", "display: grid;");
}
buttonXPlaces.addEventListener("click", cerrarVentanaPlaces);

SaveButton.addEventListener("click", cerrarVentanaPlaces);

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

/* like button */
/* function Like() {
  likebutton.setAttribute("style", "background-image: url(/images/Union.svg);");
}
likebutton.addEventListener("click", Like); */

/* likebutton.addEventListener("click", function (evt) {
  evt.target.classList.toggle(".element__white_button-active");
}); */

likebutton.addEventListener("click", function (evt) {
  evt.target.classList.toggle(".element__white_button-active");
});

/////////////////////////////////////////////////////////////////////////////////////

/* desabilitar botton "trabajando" */

function disabledButton() {
  if (
    NewNameProfile.value.length === 0 &&
    NewOcupationProfile.value.length === 0
  ) {
    SaveButton.setAttribute("disabled", true);
    SaveButton.classList.add("form__submit_disable");
  } else {
    SaveButton.removeAttribute("disabled");
    SaveButton.classList.add("form__submit");
  }
}

function disabledButton() {
  SaveButton.setAttribute("disabled", true);
  SaveButton.classList.add("form__submit_disable");
}

//////////////////////////////////////////////////////////////////////////////////////
