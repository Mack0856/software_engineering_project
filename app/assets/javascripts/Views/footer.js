(function(){
  
  var Footer = Backbone.View.extend({
  
    el: $('#footer'),
    render: function(){
      var data = {};
      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });

  
})()