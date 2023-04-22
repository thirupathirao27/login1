function titlemove(){
    var cardiv=document.querySelector("#firstlayout")
    var  text=document.getElementById("heading2")
    cardiv.style.transform="translateX(100px)"
    cardiv.style.transition="transform 2s"
    text.style.transform="translateY(5px)"
    text.style.filter="opacity(1)"
    text.style.transition="transform 2s,filter 3s"
    
 
 }
 