// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'saucySlider',
  //'bigVideo',
  'text!templates/Login/loginTemplate.html'
], function($, _, Backbone , saucySlider , LoginTemplate){

  var Login = Backbone.View.extend({
    
    el: $('#pageContent'),

    initialize:function(){
      var data = {};
      var compiledTemplate = _.template( LoginTemplate, data );
      this.$el.append( compiledTemplate );

    },

    render: function(){
     
      $('#pageContent').saucySlider({
                    pager: $('.pagers li'),
                    nextButton: $('.next'),
                    prevButton: $('.prev'),
                    scenePoints: [0, 2500, 5000],
                    sceneTimes: [1000, 1000, 1000]
                  //  sceneNames: ['First', 'Second', 'Third']
                  });

   //     var BV = new $.BigVideo();
   //     BV.init();
   //     BV.show('http://vjs.zencdn.net/v/oceans.mp4');
    }

  });

  return Login;
});