export default class Section {
  constructor(items, renderer) {
    this.items = items; //obtenemos cards 0,1,2...
    this.renderer = renderer;
  }

  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }
}
