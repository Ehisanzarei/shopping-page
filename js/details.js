let adToBasketBtn = document.querySelector('.add_to_basket_btn')
let btnText = document.querySelector('.btn_text')
let btnLoadingImg = document.querySelector('.btn_loading_img')

let decreaseBtn = document.querySelector('.decrease')
let numberOf = document.querySelector('.number')
let numberLoadingImg = document.querySelector('.number_loading_img')
let increaseBtn = document.querySelector('.increase')
let removeIcon = document.querySelector('.remove_icon')


decreaseBtn.addEventListener('click',showLodingIconAndRemove)
decreaseBtn.addEventListener('touch',showLodingIconAndRemove)
increaseBtn.addEventListener('click',showLodingIcon)
increaseBtn.addEventListener('touch',showLodingIcon)

function showLodingIcon(){
    numberLoadingImg.style.display = "inline"
    numberOf.style.display = "none"
    removeIcon.style.display = "none"
    decreaseBtn.style.display = "inline"
}

function showLodingIconAndRemove(){
    numberLoadingImg.style.display = "inline"
    numberOf.style.display = "none"
    removeIcon.style.display = "inline"
    decreaseBtn.style.display = "none"
}

adToBasketBtn.addEventListener('click', function(){
    btnText.style.display = "none"
    btnLoadingImg.style.display = "inline"
})

// increaseBtn.addEventListener('click',increaseBtnHandler)
// decreaseBtn.addEventListener('click',decreaseBtnHandler)

// function increaseBtnHandler(){
//     number++
//     numberOf.innerHTML = number
// }

// function decreaseBtnHandler(){
//     if(number < 2){
//         number = 2
//     }

//     number--
//     numberOf.innerHTML = number
// }
