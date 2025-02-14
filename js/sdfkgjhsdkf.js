let dataRowe = document.querySelectorAll(".table_rows")
let removeIcon = document.querySelectorAll('.remove')
let flag = true

let questionIcon = document.querySelector('.question_icon_section')
let questionSection = document.querySelector('.question_section')

removeIcon.forEach(function(icons){
    icons.addEventListener('click',function(){
        if(flag){
            this.parentElement.remove()
        }
    }) 
})

let addDataBtn = document.querySelector('.add_user_section')
let addDataModal = document.querySelector('.add_modal_section')
let addCloseModalBtn = document.querySelectorAll('.close_btn')
let header = document.querySelector('.header')
let tableSection = document.querySelector('.table_section')

addDataBtn.addEventListener('click', function(){
    if(flag){
        addDataModal.style.display = "flex"
    
        header.classList.toggle('blur')
        tableSection.classList.toggle('blur')
        questionIcon.classList.toggle('blur')
        
        flag = false
    }
})

addCloseModalBtn.forEach(function(close){
    close.addEventListener('click', function(event){
        event.preventDefault()
        if(!flag){
            addDataModal.style.display = "none"
            editModal.style.display = "none"
            questionSection.classList.remove('showQuestionModal')
            
            header.classList.toggle('blur')
            tableSection.classList.toggle('blur')
            questionIcon.classList.toggle('blur')

            flag = true
        }
    })
})


let editBtn = document.querySelectorAll('.edit')
let editModal =document.querySelector('.edit_modal_section')

editBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(flag){
            editModal.style.display = "flex"
            
            header.classList.toggle('blur')
            tableSection.classList.toggle('blur')
            questionIcon.classList.toggle('blur')
            
            flag = false
        }
    })
})


let menuBtn = document.querySelector('.menu_icon_section')
let menu = document.querySelector('.menu_section')

menuBtn.addEventListener('click', function(){
    if(flag){
        menu.classList.toggle('hidden') 
    }
})

questionIcon.addEventListener('click', function(){ 
    if(flag){
        questionSection.classList.toggle('showQuestionModal')
        header.classList.toggle('blur')
        tableSection.classList.toggle('blur')
        questionIcon.classList.toggle('blur')

        flag = false
    }   
})