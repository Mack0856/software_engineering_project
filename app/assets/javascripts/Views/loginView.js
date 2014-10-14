// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Login/loginTemplate.html'
], function($, _, Backbone, LoginTemplate){

  var Login = Backbone.View.extend({
    
    el: $('#pageContent'),

    render: function(){
      var data = {};
      var compiledTemplate = _.template( LoginTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });

  return Login;
});