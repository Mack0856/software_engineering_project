// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 	'Library/Jquery/jquery-1.11.1.min',
    underscore: 'Library/Underscore/underscore',
    backbone: 	'Library/Backbone/backbone',
    saucySlider:'Library/SaucySlider/saucySlider'
  },
   shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    saucySlider: {
      deps: ["jquery"]
    }
  }
});

require([
  'app',
], function(App){
  App.initialize();
});