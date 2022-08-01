const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standart': 'Standart',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'premium': 'Premium',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'gold': 'Gold',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standart': 'Стандарт',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'premium': 'Премиум',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'gold': 'Золотой',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }




  let lang = 'en'

  let rulang = document.querySelector('.header-content-language-switch-ru');
  let enlang = document.querySelector('.header-content-language-switch-en');

  function getString(lang, key) {
    if (i18Obj[lang].hasOwnProperty(key)) {
        return i18Obj[lang][key];
    } else {
        return key;
    }
  }  

  function getTranslate(language) {
    let getContent = document.querySelectorAll('[data-i18n]');
    for (let i = 0; i < getContent.length; i++) {
      getContent[i].textContent = getString(language, getContent[i].dataset.i18n)
    }
    lang = language
  }

  function setLocalStorage() {
    localStorage.setItem('lang', lang);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
      document.documentElement.lang = localStorage.getItem('lang')
    }
  }
  window.addEventListener('DOMContentLoaded', getLocalStorage)


  let enToggler = 'active'
  let ruToggler = 'none'
  
  rulang.onclick = function () {
    if (document.documentElement.lang == 'en') {
      getTranslate('ru');
      document.documentElement.lang = 'ru';
      rulang.classList.add('active');
      enlang.classList.remove('active');
      localStorage.setItem('ru-toggler', 'active')
      localStorage.setItem('en-toggler', 'none')
    } 
  }

  enlang.onclick = function () {
    if (document.documentElement.lang == 'ru') {
      getTranslate('en');
      document.documentElement.lang = 'en';
      rulang.classList.remove('active');
      enlang.classList.add('active');
      localStorage.setItem('en-toggler', 'active')
      localStorage.setItem('ru-toggler', 'none')
    } 
  }

  function getToggler () {
     if (localStorage.getItem('ru-toggler') == 'active') {
      rulang.classList.add('active');
      enlang.classList.remove('active');
    } else if (localStorage.getItem('en-toggler') == 'active') {
      enlang.classList.add('active');
      rulang.classList.remove('active')
    }
  }
  window.addEventListener('DOMContentLoaded', getToggler())
  

  