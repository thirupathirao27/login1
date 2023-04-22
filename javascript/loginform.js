var emailid=localStorage.getItem("Phnumoremail");
var pass=localStorage.getItem("pass");
var gen=localStorage.getItem("gender")

function password(){
    var inp=document.querySelectorAll("input")
    var eamilorph=inp[0].value;
    var pass1=inp[1].value;
    var divbacimage= document.getElementById("container");
  
     if(emailid==eamilorph&&pass!=pass1){
        document.getElementById("status").innerHTML="wrong password";
        document.getElementById("status").style.fontSize="50px";
        document.getElementById("status").style.top="-30px";
        document.getElementById("status").style.color="cyan";
        inp[0].style.transform="scale(0)";
        inp[1].style.transform="scale(0)";
        inp[0].style.transition="transform 0.5s";
        inp[1].style.transition="transform 0.5s";
        divbacimage.style.backgroundImage="url('../asset/images/asciiman1.gif')";
        divbacimage.style.backgroundSize="100% 100%";
        divbacimage.style.backgroundRepeat="no-repeat"; 
        setTimeout(bacinptags,4000)
        function bacinptags(){
            inp[0].style.transform="scale(1)";
            inp[1].style.transform="scale(1)";
            inp[0].style.backgroundColor="cyan"
            inp[1].style.backgroundColor="red"
            document.getElementById("status").innerHTML="";
            
        }
   }
   else if(emailid!=eamilorph&&pass==pass1){
    document.getElementById("status").innerHTML="wrong mailOrPassword";
    document.getElementById("status").style.fontSize="30px";
    document.getElementById("status").style.top="-100px";
    document.getElementById("status").style.color="cyan";
    inp[0].style.transform="scale(0)";
    inp[1].style.transform="scale(0)";
    inp[0].style.transition="transform 0.5s";
    inp[1].style.transition="transform 0.5s";
    divbacimage.style.backgroundImage="url('../asset/images/asciiman1.gif')";
    divbacimage.style.backgroundSize="100% 100%";
    divbacimage.style.backgroundRepeat="no-repeat";
    setTimeout(bacinptag,4000)
    function bacinptag(){
        inp[0].style.transform="scale(1)";
        inp[1].style.transform="scale(1)";
        inp[0].style.backgroundColor="red"
        inp[1].style.backgroundColor="cyan"
        document.getElementById("status").innerHTML="";
        
    }
}
else if(emailid!=eamilorph&&pass!=pass1)
{
    document.getElementById("status").innerHTML="wrong mailOrphnum and password"
    document.getElementById("status").style.top="10px";
    document.getElementById("status").style.left="10px";
    document.getElementById("status").style.fontSize="25px";
    inp[0].style.backgroundColor="red"
    inp[1].style.backgroundColor="red"
   divbacimage.style.backgroundImage="url('../asset/images/pngwing.com (4).png')";
   divbacimage.style.backgroundSize="100% 100%";
   divbacimage.style.backgroundRepeat="no-repeat";
   
}
else{
    setTimeout(fun,5000)
    function fun(){
    window.open("./home.html")
    }
    inp[0].style.transform="scale(0)";
    inp[1].style.transform="scale(0)";
    document.getElementById("status").innerHTML="Home page is Loading......";
    document.getElementById("status").style.letterSpacing="2px"
    document.getElementById("status").style.fontSize="50px";
    document.getElementById("status").style.textShadow="5px 5px 5px black";
    document.getElementById("status").style.top="-100px";
    document.getElementById("status").style.left="70px";
    document.getElementById("status").style.color="cyan";
    inp[2].style.type="submit";
    divbacimage.style.backgroundImage="url('../asset/images/childimage.gif')";
    divbacimage.style.backgroundSize="100% 100%";
    divbacimage.style.backgroundRepeat="no-repeat";
    

}

    
}