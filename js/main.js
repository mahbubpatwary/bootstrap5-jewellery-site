

// active navbar

let nav = document.querySelector('.navigation-wrap');

window.onscroll = function (params) {
    
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on');
    }


}



// nav hide 

let navLink = document.querySelectorAll('.nav-item');
let navbar = document.querySelector('.navbar-collapse');


navLink.forEach(el => {
    el.addEventListener('click', function (params) {
        navbar.classList.remove('show')
    })
    
});

















