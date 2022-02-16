const addCartToast = document.querySelector("#add-to-cart-toast");
const cartText = document.querySelector("#cart-toast-text");
const msgToast = document.querySelector("#send-msg-toast");
const removeToast = document.querySelector("#remove-toast");
const msgText = document.querySelector("#msg-toast-text");
const removeText = document.querySelector("#remove-toast-text");

addCartToast.addEventListener('click' , function clickHandler(){
     cartText.style.visibility = "visible"
    setTimeout(() => {
      
        cartText.style.visibility = "hidden";
    },1000)
})

msgToast.addEventListener('click', function msgHandler(){
   msgText.style.visibility = "visible";
   setTimeout(() => {
    msgText.style.visibility = "hidden";
   }, 1000);

})

removeToast.addEventListener('click', function removeHandler(){
    removeText.style.visibility = "visible";
    setTimeout(() => {
        removeText.style.visibility = "hidden";
    }, 1000);
})