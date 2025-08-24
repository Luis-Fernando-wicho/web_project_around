/* boton para editar */
const VentanaFlotante = document.querySelector(".popup");

const InfoEdit = document.querySelector(".profile__info_edit");
const ButtonX = document.querySelector(".popup__x");

let NameProfile = document.querySelector(".profile__info_name");
let OcupationProfile = document.querySelector(".profile__info_ocupation");

let NewNameProfile = document.querySelector(".form__label_name");
let NewOcupationProfile = document.querySelector(".form__label_ocupation");

let formForm = document.querySelector(".form");

let likebutton = document.querySelector(".element__white_button");

const SaveButton = document.querySelector(".form__submit");

/* mostrar ventana flotante */
function ProfileEdit() {
  VentanaFlotante.setAttribute("style", "display: grid;");
}
InfoEdit.addEventListener("click", ProfileEdit);

/* cerrar ventana flotante */

function CerrarVentana() {
  VentanaFlotante.removeAttribute("style", "display: grid;");
}
ButtonX.addEventListener("click", CerrarVentana);

SaveButton.addEventListener("click", CerrarVentana);

/* CAMBIAR NOMBRE */

function CambiarNombre(event) /* no sube datos */ {
  event.preventDefault();
  NameProfile.textContent = NewNameProfile.value;
  OcupationProfile.textContent = NewOcupationProfile.value;

  NewNameProfile.value = "";
  NewOcupationProfile.value = "";
}
formForm.addEventListener("submit", CambiarNombre);

/* like button */
function Like() {
  likebutton.setAttribute("style", "background-image: url(/images/Union.svg);");
}
likebutton.addEventListener("click", Like);

/* desabilitar botton "trabajando" */

function disabledButton() {
  if (
    NewNameProfile.value.length === 0 &&
    NewOcupationProfile.value.length === 0
  ) {
    SaveButton.setAttribute("disabled", true);
    SaveButton.setAttribute("style", "background-color: grey;");
  } else {
    SaveButton.removeAttribute("disabled");
    SaveButton.setAttribute("style", "background-color: black;");
  }
}
