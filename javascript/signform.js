function storeinformfromUser(){
    var inp=document.querySelectorAll("input")
    var sel=document.querySelectorAll("select")
    var fname=inp[0].value;
    var lname=inp[1].value;
    var phnumOrMail=inp[2].value;
    var pass=inp[3].value;
    var dd=sel[0].value;
    var mon=sel[1].value;
    var yy=sel[2].value;
   window.localStorage.setItem("Fname",fname);
   window.localStorage.setItem("Lname",lname);
   window.localStorage.setItem("date",dd);
   window.localStorage.setItem("month",mon);
   window.localStorage.setItem("Year",yy);
   window.sessionStorage.setItem("Phnumoremail",phnumOrMail);
   window.sessionStorage.setItem("pass",pass);
   window.localStorage.setItem("Phnumoremail",phnumOrMail);
   window.localStorage.setItem("pass",pass);
//    window.open("home.html");
}
function gender(a){
    localStorage.setItem("gender",a);
}