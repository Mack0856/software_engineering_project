$( document ).ready(function() {
  var activeScene = 1;

  var songs = $.ajax({type: "GET",url: "/api/songs"})
  $.when(songs).done(function(songs){
    var html = "";
    $.each(songs,function(index,value){
      html += '<li data-songid="'+value.id+'">'
                    +'<div class="album_art">'
                    +   '<img src="'+value.art.url+'" />'
                    +'</div>'
                  +'</li>'
                  +'<li>'
                    +'<div class="album_info">'
                      +'<ol>'
                        +  '<li><label>Track Name: '+value.title+'</label></li>'
                        +  '<li><label>Artist: '+value.artist+'</label></li>'
                        +  '<li><label>Album: '+value.album+'</label></li>'
                        +  '<li><label>Year: '+value.year+'</label></li>'
                      +'</ol>'
                   +'</div>'
                 +'</li>'
                +'<li>'
              +'<div class="album_options">'
              +  '<a href="#" > Download </a>'
              +  '<input type="hidden" value="'+value.file.url+'"/>'
             + '</div>'
            +'</li>';
    })
      $('#lib_results ul').append(html);

  })              
  $('.album_art img').mouseenter(function(){
    var imgSRC = $(this)[0];
    $('#loginAbout').css("background-image","url('"+imgSRC.src+"')");
  })

$('.album_art img').click(function(){
     console.log(this)
    $("#jquery_jplayer_1").jPlayer("setMedia",{ mp3: }).jPlayer("play"); 
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

    // CHANGE TRACK