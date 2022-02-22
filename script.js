const leftbar = document.querySelector("#left-bar")
const leftdrawicon = document.querySelector("#left-drawer-icon")
const maincontent = document.querySelector(".main")

leftdrawicon.addEventListener('click', function (){
    leftbar.style.visibility == "visible" ?  leftbar.style.visibility ="hidden" :  leftbar.style.visibility = "visible";
    
})

