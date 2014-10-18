// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Sidebar/SidebarLeftTemplate.html'
], function($, _, Backbone, sidebarLeftTemplate){

  var SidebarLeft = Backbone.View.extend({
    
    el: $('#sidebarLeft'),

    render: function(){
      var data = {};
      var compiledTemplate = _.template( sidebarLeftTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });

  return SidebarLeft;
});