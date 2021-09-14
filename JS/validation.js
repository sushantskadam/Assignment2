function valid(){
    
    debugger;
 
     var name = document.getElementById("name").value
     var mobile = document.getElementById("mobile").value
     var mail = document.getElementById("mailid").value
     var texta = document.getElementById("feedback").value
     var vname = /^[a-zA-Z ]{2,100}$/;
     var vmobile= /^[6-9][0-9]{9}$/;
     var vmail= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
     var vtexta = /^[a-zA-Z ]{20,200}$/;
     var flag = "true";
     if(!(vname.test(name))){
         document.getElementById("idsubmit").style.display = "none";
         document.getElementById("idname").style.display = "block";
         document.getElementById("idname").innerHTML = "Enter Valid Name"; 
         flag = "false";
     }
     else{
         document.getElementById("idname").style.display = "none";
         // document.getElementById("idname").disabled = "true";
     }
     if(!(vmobile.test(mobile))){
         document.getElementById("idsubmit").style.display = "none";
         document.getElementById("idmobile").style.display = "block";
         document.getElementById("idmobile").innerHTML = "Enter Valid Mobile No";
         flag = "false";
     }else{
         document.getElementById("idmobile").style.display = "none";
     }
     if(!(vmail.test(mail))){
         document.getElementById("idsubmit").style.display = "none";
         document.getElementById("idmail").style.display = "block";
         document.getElementById("idmail").innerHTML = "Enter Valid Email Id";
         flag = "false";
     }else{
         document.getElementById("idmail").style.display = "none";
     }
     if(!(vtexta.test(texta))){
         document.getElementById("idsubmit").style.display = "none";
         document.getElementById("idfeedback").style.display = "block";
         document.getElementById("idfeedback").innerHTML = "Enter Feedback within range 20-200";  
         flag = "false"; 
     }else{
         document.getElementById("idfeedback").style.display = "none";
     }
     if(flag === "true")
     {   
         document.getElementById("name").value = "";
         document.getElementById("mobile").value = "";
         document.getElementById("mailid").value = "";
         document.getElementById("feedback").value = "";
         document.getElementById("idsubmit").style.display = "block";
         document.getElementById("idsubmit").innerHTML = "Form Submitted. "+name+" Thank You For Your Feedback ";
     }
 }
 
 function submitt(){
    document.getElementById("idsubmit").style.display = "none";
}
 