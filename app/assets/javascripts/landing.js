$(document).ready(function(event){

	  event.stopPropagation();

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

// 	if($('#landing_video').length>0){
// 		var defaults = {
// 		            // If you want to use a single mp4 source, set as true
// 		            useFlashForFirefox:true,
// 		            // If you are doing a playlist, the video won't play the first time
// 		            // on a touchscreen unless the play event is attached to a user click
// 		            forceAutoplay:true,
// 		            controls:false,
// 		            doLoop:true,
// 		            container:$('#landing_video'), //Container
// 		            shrinkable:false
// 		        };


// 		  var BV = new $.BigVideo(defaults);
// 		    BV.init();
// 		    setTimeout(BV.show([
// 		        { type: "video/webm",  src: "./assets/landing_vid.webm"}
// 		    ],{ambient:true}),function(){
// 		    	$('#big-video-vid_html5_api').ready(function(){

// 					$('#big-video-vid_html5_api').css('display','none');
// 		    		$('#big-video-vid_html5_api').attr('loop');
		    		
// 		    	})
		    	
// 		    },0)
// 	}



 })