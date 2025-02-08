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
    setTimeout(function(){
        addDataModal.style.opacity = 1
    })
    addDataModal.style.display = "flex"
    header.style.filter = 'blur(5px)'
    tableSection.style.filter = 'blur(5px)'
})

addCloseModalBtn.forEach(function(close){
    close.addEventListener('click', function(event){
        event.preventDefault()
        addDataModal.style.opacity = 0    
        editModal.style.opacity = 0    
        setTimeout(function(){
            addDataModal.style.display = "none"
            editModal.style.display = "none"
        },200)
        header.style.filter = 'blur(0px)'
        tableSection.style.filter = 'blur(0px)'
    })
})


let editBtn = document.querySelectorAll('.edit')
let editModal =document.querySelector('.edit_modal_section')

editBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        editModal.style.display = "flex"
        setTimeout(function(){
            editModal.style.opacity = 1
        })
        header.style.filter = 'blur(5px)'
        tableSection.style.filter = 'blur(5px)'
    })
})


let menuBtn = document.querySelector('.menu_icon_section')
let menu = document.querySelector('.menu_section')

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('hidden')
})