let winterBtn = document.querySelector('.portfolio-winter');
let img = document.querySelectorAll('.main-portfolio-photos-item');

function winterSwitch () {
    for(let i = 0; i < img.length; i++) {
        img[i].src = 'images/img/winter/' + [i+1] + '.jpg'
    }
}
winterBtn.onclick = winterSwitch 

let springBtn = document.querySelector('.portfolio-spring');
function springSwitch () {
    for(let i = 0; i < img.length; i++) {
        img[i].src = 'images/img/spring/' + [i+1] + '.jpg'
    }
}
springBtn.onclick = springSwitch 

let summerBtn = document.querySelector('.portfolio-summer');
function summerSwitch () {
    for(let i = 0; i < img.length; i++) {
        img[i].src = 'images/img/summer/' + [i+1] + '.jpg'
    }
}
summerBtn.onclick = summerSwitch 

let autumnBtn = document.querySelector('.portfolio-autumn');
function autumnSwitch () {
    for(let i = 0; i < img.length; i++) {
        img[i].src = 'images/img/autumn/' + [i+1] + '.jpg'
    }
}
autumnBtn.onclick = autumnSwitch 

