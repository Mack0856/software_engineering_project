$( document ).ready(function() {
  
  $("#brandHelloMusic").on('click',function(){
      $('#mainContainer').load( "home/welcome" );
    });

    $("#navMusic").on('click',function(){

      $('#mainContainer').load( "home/music" );

    });

    $("#btnLogout").on('click',function(){
      window.location.replace("/");
    });

    //$('#mainContainer').load( "home/welcome" );


  if($('#stage').length > 0){
    $('#stage').ready(function(){
      $('#home').saucySlider({pager: $('.pagers li'),nextButton: $('.right'),prevButton: $('.left'),scenePoints: [0, 2251, 5000],sceneTimes: [1000, 1000, 1000]});
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

   //  $("#jquery_jplayer_1").jPlayer("setMedia",{ mp3: 'http://localhost:3000/assets/test.mp3'}).jPlayer("play"); CHANGE TRACK