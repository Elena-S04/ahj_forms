export default class Popover {
  constructor(builder, position, buttonElem) {
    this.builder = builder;
    this.position = position;
    this.buttonElem = buttonElem;
    this.popoverElem = this.builder.build();
    this.show = false;
  }

  togglePopover() {
    if (!this.show) {
      document.body.appendChild(this.popoverElem);
      this.position.getPosition(this.popoverElem, this.buttonElem);
      this.show = true;
    } else {
      this.popoverElem.remove();
      this.show = false;
    }
  }
}
