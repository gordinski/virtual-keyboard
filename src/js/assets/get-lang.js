export default function getLang() {
  const lang = localStorage.getItem('lang');

  if (lang === 'eng') {
    localStorage.setItem('lang', 'rus');
  } else {
    localStorage.setItem('lang', 'en');
  }

  return localStorage.getItem('lang');
}
