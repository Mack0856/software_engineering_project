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
      ajax_call = $.ajax({
        type: "POST",
        url: "/login",
        data: {
          email: $('#user').val(),
          password: $('#password').val()   
        },
        statusCode: {
          200:function(response){
            window.location = "/home?user_i="+response.id+"";
          },
          401:function(response){
            alert("Incorrect email or password");
          },
          403:function(response){
            alert("Incorrect email or password");
          }
        }
      })
    });
 })