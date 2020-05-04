/*
 * Folk Templates (Personal Portofolio)
 * Created by : vavelo
 * Version : 1.0
 */


/* INDEX OF CONTENTS JAVASCRIPT
==================================================
  XX. PRELOADER
  01. NAVIGATION
  02. MOBILE NAVIGATION
  03. PARALLAX BACKGROUND EFFECT
  04. TEXT ROTATE
  05. HOME ARROW DOWN
  06. SMOTH SCROLL
  07. PORTFOLIO FILTER IMAGE
  08. TESTIMONIAL SLIDER
  09. ANIMATION EFFECT  
*/


(function ($) {
	'use strict';

	jQuery(document).ready(function () {


		/* XX. PRELOADER
		==================================================*/

		$(window).on('load', function () {
			$("#status").fadeOut();
			$("#preloader").delay(500).fadeOut("slow");
		});


		/* 01. NAVIGATION
		==================================================*/

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 100) {
				$('#navigation').addClass('nav-bg');
			} else {
				$('#navigation').removeClass('nav-bg');
			}
		});


		/* 02. MOBILE NAVIGATION
		==================================================*/

		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});

		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 195
		});


		/* 03. PARALLAX BACKGROUND EFFECT
		==================================================*/

		var parallax = function () {
			$(window).stellar();
		};

		$(function () {
			parallax();
		});


		/* 04. TEXT ROTATE
		==================================================*/
		$(document).on('ready', function () {
			$('#text-rotator').rotatetext({
				fadeSpeed: 500,
				pauseSpeed: 2000
			});
		});


		/* 05. HOME ARROW DOWN
		==================================================*/

		// var arrowBounce = function () {
		// 	var arrow = $(".arrow");
		// 	if (arrow.hasClass("lift")) {
		// 		arrow.removeClass("lift");
		// 	} else {
		// 		arrow.addClass("lift");
		// 	}
		// };

		// setInterval(arrowBounce, 800);


		/* 06. SMOTH SCROLL
		==================================================*/

		$('a.smoth-scroll').on('click', function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});


		/* 07. PORTFOLIO FILTER IMAGE
		==================================================*/
		$('#port-image').mixItUp();


		/* 08. TESTIMONIAL SLIDER
		==================================================*/

		$('.flexslider').flexslider({
			animation: "fade",
			directionNav: false
		});


		/* 09. ANIMATION EFFECT
		==================================================*/

		AOS.init({
			duration: 1200,
			once: true,
			disable: 'mobile'
		});


		
		
		/* 10 . Rahul Custom code
		=======================================================*/
		
		$('.img-box').hover(function(e){
		if($(window).width() > 768){
			
			
	var img_height = $(this).find("img").height();
	var div_height = $(this).height();
	if(img_height > div_height)
	{
//	alert($(this).find('img').height());
		$(this).find("img").delay(2000).css({"transform":"translateY(-"+(img_height-div_height)+"px)","transition":"all "+Math.round(Math.min((img_height-div_height)*10,10000))+"ms ease-in-out"});

	}
		}
} , function(e){
			if($(window).width() > 768){
			
		
	$(this).find("img").delay(5000).css({"transform":"translateY(0px)","transition":"all 1s ease-in-out"});
			}
});
		
		
		
		

	});

})(jQuery);

$(document).ready(function(e){
	// $('.masonaryGallery').masonry({itemSelector: '.mix',});
});
