let inputName = document.getElementById('name')
let inputphone = document.getElementById('phone')
let inputPassword = document.getElementById('password')
let nameLabel = document.querySelector('.name_label')
let phoneLabel = document.querySelector('.phone_label')
let passwordLabel = document.querySelector('.password_label')

let button = document.querySelector('.btn')

inputName.addEventListener('change', function(){
    if (inputName.value){
        nameLabel.classList.add('nameInputTrue')
    }
    else(
        nameLabel.classList.remove('nameInputTrue')
    )
})

inputphone.addEventListener('change', function(){
    if (inputphone.value){
        phoneLabel.classList.add('phoneInputTrue')
    }
    else(
        phoneLabel.classList.remove('phoneInputTrue')
    )
})

inputPassword.addEventListener('change', function(){
    if (inputPassword.value){
        passwordLabel.classList.add('passwordInputTrue')
    }
    else(
        passwordLabel.classList.remove('passwordInputTrue')
    )
})



button.addEventListener('click', function(event){
    event.preventDefault()
})