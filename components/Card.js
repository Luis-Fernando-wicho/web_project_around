// 1. definir la clase

export default class Card {
  constructor(placeValue, imageValue, idValue, likeValue) {
    this.placeValue = placeValue;
    this.imageValue = imageValue;
    this.idValue = idValue;
    this.likeValue = likeValue;
    //seleccionar el cotenido del template
    this.templatePlace = document
      .querySelector("#placetemplate")
      .content.querySelector(".element");
  }

  //metodo que agrege un lugar (clone)

  //clonamos el template
  cloneTemplate() {
    return this.templatePlace.cloneNode(true);
  }

  //agregamos el lugar
  addPlaceElement() {
    this.place = this.cloneTemplate();
    this.place.querySelector(".element__image").src = this.imageValue;
    this.place.querySelector(".element__image").alt = this.placeValue;
    this.place.querySelector(".element__white_title").textContent =
      this.placeValue;
    this.place.id = this.idValue;
    const likeState = this.place.querySelector(".element__white_button");
    if (this.likeValue) {
      likeState.classList.add("element__white_button-active");
    } else {
      likeState.classList.remove("element__white_button-active");
    }

    return this.place;
  }

  //metodo de eventos (esto se hace con burbujeo)
}
