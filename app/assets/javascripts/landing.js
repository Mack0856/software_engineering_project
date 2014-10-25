$(document).ready(function(){

	    $("#btnToggleLoginDropDown").on('click', function(){  
      
      if ( $("#divLoginDropdown").hasClass("open") ) {
        $("#divLoginDropdown").removeClass("open");
      } else {
        $("#divLoginDropdown").addClass("open");
      }

    });

    $("#btnLogin").on('click', function(){

      $.ajax({
      type: "POST",
      url: "/login",
      data: {
        email: $('#user').val(),
        password: $('#password').val()   
      },
      statusCode: {
        200: function(status){
          window.location = '/home'
        },          
        401: function(){
        	alert(401);
        }
      }
    })
    });

 })