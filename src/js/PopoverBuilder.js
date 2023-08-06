export default class PopoverBuilder {
  // eslint-disable-next-line
    build() {
    const popoverElem = document.createElement('div');
    popoverElem.classList.add('popover-elem');
    popoverElem.innerHTML = `
        <div class="popover-title">
          <span>Наименование всплывающего окна</span>
        </div>
        <div class="popover-text">
          <span>Здесь может быть несколько удивительных материалов......</span>
        </div>
      `;
    return popoverElem;
  }
}
