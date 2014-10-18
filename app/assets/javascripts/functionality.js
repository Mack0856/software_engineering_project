
$(function() {
  // $('.dropdown-toggle').dropdown();

  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });

  $('.bnt.btn-default.sign-in').click(function(e) {
    alert("HOSH!!!");
  });

  $('.sign-in').click(function(e) {
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
        }
      }
    })
  })      
});

