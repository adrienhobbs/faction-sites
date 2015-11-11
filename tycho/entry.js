require('../styles/app.scss');
require('../styles/factions/tycho/tycho.scss');

var shareButtons = require('../js/share-buttons.js');
var slider = require('../js/slider.js');
var signup = require('../js/signup.js');
var tychoMessage = 'THANK YOU FOR YOUR INTEREST IN TYCHO MANUFACTURING AND ENGINEERING CONCERN';

$(document).ready(function(){
  var leftArrow = '<div class="left-arrow left-triangle"></div>';
  var rightArrow = '<div class="right-arrow right-triangle"></div>';
  signup.init(tychoMessage);
  slider.init(leftArrow, rightArrow);
  shareButtons.init();
});
