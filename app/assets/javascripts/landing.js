$(document).ready(function(){

    $("#btnToggleLoginDropDown").on('click', function(e){  

	  e.stopPropagation();
      
      if ( $("#divLoginDropdown").hasClass("open") ) {
        $("#divLoginDropdown").removeClass("open");
      } else {
        $("#divLoginDropdown").addClass("open");
      }

    });

    $("#btnLogin").on('click', function(e){

	  e.stopPropagation();

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
        	alert("Incorrect details");
        }
      }
    })
    });

 })