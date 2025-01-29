let hamburgaryIcon = document.querySelector('.hamburgary_icon_container')
let closeIcon = document.querySelector('.close_icon_container')
let menu = document.querySelector('.menu_container')

hamburgaryIcon.addEventListener('click', menuShowHandler)
hamburgaryIcon.addEventListener("touch", menuShowHandler)
closeIcon.addEventListener('click', menuHideHandler)
closeIcon.addEventListener('touch', menuHideHandler)

function menuShowHandler(){
    menu.style.right = 0
}

function menuHideHandler(){
    menu.style.right = '-14rem'
}