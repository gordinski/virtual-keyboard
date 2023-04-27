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
const ctrlLeft = document.querySelector('#ControlLeft');
const altLeft = document.querySelector('#AltLeft');
const textarea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

let isCapslock = false;
let textareaData = '';
let cursorPosition = 0;

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

function enterText(text) {
  textareaData = textareaData.substring(0, cursorPosition)
    + text
    + textareaData.substring(cursorPosition);

  cursorPosition += text.length;
}

function backspaceDel() {
  if (cursorPosition > 0) {
    textareaData = textareaData.substring(0, textarea.selectionStart - 1)
      + textareaData.substring(textarea.selectionEnd);

    cursorPosition -= 1;
  }
}

function delDel() {
  textareaData = textareaText.substring(0, textarea.selectionStart)
  + textareaData.substring(textarea.selectionEnd + 1);
}

function updateTextarea() {
  textarea.textContent = textareaData;
  textarea.selectionStart = cursorPosition;
  textarea.focus();
}

function toUpperAndLowerCase(key) {
  if (isCapslock) {
    key.classList.remove('active');

    letters.forEach((e) => {
      const letter = e;
      letter.textContent = letter.textContent.toLowerCase();
    });

    isCapslock = false;
  } else if (!isCapslock) {
    key.classList.add('active');

    letters.forEach((e) => {
      const letter = e;
      letter.textContent = letter.textContent.toUpperCase();
    });

    isCapslock = true;
  }
}

function determinePressedKey(key) {
  if (key.classList.contains('key') && !key.classList.contains('control-key')) {
    enterText(key.textContent);
  }

  if (key.classList.contains('arrow')) {
    enterText(key.textContent);
  }

  if (key.classList.contains('capslock')) {
    toUpperAndLowerCase(key);
  }

  if (key.classList.contains('enter')) {
    enterText('\n');
  }

  if (key.classList.contains('tab')) {
    enterText('\t');
  }

  if (key.classList.contains('backspace')) {
    backspaceDel();
  }

  if (key.classList.contains('del')) {
    delDel();
  }

  updateTextarea();
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

    determinePressedKey(key);
  }

  if (ctrlLeft.classList.contains('active') && altLeft.classList.contains('active')) {
    changeLang();
  }
}

function keyClicked(e) {
  const key = e.target;
  determinePressedKey(key);
}

textarea.addEventListener('click', () => {
  cursorPosition = textarea.selectionStart;
});

keyboard.addEventListener('click', keyClicked);
document.addEventListener('keydown', pressedKey);
setLangKeyboard();
