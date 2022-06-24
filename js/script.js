let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.header .navbar');

menu.onclick=() => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active')
}