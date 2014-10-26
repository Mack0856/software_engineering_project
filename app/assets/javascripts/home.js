$( document ).ready(function() {
  var activeScene = 1,
      songs = (function(){$.ajax({
                                  type: "GET",
                                  url: "/songs/songs_json",
                                  statusCode:{
                                    200:function(response){
                                                            return response
                                    }
                           }})
                })()

                
  $('.album_art img').mouseenter(function(){
    var imgSRC = $(this)[0];
    $('#loginAbout').css("background-image","url('"+imgSRC.src+"')");
  })
  $('.album_art img').mouseleave(function(){
    var imgSRC = $(this)[0];
    $('#loginAbout').css("background-image","url('/assets/pic1.jpg')  ");
  })
  

  $("#brandHelloMusic").on('click',function(){
      $('#mainContainer').load( "home/welcome");
  });

  $("#navMusic").on('click',function(){
    $('#mainContainer').load( "home/music" );
  });

  $("#btnLogout").on('click',function(){
    window.location.replace("/");
  });

  $('.right').click(function(){
    if(activeScene == 2){
      
     }
  })

  if($('#stage').length > 0){
    $('#stage').ready(function(){
      $('#home').saucySlider({
        pager: $('.pagers li'),
        nextButton: $('.right'),
        prevButton: $('.left'),scenePoints: [0, 2251, 5000],
        sceneTimes: [1000, 1000, 1000],
        sceneMoved:function(evt){
         activeScene = evt.newScene;
        }});
    });
  }

  var myCirclePlayer = new CirclePlayer("#jquery_jplayer_1",
  {
    mp3: "http://localhost:3000/assets/test.mp3"
  }, {
    cssSelectorAncestor: "#cp_container_1",
    swfPath: "assets",
    supplied: "mp3",
    wmode: "window"
  });
});

    // $("#jquery_jplayer_1").jPlayer("setMedia",{ mp3: 'http://localhost:3000/assets/01_Rock_N__Roll__Will_Take_You_to_the_Mountain_.mp3'}).jPlayer("play"); CHANGE TRACK