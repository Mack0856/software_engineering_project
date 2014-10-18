(function(){
  var Header = Backbone.View.extend({

    events:{
      'mouseenter #loginHeader':'headerHover',
      'mouseleave #loginHeader' :'headerHide'
    },
  
    el: $('#header'),

    render: function(){
      var data = {};
      var compiledTemplate = _.template( headerTemplate, data );
      this.$el.append( compiledTemplate );
    },

    headerHover: function () {
      
        $("#loginHeader").animate({
            height:"80px"
        }, 500, function () {
            alert('animation complete')
        })
    },

    headerHide:function(){
        $("#loginHeader").animate({
            height: "10px"
        }, 500, function () {
            alert('animation complete')
        })

    }


  });
return Header;
  })()
