let inputs = document.querySelectorAll('.code_input')
const form = document.querySelector(".code_inputs_container");

inputs[0].focus();

const isAllInputFilled = () => {
  return Array.from(inputs).every((item) => item.value);
};

const getOtpText = () => {
  return Array.from(inputs)
    .map((input) => input.value)
    .join("");
};

const verifyOTP = () => {
  if (isAllInputFilled()) {
    const text = getOtpText();
    alert(`Your OTP is "${text}". OTP is correct`);
  }
};

const toggleFilledClass = (field) => {
  if (field.value) {
    field.classList.add("border");
  } else {
    field.classList.remove("border");
  }
};

form.addEventListener("input", (e) => {
  const target = e.target;
  const value = target.value;

  if (!/^\d$/.test(value)) {
    target.value = ""; 
    return;
  }

  toggleFilledClass(target);

  if (target.nextElementSibling && value) {
    target.nextElementSibling.focus();
  }

  if (isAllInputFilled()) {
    verifyOTP();
  }
});

inputs.forEach((input, currentIndex) => {
  toggleFilledClass(input);

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const text = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, inputs.length - currentIndex);

    inputs.forEach((item, index) => {
      if (index >= currentIndex && text[index - currentIndex]) {
        item.focus();
        item.value = text[index - currentIndex];
        toggleFilledClass(item);
      }
    });

    if (isAllInputFilled()) {
      verifyOTP(); 
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      input.value = "";
      toggleFilledClass(input);
      if (input.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    }
  });

  input.addEventListener("input", () => {
    if (input.value.length > 1) {
      input.value = input.value.slice(-1); 
    }
  });
});


let time = document.querySelector('.time_span')
let timerText = document.querySelector('.timer_text')
let sendAgainText = document.querySelector('.send_again_text')

timerHandler()

function timerHandler(){
    let minutes = 2
    let seconds = "0"
    let timer = setInterval(function(){

        
        if(seconds == 0){
            minutes--
            seconds = 60
        }
        
        seconds--
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        if(minutes == 0 && seconds == 0){
            clearInterval(timer)
            timerText.style.display = 'none'
            sendAgainText.style.display = 'flex'
        }
    
        time.innerHTML = `${minutes}:${seconds}`
        },1000)
}

sendAgainText.addEventListener('click', function(){
    time.innerHTML = "2:00"
    timerText.style.display = 'inline'
    sendAgainText.style.display = 'none'
    timerHandler()
})

let button = document.querySelector('.btn')


button.addEventListener('click', function(event){
  event.preventDefault()
})