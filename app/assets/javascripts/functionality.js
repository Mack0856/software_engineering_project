<<<<<<< HEAD

=======
$(function() {
>>>>>>> 68096dfee283ce83764664ca673b3b839796ddc8
  // $('.dropdown-toggle').dropdown();

  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });

<<<<<<< HEAD
  $('.bnt.btn-default.sign-in').click(function(e) {
    alert("HOSH!!!");
=======
  $('.sign-in').click(function(e) {
>>>>>>> 68096dfee283ce83764664ca673b3b839796ddc8
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        email: $('#user').val(),
        password: $('#password').val()
<<<<<<< HEAD
      }
    })
  })      
=======
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
>>>>>>> 68096dfee283ce83764664ca673b3b839796ddc8
