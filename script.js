/* boton para editar */
const InfoEdit = document.querySelector(".profile__info__edit");
console.log(InfoEdit);
const VentanaFlotante = document.querySelector(".popup__container");
console.log(VentanaFlotante);

let NewNameProfile = document.querySelector(".form__input__name");
let NewOcupationProfile = document.querySelector(".form__input__ocupation");

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

const ButtonX = document.querySelector(".x");

function CerrarVentana() {
  VentanaFlotante.removeAttribute("style", "display: grid;");
}

ButtonX.addEventListener("click", CerrarVentana);

/* CAMBIAR NOMBRE */
let formForm = document.querySelector(".form__dates");

function CambiarNombre(event) {
  event.preventDefault();
  let NameProfile = document.querySelector(".profile__info__name");
  let OcupationProfile = document.querySelector(".profile__info__ocupation");

  NameProfile.textContent = NewNameProfile.value;
  OcupationProfile.textContent = NewOcupationProfile.value;
}

formForm.addEventListener("submit", CambiarNombre);

/* like button */
let likebutton = document.querySelector(".elements__element__white__button");

function cerrarLike() {
  likebutton.setAttribute("style", "background-image: url(/images/Union.svg);");
}

likebutton.addEventListener("click", cerrarLike);
