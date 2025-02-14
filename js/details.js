let decreaseBtn = document.querySelector('.decrease')
let numberOf = document.querySelector('.number')
let increaseBtn = document.querySelector('.increase')
let number = 1

increaseBtn.addEventListener('click',increaseBtnHandler)
decreaseBtn.addEventListener('click',decreaseBtnHandler)

function increaseBtnHandler(){
    number++
    numberOf.innerHTML = number
}

function decreaseBtnHandler(){
    if(number < 2){
        number = 2
    }

    number--
    numberOf.innerHTML = number
}
