/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function sendMail(){
    var params = {
        name:document.getElementById("name").Value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    const serviceID = "service_tw4p6e8" ;
   const templateID = "template_2x2grrc" ;

   emailjs.send(serviceID,templateID,params)
   .then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully");
    }
   )
   .catch((err) => console.log(err));
}

   
