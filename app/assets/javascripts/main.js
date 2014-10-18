// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 	'Library/Jquery/jquery-1.11.1.min',
    saucySlider:'Library/SaucySlider/saucySlider'
  },
   shim: {
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