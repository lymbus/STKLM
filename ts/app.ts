'use strict'
const menu= ( document.querySelector('.header__nav') as HTMLElement )
const barra= ( document.querySelector('.header__fas') as HTMLElement)
const lista=document.querySelectorAll<HTMLElement>('.header__li')
const submenu= document.querySelectorAll<HTMLElement>('.header__submenu')

barra.addEventListener('click',() : void =>{
menu.classList.toggle('abrir')})

lista.forEach((li,i):void =>{
    lista[i].addEventListener('click',()=>{
        submenu.forEach((sub,i):void =>{
            submenu[i].classList.remove('abrir2')
        })
    submenu[i].classList.add('abrir2')
    })
})



