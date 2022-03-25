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