import Popover from './Popover';
import PopoverBuilder from './PopoverBuilder';
import PopoverPosition from './PopoverPosition';

const buttonElem = document.querySelector('.btn');

const builder = new PopoverBuilder();
const position = new PopoverPosition();
const newPopover = new Popover(builder, position, buttonElem);

function handler() {
  newPopover.togglePopover();
}

buttonElem.addEventListener('click', handler.bind(Popover));
