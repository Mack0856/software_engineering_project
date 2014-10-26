
songsObj = {
songs : ""
}


$( document ).ready(function() {
  var activeScene = 1;
  var songs = $.ajax({type: "GET",url: "/api/songs"});
  $.when(songs).done(function(songs){
    var self                = this;
        html                = " ",
        recentlyAdded_html  = " ",
        mostplayed_html     = " ";
        songsObj.songs = songs;

    $.each(songs,function(index,value){
      
      html += '<ul><li data-songid="'+value.id+'">'
                    +'<div class="album_art">'
                    +   '<img src="/assets/'+value.art_filename+'" data-file="'+value.filename+'" data-id="'+value.id+'"/>'
                    +'</div>'
                  +'</li>'
                  +'<li>'
                    +'<div class="album_info">'
                      +'<ol>'
                        +  '<li><label>Track Name: '+value.title+'</label></li>'
                        +  '<li><label>Artist: '+value.artist+'</label></li>'
                        +  '<li><label>Album: '+value.albumn+'</label></li>'
                        +  '<li><label>Year: '+value.year+'</label></li>'
                      +'</ol>'
                   +'</div>'
                 +'</li>'
                +'<li>'
              +'<div class="album_options">'
              +  '<a target="_blank" href="/songs/download/'+value.id+'" > Download </a>'
             + '</div>'
            +'</li></ul>';



    })
      $('#lib_results').append(html);
  })

  $('body').on('mouseenter','.album_art img',function(){
    var imgSRC = $(this)[0];
    $('#loginAbout').css("background-image","url('"+imgSRC.src+"')");
  })


  $('body').on('click','.album_art img' ,function(){
   var song_play = '/assets/' + $(this).data("file");
     $("#jquery_jplayer_1").jPlayer("setMedia",{ mp3: song_play }).jPlayer("play");
     $.ajax({type: "GET", url: "songs/update_listens/"+$(this).data("id")}) 
  })

  $('body').on('mouseleave','.album_art img',function(){
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
    window.location.replace("/logout");
  });

  $("#btnNavAdmin").on('click',function(){
    window.location.replace("/songs");
  });


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


  $('body').on('keyup','input[name="searchBar"]',function(){
    var inputText     = ($("input[name='searchBar']").val()).toLowerCase(),
        title_check   = $("input[name='title_check']:checked").length,
        artist_check  = $("input[name='artist_check']:checked").length,
        album_check   = $("input[name='album_check']:checked").length,
        html          = "",
        self = this,
        songs = songsObj.songs;

        $('#lib_results').empty();
        if($(inputText.length > 0)){
          $.each(songs,function(index,value){
            value.title =  (value.title).toLowerCase();
            value.artist = (value.artist).toLowerCase();
            value.albumn = (value.albumn).toLowerCase(); 

            value.found = 0;
            if(title_check  > 0){
                if(((value.title).indexOf(inputText)) > -1){
               
                  html += '<ul><li data-songid="'+value.id+'">'
                                      +'<div class="album_art">'
                                      +   '<img src="/assets/'+value.art_filename+'" data-file="'+value.filename+'" data-id="'+value.id+'"/>'
                                      +'</div>'
                                    +'</li>'
                                    +'<li>'
                                      +'<div class="album_info">'
                                        +'<ol>'
                                          +  '<li><label>Track Name: '+value.title+'</label></li>'
                                          +  '<li><label>Artist: '+value.artist+'</label></li>'
                                          +  '<li><label>Album: '+value.albumn+'</label></li>'
                                          +  '<li><label>Year: '+value.year+'</label></li>'
                                        +'</ol>'
                                     +'</div>'
                                   +'</li>'
                                  +'<li>'
                                +'<div class="album_options">'
                                +  '<a target="_blank" href="/songs/download/'+value.id+'" > Download </a>'
                               + '</div>'
                              +'</li></ul>';
                                 value.found = 1;
                }
            }
            if(artist_check > 0 && value.found !== 1){
            if(((value.artist).indexOf(inputText)) > -1){
               value.found = 1;
                  html += '<ul><li data-songid="'+value.id+'">'
                                      +'<div class="album_art">'
                                      +   '<img src="/assets/'+value.art_filename+'" data-file="'+value.filename+'" data-id="'+value.id+'"/>'
                                      +'</div>'
                                    +'</li>'
                                    +'<li>'
                                      +'<div class="album_info">'
                                        +'<ol>'
                                          +  '<li><label>Track Name: '+value.title+'</label></li>'
                                          +  '<li><label>Artist: '+value.artist+'</label></li>'
                                          +  '<li><label>Album: '+value.albumn+'</label></li>'
                                          +  '<li><label>Year: '+value.year+'</label></li>'
                                        +'</ol>'
                                     +'</div>'
                                   +'</li>'
                                  +'<li>'
                                +'<div class="album_options">'
                                +  '<a target="_blank" href="/songs/download/'+value.id+'" > Download </a>'
                               + '</div>'
                              +'</li></ul>';
                }
            }
            if(album_check  > 0 && value.found !== 1){
                if(((value.albumn).indexOf(inputText)) > -1){
                  value.found = 1;
                  html += '<ul><li data-songid="'+value.id+'">'
                                      +'<div class="album_art">'
                                      +   '<img src="/assets/'+value.art_filename+'" data-file="'+value.filename+'" data-id="'+value.id+'"/>'
                                      +'</div>'
                                    +'</li>'
                                    +'<li>'
                                      +'<div class="album_info">'
                                        +'<ol>'
                                          +  '<li><label>Track Name: '+value.title+'</label></li>'
                                          +  '<li><label>Artist: '+value.artist+'</label></li>'
                                          +  '<li><label>Album: '+value.albumn+'</label></li>'
                                          +  '<li><label>Year: '+value.year+'</label></li>'
                                        +'</ol>'
                                     +'</div>'
                                   +'</li>'
                                  +'<li>'
                                +'<div class="album_options">'
                                +  '<a target="_blank" href="/songs/download/'+value.id+'" > Download </a>'
                               + '</div>'
                              +'</li></ul>';
                }
            }
           })
          $('#lib_results').append(html);
        }else{
          $('#lib_results').append("No Results");
        }
  })

  

});

    // CHANGE TRACK