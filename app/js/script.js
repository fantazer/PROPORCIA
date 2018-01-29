$(document).ready(function(){


	//animate order-form
	$('.form-toggle__control').click(function(){
		$(this).toggleClass('form-toggle--active');
		$('.form-toggle__self').toggleClass("form-toggle__active")
		$('.form-toggle__deliver').toggleClass("form-toggle__active")
		$('.form-deliver').slideToggle();
	});
	//animate order-form===end

	// menu animation

		//scroll menu
		var cartScroll = $('.cart-drop__list').perfectScrollbar();
		//scroll menu===end

		$('.cart-drop__close').click(function(){

			$(this).closest('.cart-drop__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.cart-drop__el').remove()
					if($('.cart-drop__list').find(".cart-drop__el").size() < 1){
						$('.cart-drop__wrap--full').removeClass('cart-drop__wrap--show');
						$('.cart-drop__wrap--empty').addClass('cart-drop__wrap--show');
						cartScroll.perfectScrollbar('update');
					}
				});

		});

		$('.pay-drop__close').click(function(){
			$(this).closest('.pay-drop__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.pay-drop__el').remove();

			});
		});

		$('.pay-row__close').click(function(){
			$(this).closest('.pay-row__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.pay-row__el').remove();

			});
		});

		
		//toggle menu list
		$('.header-nav__menu--desct').click(function(event){
			event.stopPropagation();
			$('.header-nav__drop').toggleClass('header-nav__drop--show');
			$('.header-nav__drop').slideDown();
			$('.cart-drop').removeClass('cart-drop--show');
		});
		$('.header-nav__drop').on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$('.header-nav__drop').removeClass('header-nav__drop--show');
		});
		//toggle menu list===end

		//toggle cart
		$('.header-nav__cart').click(function(event){
			event.stopPropagation();
			cartScroll.perfectScrollbar('update');
			$('.cart-drop').toggleClass('cart-drop--show');
				$('.header-nav__drop').removeClass('header-nav__drop--show');
		});
		$('.cart-drop').on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$('.cart-drop').removeClass('cart-drop--show');
				$('body').removeClass('close-body');
		});
		if($(window).width()<=640){
			$('.header-nav__cart').click(function(){
				$('body').toggleClass('close-body');
			})
		}
		//toggle cart===end

	// menu animation === end

	// Tabs
	var initTab = function(el){
		$(el+' .tab-head').click(function(){
		var currentTab = $(this).index();
			$(el+' .tab-head').removeClass('tab-head--active');
			$(this).addClass('tab-head--active');
			$(el+' .tab-cont').each(function(){
				console.log($(this).index());
				if($(this).index()==currentTab){
					$(this).addClass('tab-cont--active')
				}else{
					$(this).removeClass('tab-cont--active')
				}
			})
		});
	};
	initTab(".modal-tab");
	// Tabs === end


	//modal

	$('.modal-content').click(function(event){
		event.stopPropagation();
	});
	var scrollPos = 0;

	var openModal = function () {
	if(!$('.modal-layer').hasClass('modal-layer-show')){
		$('.modal-layer').addClass('modal-layer-show');
	}
	 scrollPos = $(window).scrollTop();
		$('body').css({
			overflow: 'hidden',
			position: 'fixed',
			overflowY: 'scroll',
			top : -scrollPos,
			width:'100%'
		});
		return scrollPos;
	};

	var closeModal = function () {
		console.log("scrollPos",scrollPos);
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix");
  	$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
    $(window).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
	};

	var initModal = function(el){
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal')===el){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);
		$('.modal-wrap').css('height',modalHeightCont );
		$('.modal-wrap').css('minHeight',modalHeightCont );
	}

	$('.modal-get').click(function (){
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close , .modal-close-btn').click(function (){
		closeModal();
	});
	//modal===end


	//slider news
	//init only in mobile
	var sliderMobile = function(){
				if( $(window).width() < 641){
						$('.news-list--slider').not('.slick-initialized').slick({
							responsive: [
								{
									breakpoint: 9999,
									settings: "unslick"
								},
								{
									breakpoint: 640,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										infinite: true,
										prevArrow: false,
										nextArrow: false,
										dots: true,
										adaptiveHeight: true
									}
								}
							]
						});
				}
		};
	$(window).resize(function(){
		sliderMobile();
	});
	sliderMobile();
	//slider news===end
	
	
	// mobile menu
	//===== Mobile slide-left menu =====
 var $menu = $("#mobile-menu").mmenu({
  	navbar: {
  		title: "Главное меню",
  		"content": [
  		"searchfield"
  		]
  	},
		/*"searchfield": {
		add: true,
		search: true
		},*/
		extensions: [
			//"effect-menu-slide",
			"effect-listitems-slide",
			"fullscreen"
		],
		offCanvas : {
			position : "left", // changing this alters the position of the menu
			zposition : "front"
		}
	});

	//Toggle header icon
	if ($menu.data( "mmenu" )) {
		var API = $menu.data( "mmenu" );
		API.bind( "opening", function() {
			var menuExtendHeader = $('.head').height();
			$('.header-nav__menu').toggleClass('header-nav__menu--open');
			$('#mobile-menu').css('marginTop',menuExtendHeader);
		});
		API.bind( "closing", function() {
			var menuExtendHeader = $('.head').height();
			$('.header-nav__menu').toggleClass('header-nav__menu--open');
			$('#mobile-menu').css('marginTop',menuExtendHeader);
		});
		$('.modal-get').click(function() {
				 API.close();
		});
	}
	//===== Mobile slide-left menu =====

	// add swipe
	$("#my-menu").mmenu({
			extensions: ["effect-menu-slide", "effect-listitems-slide","theme-dark"],
			 position : "left", // changing this alters the position of the menu
			zposition : "front"
		});

	//for mobile hide
	// mobile menu === end

	//slide scroll menu
	var shrinkHeader = 350;
	var heightHeader = $('.head').height();

	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll > shrinkHeader ) {
				$('.head').addClass('shrink');
				$('body').css('paddingTop',heightHeader);
			}
			else {
					$('.head').removeClass('shrink');
					$('body').css('paddingTop',0);
			}
	});

	$(window).resize(function(){
		heightHeader=$('.head').height();
	});
	//slide scroll menu===end

	//scroll smooth to top
		$('.scroll-top').click(function() {
			$('html, body').animate({scrollTop: 0},1400);
			return false;
		});
	//scroll smooth to top===end

	//increment field
		$('.incr__minus').click(function () {
			var $input = $(this).parent().find('.incr__val span');
			var count = parseInt($input.html()) - 1;
			count = count < 1 ? 0 : count;
			if(count == 0){
				$(this).closest('.item-el__info-get').removeClass('item-el__info-get--incr');
				count += 1;

				$(this).closest('.cart-drop__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.cart-drop__el').remove()
				});

				$(this).closest('.pay-drop__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.pay-drop__el').remove()
				});

				$(this).closest('.pay-row__el').animate({
					opacity: 0.25,
					width: 0
				}, 500, function() {
					$(this).closest('.pay-row__el').remove()
				});

				$(this).closest('.pay-order__el').remove();

				cartScroll.perfectScrollbar('update');
			}
			$input.html(count);
		});
		$('.incr__plus').click(function () {
			var $input = $(this).parent().find('.incr__val span');
			var count = parseInt($input.html()) + 1;
			count = count > 100 ? 100 : count;
			$input.html(count);
		});

	$('.item-el__add').click(function(){
		$(this).closest('.item-el__info-get').addClass('item-el__info-get--incr');
	});
	//increment field end

	// nice select
	$('.select-beauty').niceSelect();
	// nice select === end

	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

	console.log(detectIE());
	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG 
	svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();
	 $(window).unload(function(){
		 localStorage.clear();
	 });
	// ==== clear storage end =====

	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/

})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );