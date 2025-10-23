export { openDialogProfile, openDialogPlaces, dialogProfile, dialogPlaces };

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
