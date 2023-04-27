const langs = {
  en: {
    backquote: '`',
    q: 'q',
    w: 'w',
    e: 'e',
    r: 'r',
    t: 't',
    y: 'y',
    u: 'u',
    i: 'i',
    o: 'o',
    p: 'p',
    '[': '[',
    ']': ']',
    a: 'a',
    s: 's',
    d: 'd',
    f: 'f',
    g: 'g',
    h: 'h',
    j: 'j',
    k: 'k',
    l: 'l',
    ';': ';',
    quotes: '\'',
    z: 'z',
    x: 'x',
    c: 'c',
    v: 'v',
    b: 'b',
    n: 'n',
    m: 'm',
    comma: ',',
    period: '.',
    slash: '/',
  },
  ru: {
    backquote: 'ё',
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    quotes: 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    comma: 'б',
    period: 'ю',
    slash: '.',
  },
};

function getLang() {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
  }
  return localStorage.getItem('lang');
}

function saveLang() {
  const currentLang = getLang() || 'en';

  if (currentLang === 'en') {
    localStorage.setItem('lang', 'ru');
  } else {
    localStorage.setItem('lang', 'en');
  }

  return getLang();
}

function switchLang(word) {
  let flagShift = false;
  let flagAlt = false;

  if (word === 'shift') {
    flagShift = true;
  } else if (word === 'alt') {
    flagAlt = true;
  } else if (flagAlt && flagShift) {
    flagAlt = false;
    flagShift = false;

    saveLang();
  }
}

export {
  langs, saveLang, getLang, switchLang,
};
