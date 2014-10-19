// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var Router = Backbone.Router.extend({
    routes: {
      'Welcome':'Welcome'
    },

    AppView:function(view){
      if (this.currentView){
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();

      $(".page").html(this.currentView.el);
    },

    initialize: function () {
      var Header = require(['Views/header'], function (Header) {
          var header = new Header();
          header.render();
      })

      var Footer = require(['Views/footer'], function (Footer) {
        var footer = new Footer();
        footer.render();
      })

      var SidebarLeft = require(['Views/sidebarLeft'], function (SidebarLeft) {
        var sidebarLeft = new SidebarLeft();
        sidebarLeft.render();
      })

      var SidebarRight = require(['Views/sidebarRight'], function (SidebarRight) {
        var sidebarRight = new SidebarRight();
        sidebarRight.render();
      })
    },

    Welcome: function () {
        var that = this;
        var Login = require(['Views/loginView'], function (Login) {
            var login = new Login();
            that.AppView(login);
        });
    }
  });


  return Router;
 
});


