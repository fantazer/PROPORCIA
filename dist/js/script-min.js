$(document).ready(function(){function e(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return parseInt(e.substring(n+5,e.indexOf(".",n)),10);var t=e.indexOf("Trident/");if(t>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var o=e.indexOf("Edge/");return o>0&&parseInt(e.substring(o+5,e.indexOf(".",o)),10)}var n=function(){$(window).width()<641&&$(".news-list").not(".slick-initialized").slick({responsive:[{breakpoint:9999,settings:"unslick"},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,prevArrow:!1,nextArrow:!1,dots:!0,adaptiveHeight:!0}}]})};$(window).resize(function(){n()}),n();var t=$("#mobile-menu").mmenu({navbar:{title:"Главное меню",content:["searchfield"]},extensions:["effect-listitems-slide","fullscreen"],offCanvas:{position:"left",zposition:"front"}});if(t.data("mmenu")){var i=t.data("mmenu");i.bind("opening",function(){var e=$(".head").height();$(".header-nav__menu").toggleClass("header-nav__menu--open"),$("#mobile-menu").css("marginTop",e)}),i.bind("closing",function(){var e=$(".head").height();$(".header-nav__menu").toggleClass("header-nav__menu--open"),$("#mobile-menu").css("marginTop",e)}),$(".modal-get").click(function(){i.close()})}$("#my-menu").mmenu({extensions:["effect-menu-slide","effect-listitems-slide","theme-dark"],position:"left",zposition:"front"});var o=250,r=$(".head").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=o?($(".head").addClass("shrink"),$("body").css("paddingTop",r)):($(".head").removeClass("shrink"),$("body").css("paddingTop",0))}),$(window).resize(function(){r=$(".header").height()}),$(".scroll-top").click(function(){return $("html, body").animate({scrollTop:0},1400),!1}),$(".incr__minus").click(function(){var e=$(this).parent().find(".incr__val span"),n=parseInt(e.html())-1;n=n<1?0:n,0==n&&($(this).closest(".item-el__info-get").removeClass("item-el__info-get--incr"),n+=1),e.html(n)}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),n=parseInt(e.html())+1;n=n>100?100:n,e.html(n)}),$(".item-el__add").click(function(){$(this).closest(".item-el__info-get").addClass("item-el__info-get--incr")}),$(".select-beauty").niceSelect(),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,n){"use strict";var t="img/pack.html",i=1;if(!n.createElementNS||!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var o,r,s="localStorage"in e&&null!==e.localStorage,a=function(){n.body.insertAdjacentHTML("afterbegin",r)},l=function(){n.body?a():n.addEventListener("DOMContentLoaded",a)};if(s&&localStorage.getItem("inlineSVGrev")==i&&(r=localStorage.getItem("inlineSVGdata")))return l(),!0;try{o=new XMLHttpRequest,o.open("GET",t,!0),o.onload=function(){o.status>=200&&o.status<400&&(r=o.responseText,l(),s&&(localStorage.setItem("inlineSVGdata",r),localStorage.setItem("inlineSVGrev",i)))},o.send()}catch(c){}}(window,document);