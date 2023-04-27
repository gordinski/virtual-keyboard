import {
  langs, saveLang, getLang,
} from './assets/langs.js'; // eslint-disable-line import/extensions
import setKeyboard from './assets/set-keyboard.js'; // eslint-disable-line import/extensions
import { shiftSymbols, unshiftSymbols } from './assets/symbols.js'; // eslint-disable-line import/extensions

let currentLang = getLang();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', setKeyboard());

const allKeys = document.querySelectorAll('[data-key]');
const letterKeys = document.querySelectorAll('.letter');
const symbolKeys = document.querySelectorAll('.symbol');
const digitKeys = document.querySelectorAll('.digit');
const ctrlLeftKey = document.querySelector('#ControlLeft');
const altLeftKey = document.querySelector('#AltLeft');
const shiftKeys = document.querySelectorAll('.shift');
const textarea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

let isCapslock = false;
let textareaData = '';
let cursorPosition = 0;

function setLangKeyboard() {
  allKeys.forEach((el) => {
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
    allKeys.forEach((el) => {
      const elem = el;
      elem.textContent = langs[currentLang][elem.dataset.key].toUpperCase();
    });
  } else if (!isCapslock) {
    allKeys.forEach((el) => {
      const elem = el;
      elem.textContent = langs[currentLang][elem.dataset.key].toLowerCase();
    });
  }
}

function changeLetters() {
  if (isCapslock) {
    letterKeys.forEach((el) => {
      const letter = el;
      letter.textContent = letter.textContent.toLowerCase();
    });
  } else {
    letterKeys.forEach((el) => {
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

    letterKeys.forEach((e) => {
      const letter = e;
      letter.textContent = letter.textContent.toLowerCase();
    });

    isCapslock = false;
  } else if (!isCapslock) {
    key.classList.add('active');

    letterKeys.forEach((e) => {
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
      shiftSymbols(currentLang, symbolKeys, digitKeys);
      changeLetters();
    }

    determinePressedKey(key);
  }

  if (ctrlLeftKey.classList.contains('active') && altLeftKey.classList.contains('active')) {
    changeLang();
  }
}

function determineUpKey(key) {
  if (key.classList.contains('shift')) {
    if (!isCapslock) {
      letterKeys.forEach((el) => {
        const letter = el;
        letter.textContent = letter.textContent.toLowerCase();
      });
    } else if (isCapslock) {
      letterKeys.forEach((el) => {
        const letter = el;
        letter.textContent = letter.textContent.toUpperCase();
      });
    }

    unshiftSymbols(currentLang, symbolKeys, digitKeys);
  }
}

function releaseKey(e) {
  let key;
  if (e.code) {
    key = document.querySelector(`#${e.code}`);
  } else {
    key = document.querySelector('#ShiftRight');
  }
  if (key) {
    if (key.classList.contains('control-key') && !key.classList.contains('capslock')) {
      key.classList.remove('active-background');
    }
    if (!key.classList.contains('capslock')) {
      key.classList.remove('active');
    }
    determineUpKey(key);
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
document.addEventListener('keydown', releaseKey);

shiftKeys.forEach((elem) => elem.addEventListener('mousedown', () => {
  shiftSymbols(currentLang, symbolKeys, digitKeys);
  changeLetters();
}));

shiftKeys.forEach((elem) => elem.addEventListener('mouseup', (e) => {
  const key = e.target;
  determineUpKey(key);
}));

setLangKeyboard();
