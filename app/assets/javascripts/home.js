$( document ).ready(function() {
  if($('#stage').length > 0){
    $('#stage').ready(function(){
        $('#home').saucySlider({
                        pager: $('.pagers li'),
                        nextButton: $('.right'),
                        prevButton: $('.left'),
                        scenePoints: [0, 2500, 5000],
                        sceneTimes: [1000, 1000, 1000]
                      //  sceneNames: ['First', 'Second', 'Third']
                      });
    });
}
});

