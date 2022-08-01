let brightSwitch = document.querySelector('.light-theme');

let darkSwitch = document.querySelector('.dark');

function switching (theme) {
    document.querySelector('body').classList.toggle('light');

    document.querySelector('.heaer-content-nav').classList.toggle('light');

    document.querySelector('.header-burger').classList.toggle('light');

    document.querySelector('.wrapper').classList.toggle('light');

    document.querySelector('.contacts').classList.toggle('light');

    document.querySelector('.apparat').classList.toggle('light');

    document.querySelector('.main-hero').classList.toggle('light');

    document.querySelector('.main-hero-intro-button').classList.toggle('light');

    document.querySelector('.main-contact-form-name').classList.toggle('light');

    document.querySelector('.main-contact-form-button').classList.toggle('light');

    document.querySelector('.footer').classList.toggle('light');

    document.querySelector('.footer-content-info').classList.toggle('light');

    document.querySelector('.footer-content-rss').classList.toggle('light');

    document.querySelector('.light-theme').classList.toggle('light');

    document.querySelector('.dark').classList.toggle('light');

    document.querySelector('.peepeepoopoo-portfolio').classList.toggle('light');

    document.querySelector('.header-content-language-switch-ru').classList.toggle('light');

    document.querySelector('.header-content-language-switch-en').classList.toggle('light');

    let nav = document.querySelectorAll('.nav-link');
    for (let i=0; i < nav.length; i++) {
        nav[i].classList.toggle('light')
    };

    let poopoo = document.querySelectorAll('.peepeepoopoo');
    for (let i=0; i < poopoo.length; i++) {
        poopoo[i].classList.toggle('light')
    };

    let holder = document.querySelectorAll('.main-skills-nameholder');
    for (let i=0; i < holder.length; i++) {
        holder[i].classList.toggle('light')
    };

    let title = document.querySelectorAll('.main-skills-title');
    for (let i=0; i < title.length; i++) {
        title[i].classList.toggle('light')
    };

    
    let button = document.querySelectorAll('.main-portfolio-buttons-item');
    for (let i=0; i < button.length; i++) {
        button[i].classList.toggle('light')
    };

    let form = document.querySelectorAll('.contact-form');
    for (let i=0; i < form.length; i++) {
        form[i].classList.toggle('light')
    };

    let soc = document.querySelectorAll('.footer-soc');
    for (let i=0; i < soc.length; i++) {
        soc[i].classList.toggle('light')
    };
}

let theme = 'light'

brightSwitch.onclick = function () {
    theme = 'light';
    localStorage.setItem('theme', 'light');
    switching()
};

darkSwitch.onclick = function () {
    theme = 'dark'
    localStorage.setItem('theme', 'dark');
    switching()
};
 
function getLocalStorage() {
    if(localStorage.getItem('theme') == 'light') {
      switching()
    } 
  }
  window.addEventListener('DOMContentLoaded', getLocalStorage)