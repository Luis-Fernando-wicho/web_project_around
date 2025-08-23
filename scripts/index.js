/* boton para editar */
const InfoEdit = document.querySelector(".profile__info_edit");
console.log(InfoEdit);
const VentanaFlotante = document.querySelector(".popup");
console.log(VentanaFlotante);

let NewNameProfile = document.querySelector(".form__label_name");
let NewOcupationProfile = document.querySelector(".form__label_ocupationn");

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

function ProfileEdit() {
  VentanaFlotante.setAttribute("style", "display: grid;");

  disabledButton();
}

InfoEdit.addEventListener("click", ProfileEdit);

const SaveButton = document.querySelector(".form__submit");
console.log(SaveButton);

/* boton cerrar */

const ButtonX = document.querySelector(".popup__x");

function CerrarVentana() {
  VentanaFlotante.removeAttribute("style", "display: grid;");
}

ButtonX.addEventListener("click", CerrarVentana);

/* CAMBIAR NOMBRE */
let formForm = document.querySelector(".form");

function CambiarNombre(event) {
  event.preventDefault();
  let NameProfile = document.querySelector(".profile__info_name");
  let OcupationProfile = document.querySelector(".profile__info_ocupation");

  NameProfile.textContent = NewNameProfile.value;
  OcupationProfile.textContent = NewOcupationProfile.value;
}

formForm.addEventListener("submit", CambiarNombre);

/* like button */
let likebutton = document.querySelector(".element__white_button");

function cerrarLike() {
  likebutton.setAttribute("style", "background-image: url(/images/Union.svg);");
}

likebutton.addEventListener("click", cerrarLike);
