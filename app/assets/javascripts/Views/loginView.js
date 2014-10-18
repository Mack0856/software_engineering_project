(function(){

  var Login = Backbone.View.extend({
    
    el: $('#pageContent'),

    render: function(){
      var data = {};
      var compiledTemplate = _.template( LoginTemplate, data );
      this.$el.append( compiledTemplate );
    }

  });

  return Login;
})()