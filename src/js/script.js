import {
  langs, saveLang, getLang, switchLang
} from './assets/langs.js'; // eslint-disable-line import/extensions
import setKeyboard from './assets/set-keyboard.js'; // eslint-disable-line import/extensions

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', setKeyboard());
const keys = document.querySelectorAll('[data-key]');
const letters = document.querySelectorAll('.letter');
const isCapslock = false;

function setLangKeyboard() {
  keys.forEach((el) => {
    const elem = el;
    elem.textContent = langs[getLang()][elem.dataset.key];
  });
}

function changeKeyWithCapslock() {
  if (!isCapslock) {
    letters.forEach((el) => {
      const letter = el;
      letter.textContent = letter.textContent.toLowerCase();
    });
  } else {
    letters.forEach((el) => {
      const letter = el;
      letter.textContent = letter.textContent.toUpperCase();
    });
  }
}

setLangKeyboard();
changeKeyWithCapslock();
