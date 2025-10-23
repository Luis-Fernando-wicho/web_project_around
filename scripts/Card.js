// 1. definir la clase

export class Card {
  constructor(placeValue, imageValue) {
    this.placeValue = placeValue;
    this.imageValue = imageValue;
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
  addPlace() {
    this.place = cloneTemplate();
    this.place.querySelector(".element__image").src = this.imageValue;
    this.place.querySelector(".element__image").alt = this.placeValue;
    this.place.querySelector(".element__white_title").textContent =
      this.placeValue;

    return this.place;
  }

  //metodo de eventos (esto se hace con burbujeo)
}

// 2. instanciar clase

// 3. utilizar clase
