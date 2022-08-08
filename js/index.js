const navbar = document.querySelector('.navbar');
const play = document.getElementById('playbtn');
const detail = document.querySelector('.body2');
const movie =document.querySelector('.good');
const close = document.querySelector('.close');
const maindiv = document.querySelector('.body1');

window.onscroll = function () {
    let top = window.scrollY;
    if(top > 0){
        navbar = navbar.classList.add('active')
    }else {
        navbar = navbar.classList.remove('active')
    }
}


movie.addEventListener("click", function() {
    detail.classList.add('active');
    maindiv.classList.add('active');
})

close.addEventListener("click", function() {
    detail.classList.remove('active');
    maindiv.classList.remove('active');
})
