let dataRowe = document.querySelectorAll(".table_rows")
let removIcon = document.querySelectorAll('.remove')

removIcon.forEach(function(icons){
        icons.addEventListener('click',function(){
            this.parentElement.remove()
    }) 
})

let addDataBtn = document.querySelector('.add_user_section')
let addDataModal = document.querySelector('.add_modal_section')
let addCloseModalBtn = document.querySelector('.close_btn')
let header = document.querySelector('.header')
let tableSection = document.querySelector('.table_section')

addDataBtn.addEventListener('click', function(){
    addDataModal.style.opacity = 1
    header.style.filter = 'blur(5px)'
    tableSection.style.filter = 'blur(5px)'
})

addCloseModalBtn.addEventListener('click', function(event){
    event.preventDefault()
    addDataModal.style.opacity = 0    
    header.style.filter = 'blur(0px)'
    tableSection.style.filter = 'blur(0px)'
})