let $ = document
let choosBoxes = $.querySelectorAll('.choose_box')
let divForHide = $.querySelectorAll('.hidden')
let btnSlc = $.querySelector('.back_btn_parrent')
let startChooseBox = $.querySelector('.start')
let divForShow = ""
let divId = ""
let i = 0


btnSlc.style.display = "none"

choosBoxes.forEach(function(box){
    box.addEventListener('click', function(event){
        btnSlc.style.display = "none"
        
        divForHide.forEach(function(div){            
            div.style.display = "none"
        })
        
        divId = event.target.id
        divForShow = $.getElementsByClassName(divId)
        
        setTimeout(function(){
            divForShow[0].style.display = "inline"
            btnSlc.style.display = "flex"
        },200)
        
    })
})

btnSlc.addEventListener('click', function(){
    divForHide.forEach(function(div){            
        div.style.display = "none"
    })
    
    startChooseBox.style.display = "inline"
    btnSlc.style.display = "none"
})


    


