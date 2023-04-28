import { langs, saveLang, getLang } from './assets/langs.js'; // eslint-disable-line import/extensions
import { shiftSymbols, unshiftSymbols } from './assets/symbols.js'; // eslint-disable-line import/extensions
import setKeyboard from './assets/set-keyboard.js'; // eslint-disable-line import/extensions

let currentLang = getLang();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', setKeyboard());

const keys = document.querySelectorAll('.key');
const allKeys = document.querySelectorAll('[data-key]');
const letterKeys = document.querySelectorAll('.letter');
const symbolKeys = document.querySelectorAll('.symbol');
const digitKeys = document.querySelectorAll('.digit');
const ctrlLeftKey = document.querySelector('#ControlLeft');
const altLeftKey = document.querySelector('#AltLeft');
const shiftKeys = document.querySelectorAll('.shift');
const textarea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');
const span = document.querySelector('.subtitle span');
const clickSound = new Audio('../src/audio/click.mp3');

span.addEventListener('mouseover', () => {
  keys.forEach((el) => {
    const key = el;
    const checkAltCtrl = key.classList.contains('ctrl-left') || key.classList.contains('alt-left');
    if (!checkAltCtrl) {
      key.classList.add('inactive');
    }
  });
  altLeftKey.classList.add('active-info');
  ctrlLeftKey.classList.add('active-info');
});

span.addEventListener('mouseout', () => {
  keys.forEach((el) => {
    const key = el;
    const checkAltCtrl = key.classList.contains('ctrl-left') || key.classList.contains('alt-left');
    if (!checkAltCtrl) {
      key.classList.remove('inactive');
    }
  });
  altLeftKey.classList.remove('active-info');
  ctrlLeftKey.classList.remove('active-info');
});

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

  allKeys.forEach((el) => {
    const elem = el;
    if (isCapslock) {
      elem.textContent = langs[currentLang][elem.dataset.key].toUpperCase();
    } else {
      elem.textContent = langs[currentLang][elem.dataset.key].toLowerCase();
    }
  });
}

function changeLetters() {
  letterKeys.forEach((el) => {
    const letter = el;

    if (isCapslock) {
      letter.textContent = letter.textContent.toLowerCase();
    } else {
      letter.textContent = letter.textContent.toUpperCase();
    }
  });
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

function deleteKeyDel() {
  textareaData = textareaData.substring(0, textarea.selectionStart)
    + textareaData.substring(textarea.selectionEnd + 1);
}

textarea.addEventListener('click', () => {
  cursorPosition = textarea.selectionStart;
});

function updateTextarea() {
  textarea.textContent = textareaData;
  textarea.selectionStart = cursorPosition;
  textarea.focus();
}

function toUpperAndLowerCase(key) {
  if (isCapslock) {
    letterKeys.forEach((el) => {
      const letter = el;
      letter.textContent = letter.textContent.toLowerCase();
    });

    key.classList.remove('active');

    isCapslock = false;
  } else {
    letterKeys.forEach((el) => {
      const letter = el;
      letter.textContent = letter.textContent.toUpperCase();
    });

    key.classList.add('active');

    isCapslock = true;
  }
}

function playSound() {
  const audioClone = clickSound.cloneNode();
  audioClone.play();
}

function determinePressedKey(key) {
  if (key.classList.contains('key') && !key.classList.contains('control-key')) {
    enterText(key.textContent);
    playSound();
  }

  if (key.classList.contains('arrow')) {
    enterText(key.textContent);
    playSound();
  }

  if (key.classList.contains('capslock')) {
    toUpperAndLowerCase(key);
    playSound();
  }

  if (key.classList.contains('enter')) {
    enterText('\n');
    playSound();
  }

  if (key.classList.contains('tab')) {
    enterText('\t');
    playSound();
  }

  if (key.classList.contains('backspace')) {
    backspaceDel();
    playSound();
  }

  if (key.classList.contains('del')) {
    deleteKeyDel();
    playSound();
  }

  updateTextarea();
}

function pressedKey(e) {
  const key = document.querySelector(`#${e.code}`);

  if (key) {
    if (key.classList.contains('key')) {
      e.preventDefault();
    }

    if (key.classList.contains('control-key')) {
      key.classList.add('active');
    }

    key.classList.add('active');

    if (key.classList.contains('shift')) {
      shiftSymbols(currentLang, symbolKeys, digitKeys);
      changeLetters();
    }

    determinePressedKey(key);
    playSound();
  }

  if (ctrlLeftKey.classList.contains('active') && altLeftKey.classList.contains('active')) {
    changeLang();
  }
}

function determineUpKey(key) {
  if (key.classList.contains('shift')) {
    letterKeys.forEach((el) => {
      const letter = el;

      if (!isCapslock) {
        letter.textContent = letter.textContent.toLowerCase();
      } else {
        letter.textContent = letter.textContent.toUpperCase();
      }
    });

    unshiftSymbols(currentLang, symbolKeys, digitKeys);
  }
}

function releaseKey(e) {
  const key = document.querySelector(`#${e.code}`);

  if (key) {
    if (key.classList.contains('control-key') && !key.classList.contains('capslock')) {
      key.classList.remove('active');
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

keyboard.addEventListener('click', keyClicked);
document.addEventListener('keydown', pressedKey);
document.addEventListener('keyup', releaseKey);

shiftKeys.forEach((elem) => elem.addEventListener('mousedown', () => {
  shiftSymbols(currentLang, symbolKeys, digitKeys);
  changeLetters();
}));

shiftKeys.forEach((elem) => elem.addEventListener('mouseup', (e) => {
  const key = e.target;
  determineUpKey(key);
}));

setLangKeyboard();
