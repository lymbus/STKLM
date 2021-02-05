'use strict';
var menu = document.querySelector('.header__nav');
var barra = document.querySelector('.header__fas');
var lista = document.querySelectorAll('.header__li');
var submenu = document.querySelectorAll('.header__submenu');
barra.addEventListener('click', function () {
    menu.classList.toggle('abrir');
});
lista.forEach(function (li, i) {
    lista[i].addEventListener('click', function () {
        submenu.forEach(function (sub, i) {
            submenu[i].classList.remove('abrir2');
        });
        submenu[i].classList.add('abrir2');
    });
});
