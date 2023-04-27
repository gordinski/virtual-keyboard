import {
  langs, saveLang, getLang,
} from './assets/langs.js'; // eslint-disable-line import/extensions
import setKeyboard from './assets/set-keyboard.js'; // eslint-disable-line import/extensions
import { shiftSymbols, unshiftSymbols } from './assets/symbols.js'; // eslint-disable-line import/extensions

let currentLang = getLang();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', setKeyboard());

const keys = document.querySelectorAll('[data-key]');
const letters = document.querySelectorAll('.letter');
const symbols = document.querySelectorAll('.symbol');
const digits = document.querySelectorAll('.digit');

const isCapslock = false;

function setLangKeyboard() {
  keys.forEach((el) => {
    const elem = el;
    elem.textContent = langs[getLang()][elem.dataset.key];
  });
}

function changeLang() {
  if (currentLang === 'ru') {
    currentLang = 'en';
  } else if (currentLang === 'en') {
    currentLang = 'ru';
  }

  saveLang();

  if (isCapslock) {
    keys.forEach((el) => {
      const elem = el;
      elem.textContent = langs[currentLang][elem.dataset.key].toUpperCase();
    });
  } else if (!isCapslock) {
    keys.forEach((el) => {
      const elem = el;
      elem.textContent = langs[currentLang][elem.dataset.key].toLowerCase();
    });
  }
}

function changeLetters() {
  if (isCapslock) {
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

function pressedKey(e) {
  let key;
  if (e.code) {
    key = document.querySelector(`#${e.code}`);
  }

  if (key) {
    if (key.classList.contains('key')) {
      e.preventDefault();
    }

    key.classList.add('active');

    if (key.classList.contains('shift')) {
      shiftSymbols(currentLang, symbols, digits);
      changeLetters();
    }
  }

  if (ctrlLeft.classList.contains('active') && altLeft.classList.contains('active')) {
    changeLang();
  }
  console.log(e.code);
}

document.addEventListener('keydown', pressedKey);
setLangKeyboard();
