define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){
  
  var Footer = Backbone.View.extend({
  
    el: $('#footer'),
    render: function(){
      var data = {};
      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });
  return Footer;
});