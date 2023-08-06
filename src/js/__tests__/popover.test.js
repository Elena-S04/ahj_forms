/**
* @jest-environment jsdom
* @jest-enveroment-options { "url": "https://jestjs.io/"}
*/

import Popover from '../Popover';
import PopoverBuilder from '../PopoverBuilder';
import PopoverPosition from '../PopoverPosition';

test('popover show', () => {
  document.body.insertAdjacentHTML('afterbegin', `<form class="form">
  <div>
      <input type="text" class="form-input" placeholder="Введите текст..." required>
  </div>
  <div>
      <button type="button" class="btn">Нажмите, чтобы увидеть всплывающее окно</button>
  </div>
</form>`);

  const buttonElem = document.querySelector('.btn');

  const builder = new PopoverBuilder();
  const position = new PopoverPosition();
  const newPopover = new Popover(builder, position, buttonElem);

  function handler() {
    newPopover.togglePopover();
  }

  buttonElem.addEventListener('click', handler.bind(Popover));
  buttonElem.click();

  const popoverElem = document.querySelector('.popover-elem');
  expect(popoverElem).toBeTruthy();
});
