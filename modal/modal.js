const modalBtn = document.querySelector("#modal-btn")
const modalContent = document.querySelector("#modal-content")
const yesBtn = document.querySelector("#modal-yes-btn")
const noBtn = document.querySelector("#modal-no-btn")
modalBtn.addEventListener('click', function clickHandler(){
      modalContent.style.visibility = "visible";
})
yesBtn.addEventListener('click', function closeHandler(){
     modalContent.style.visibility="hidden";
})
noBtn.addEventListener('click', function closeHandler(){
    modalContent.style.visibility="hidden";
})