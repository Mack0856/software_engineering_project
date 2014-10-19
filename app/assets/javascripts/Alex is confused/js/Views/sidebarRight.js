// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Sidebar/SidebarRightTemplate.html'
], function($, _, Backbone, SidebarRightTemplate){

  var SidebarRight = Backbone.View.extend({
    
    el: $('#sidebarRight'),

    render: function(){
      var data = {};
      var compiledTemplate = _.template( SidebarRightTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });

  return SidebarRight;
});