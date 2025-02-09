let dataRowe = document.querySelectorAll(".table_rows")
let removeIcon = document.querySelectorAll('.remove')

removeIcon.forEach(function(icons){
        icons.addEventListener('click',function(){
            this.parentElement.remove()
    }) 
})


let addDataBtn = document.querySelector('.add_user_section')
let addDataModal = document.querySelector('.add_modal_section')
let addCloseModalBtn = document.querySelectorAll('.close_btn')
let header = document.querySelector('.header')
let tableSection = document.querySelector('.table_section')

addDataBtn.addEventListener('click', function(){
    addDataModal.style.display = "flex"

    header.classList.toggle('blur')
    tableSection.classList.toggle('blur')
})

addCloseModalBtn.forEach(function(close){
    close.addEventListener('click', function(event){
        event.preventDefault()

        addDataModal.style.display = "none"
        editModal.style.display = "none"

        header.classList.toggle('blur')
        tableSection.classList.toggle('blur')
    })
})


let editBtn = document.querySelectorAll('.edit')
let editModal =document.querySelector('.edit_modal_section')

editBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        editModal.style.display = "flex"

        header.classList.toggle('blur')
        tableSection.classList.toggle('blur')
    })
})


let menuBtn = document.querySelector('.menu_icon_section')
let menu = document.querySelector('.menu_section')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('hidden')
})

let questionIcon = document.querySelector('.question_icon_section')
let questionSection = document.querySelector('.question_section')

questionIcon.addEventListener('click', function(){    
    questionSection.classList.toggle('showQuestionModal')
    header.classList.toggle('blur')
    tableSection.classList.toggle('blur')
})