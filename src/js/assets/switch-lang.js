import getLang from './get-lang';

let flagShift = false;
let flagAlt = false;

export default function switchLang(word) {
  if (word === 'shift') {
    flagShift = true;
  } else if (word === 'alt') {
    flagAlt = true;
  } else if (flagAlt && flagShift) {
    flagAlt = false;
    flagShift = false;

    getLang();
  }
}
