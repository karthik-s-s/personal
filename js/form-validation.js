$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            first_name:{
                required:true,

            },email:{
                required:true,
                email:true

            }
          
        }

    })

})




$(document).ready(function(){
    // set initially button state hidden
    $("#btn").hide();
    // use keyup event on email field
    $("#email").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#email").css("border","2px solid green");
            // and set label 
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Un-validated</p>");
        }
        buttonState();
    });

});


function validateEmail(){
    // get value of input email
    var email=$("#email").val();
    // use reular expression
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}
