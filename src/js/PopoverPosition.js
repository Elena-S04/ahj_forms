export default class PopoverPosition {
  // eslint-disable-next-line
    getPosition(popoverElem, buttonElem) {
    const { left, top } = buttonElem.getBoundingClientRect();
    // eslint-disable-next-line
      popoverElem.style.top = `${top - 5 - popoverElem.offsetHeight}px`;
    // eslint-disable-next-line
      popoverElem.style.left = `${left + (buttonElem.offsetWidth / 2) - (popoverElem.offsetWidth / 2)}px`;
  }
}
