//validation.js

function form(){
    // alert("hello");
    var vname=document.getElementById("iname").value;
    var vemail=document.getElementById("iemail").value;
    var vphone=document.getElementById("iphone").value;
   // +8801772-355789
    var phonepatten=/(\+88)?01[3-9]\d{2}-?\d{2}/;
    var namepatten=/^[a-zA-Z.]$/;
    var emailpatten=/(cse|eee|law)_\d{10,17}@lus\.ac\.bd/;
 
 //phone validation
 if(!vphone.match(phonepatten)){
        alert("invalid number");
        document.getElementById("phn").innerHTML="invalid number";
        return false;
     }
        else{
         alert("welcome");
     }
 
 
    //email validation
    if(!vemail.match(emailpatten)){
     alert("invalid email");
    }
    else{
     alert("welcome");
    }
 
    //name validation
    if(vname.length<2 || vname.length>30){
     alert("invalid name");
    }
    else if(!vname.match(namepatten)){
     alert("not matched");
    }
   else{
     alert("welcome");
   }
 
 }