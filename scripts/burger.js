document.getElementById('header-burger').onclick = function() {
    document.getElementById('header-burger').classList.toggle('active');
    document.getElementById('heaer-content-nav').classList.toggle('active');
    document.getElementById('body').classList.toggle('lock');
    if (document.getElementById('header-burger').classList.contains('active')) {
        document.getElementById('main').style = 'opacity: 0.3; transition-duration: 0.3s;';
    } else {
        document.getElementById('main').style = 'opacity: 1; transition-duration: 0.3s;';
    };
  };

function burgerCls() {
    document.getElementById('header-burger').classList.remove('active');
    document.getElementById('heaer-content-nav').classList.remove('active');
    document.getElementById('body').classList.remove('lock');
    document.getElementById('main').style = 'opacity: 1; transition-duration: 0.3s;';
}

let cls = document.querySelectorAll('.nav-link')
    for (let i=0; i < cls.length; i++) {
        cls[i].onclick = () => {
            burgerCls();
        };
    }

