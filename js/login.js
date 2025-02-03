let inputphone = document.getElementById('phone')
let inputPassword = document.getElementById('password')
let phoneLabel = document.querySelector('.phone_label')
let passwordLabel = document.querySelector('.password_label')


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
