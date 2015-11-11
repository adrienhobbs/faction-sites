/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(6);

	var shareButtons = __webpack_require__(2);
	var slider = __webpack_require__(4);
	var signup = __webpack_require__(3);
	var tychoMessage = 'THANK YOU FOR YOUR INTEREST IN TYCHO MANUFACTURING AND ENGINEERING CONCERN';

	$(document).ready(function(){
	  var leftArrow = '<div class="left-arrow left-triangle"></div>';
	  var rightArrow = '<div class="right-arrow right-triangle"></div>';
	  signup.init(tychoMessage);
	  slider.init(leftArrow, rightArrow);
	  shareButtons.init();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var mcrn = {
	  title: 'Mars Congressional Republic Navy',
	  url: 'http://mcrnavy.com',
	  fbAppId: 833629210068065,
	  twitter: 'testing-twitter yeaaaah',
	  teaserVideo: 'http://player.vimeo.com/video/144638503',
	  desc: 'Tycho was the leading corporation to expand from Earth to the Belt. Today, Tycho Station is the #1 one source of skilled labor in the Belt.',
	  enlistCopy: 'REGISTER YOUR EMAIL FOR FUTURE ENLISTMENT OPPORTUNITIES_',
	  copy: 'The MCRN is the most advanced fleet in the known galaxy. We serve the 9+ billion great minds that live and work on Mars. It is these people who built the Donnager, our flagship vessel currently residing within our Jupiter fleet. Some say it’s a quarter million tons of bad news. To see if you belong in our elite ranks, register below.'
	};

	var tycho = {
	  title: 'Tycho Manufacturing and Engineering Concern',
	  shortTitle: 'tycho',
	  url: 'http://tychomanufacturing.com',
	  twitter: 'testing tycho twitter',
	  fbAppId: 797292537045870,
	  teaserVideo: 'http://player.vimeo.com/video/144638503',
	  desc: 'Tycho was the leading corporation to expand from Earth to the Belt. Today, Tycho Station is the #1 one source of skilled labor in the Belt.',
	  enlistCopy: 'Register Your Email For Future Career Opportunities',
	  copy: 'Tycho was one of the first major corporations to expand from Earth into the Belt. Our towering team is responsible for successfully spinning Ceres and Eros to make them inhabitable. Through our work, we support all skilled laborers residing in The Belt and beyond. If you think you’ve got the experience to join us, register below.'
	};


	var shs = {
	  title: 'Star Helix Security',
	  shortTitle: 'shs',
	  url: 'http://www.starhelixsecurity.com',
	  twitter: 'yeaaah start helix',
	  fbAppId: 512830328880469, 
	  teaserVideo: 'http://player.vimeo.com/video/144638503',
	  desc: 'Star Helix Security is an Earth-based private security company that holds contracts to police Ceres and other Belt colonies.',
	  enlistCopy: 'REGISTER YOUR EMAIL FOR FUTURE EMPLOYMENT OPPORTUNITIES',
	  copy: 'Star Helix Security is proud to protect the people of Ceres and all Belt colonies. Our Earth-based private security firm upholds the law to the highest standards. We trust all Belters to do the same and make Ceres a safe and pleasant place to live. If you hold the same integrity, register below.'
	};

	var opa = {
	  title: 'Outer Planets Alliance',
	  shortTitle: 'opa',
	  url: 'http://outerplanetsalliance.com',
	  twitter: 'yeah outer!',
	  fbAppId: 914232981959945, 
	  teaserVideo: 'http://player.vimeo.com/video/144638503',
	  enlistCopy: 'Register Your Email For Future Advocacy Opportunities',
	  desc: 'We are a social movement fighting for the rights of Belters. In hostile space, the aid and goodwill of your fellow humans isn’t optional.',
	  copy: 'The Outer Planets Alliance is a social movement fighting for the rights of all Belters. Our members are tenacious and resilient in the face of hardship. In an environment such as space, the aid and goodwill of your fellow humans isn’t optional. We have a voice. Join our movement below.'
	};

	var un = {
	  title: 'United Nations',
	  shortTitle: 'un',
	  url: 'http://unitednationsearth.com',
	  twitter: "Insert United Nations Twitter Message Here",
	  fbAppId: 959256630808779,
	  teaserVideo: 'http://player.vimeo.com/video/144638503',
	  enlistCopy: 'REGISTER YOUR EMAIL FOR FUTURE CAREER OPPORTUNITIES',
	  desc: 'The United Nations is the unified governing body of Earth and Luna, representing a combined 31 Billion people.',
	  copy: "The United Nations serves 31 billion people on Earth and Luna. As the solar system's oldest governing body, we take pride in our longevity, our open skies, and the Basic Assistance program that provides the necessary daily resources to 40% of our citizens. Furthermore, our assets and interests in the solar system are protected by its largest fleet. To learn about career opportunities at the United Nations, please register below."
	};

	var factions = {
	  mcrn: mcrn,
	  tycho: tycho,
	  shs: shs,
	  opa: opa,
	  un: un
	};

	var getInfo = {

	  title: function (faction) {
	    return factions[faction].title;
	  },

	  url: function (faction) {
	    return factions[faction].url;
	  },

	  twitter: function (faction) {
	    return factions[faction].twitter;
	  },

	  desc: function (faction) {
	    return factions[faction].desc;
	  },

	  copy: function (faction) {
	    return factions[faction].copy;
	  },

	  enlistCopy: function(faction) {
	    return factions[faction].enlistCopy;
	  },
	  
	  shortTitle: function (faction) {
	    return factions[faction].shortTitle;
	  },

	  teaserVideo: function(faction) {
	    return factions[faction].teaserVideo;
	  },

	  fbAppId: function (faction) {
	    return factions[faction].fbAppId;
	  }

	};

	module.exports = getInfo;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var getInfo = __webpack_require__(1);


	var shareButtons = {
	  setupFB: function () {
	    window.fbAsyncInit = function () {
	      FB.init({
	        appId: getInfo.fbAppId(window.faction),
	        status: true,
	        xfbml : true
	      });
	    };
	  },

	  shareToFacebook: function () {
	    FB.ui({
	      method: 'share',
	      name: 'testing',
	      href: getInfo.url(window.faction)
	    });
	  },

	  shareToTwitter: function () {
	    var width = 575;
	    var height = 400,
	        left = ($(window).width() - width) / 2,
	        top  = ($(window).height() - height) /2;
	    var url = "https://twitter.com/intent/tweet?text=" + escape(getInfo.twitter(window.faction)) + '&url=' + escape(getInfo.url(window.faction));

	    var options = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
	    window.open(url, 'twitter', options);

	    return false;
	  },

	  getButtons: function () {
	    this.shareButtons =  $('.share-button');
	    return this.shareButtons;
	  },
	  
	  toggleHoverState: function () {
	    $(this).toggleClass('active');
	  },

	  setButtonListeners: function  () {
	    $.each(this.getButtons(), function(button, i) {
	      $(this).on('hover', shareButtons.toggleHoverState.bind(this));
	    });
	    $('.facebook.share-button').click(this.shareToFacebook.bind(this));
	    $('.twitter.share-button').click(this.shareToTwitter.bind(this));
	  },
	  
	  init: function () {
	    this.setupFB();
	    this.setButtonListeners();
	  }
	};


	module.exports = shareButtons;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Signup = {
	  setHeaders: function () {
	    $.ajaxSetup({
	       headers: { 'X-CSRF-Token' : $('meta[name=_token]').attr('content') }
	    });  
	  },
	  resetForm: function () {
	     $('.email_input_form').val("");
	     $('.main_text').text(this.msg);    
	     $('#agree').attr('checked', false); 
	  },
	  listenForClick: function () {
	   $('.submit-right').click(function(){            
	    $.ajax({
	      url: '/post',
	      type: "post",
	      data: {'email':$('input[name=email_form]').val(), '_token': $('input[name=_token]').val(), 'agree': $('input:checkbox:checked').val()},
	      success: function(data){
	       Signup.resetForm();
	      },
	      error: function(xhr, status, data){
	              alert_text = "";
	              //console.log(xhr.responseJSON.errors);
	              if (xhr.responseJSON.errors.email){
	                      console.log("invalid email");
	                      alert_text += "-Please enter a valid email address\n";
	              }

	              if (xhr.responseJSON.errors.agree){
	                      console.log("must agree");
	                      alert_text += "-You must accept the privacy policy";
	              }
	              alert(alert_text);
	              //console.log("well:" + xhr.responseJSON.errors.agree);
	          }
	      });      
	    }); 
	  },
	  init: function (msg) {
	    this.msg = msg;
	    this.setHeaders();
	    this.listenForClick();
	  }
	};


	module.exports = Signup;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Slider = {
	  initTopSlider: function () {
	    this.$carouselSliderEl.slick({
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false,
	      infinite: true,
	      adaptiveHeight: true,
	      ease: 'ease-in-out',
	      responsive: [
	        {
	          breakpoint: 991,
	          settings: {
	            infinite: true,
	            asNavFor: null,
	            dots: true,
	            arrows: false,
	            drag: true
	          }
	        }
	      ]
	    });
	  }, 
	  
	  changeTopSlide: function () {
	    var current = this.$carouselNavEl.slick('slickCurrentSlide');
	    this.$carouselSliderEl.slick('slickGoTo', current, true);
	  },

	  initBottomSlider: function () {
	    var leftArrow  = this.leftArrow;
	    var rightArrow = this.rightArrow;

	    this.$carouselNavEl.slick({
	      centerMode: false,
	      slidesToShow: 4,
	      infinite: true,
	      slidesToScroll: 1,
	      arrows: true,
	      nextArrow: rightArrow,
	      prevArrow: leftArrow,
	      focusOnSelect: true
	    });

	    var $slides = this.$carouselNavEl.find('img.slick-slide');
	    $slides.on('click', this.changeTopSlide.bind(this)); 
	  },
	  init: function (leftArrow, rightArrow) {
	    this.$carouselNavEl = $(".carousel-nav");
	    this.$carouselSliderEl = $(".carousel-slider");
	    if (leftArrow) {
	      this.leftArrow = leftArrow;
	      this.rightArrow = rightArrow;
	    } else {
	      this.rightArrow = '<img class="right-arrow" src="https://s3.amazonaws.com/6wgr99ds11/images/mcrn/right-arrow.png" />';
	      this.leftArrow = '<img class="left-arrow" src="https://s3.amazonaws.com/6wgr99ds11/images/mcrn/left-arrow.png" />';
	    }
	    this.initTopSlider();
	    this.initBottomSlider();
	  }

	};

	module.exports = Slider;


/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
5
/******/ ])));