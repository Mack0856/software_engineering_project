// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'saucySlider'
], function($, _, Backbone, Router){
  var initialize = function(){
    router = new Router();
     Backbone.history.start();
  }

  return {
    initialize: initialize
  };
});