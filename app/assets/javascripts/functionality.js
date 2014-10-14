
  // $('.dropdown-toggle').dropdown();

  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });

  $('.bnt.btn-default.sign-in').click(function(e) {
    alert("HOSH!!!");
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        email: $('#user').val(),
        password: $('#password').val()
      }
    })
  })      
