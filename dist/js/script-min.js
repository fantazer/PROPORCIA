$(document).ready(function(){function e(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var i=e.indexOf("Edge/");return i>0&&parseInt(e.substring(i+5,e.indexOf(".",i)),10)}$(".incr__minus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())-1;t=t<1?0:t,0==t&&($(this).closest(".item-el__info-get").removeClass("item-el__info-get--incr"),t+=1),e.html(t)}),$(".incr__plus").click(function(){var e=$(this).parent().find(".incr__val span"),t=parseInt(e.html())+1;t=t>100?100:t,e.html(t)}),$(".item-el__add").click(function(){$(this).closest(".item-el__info-get").addClass("item-el__info-get--incr")}),$(".select-beauty").niceSelect(),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var n="img/pack.html",r=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var i,a,o="localStorage"in e&&null!==e.localStorage,l=function(){t.body.insertAdjacentHTML("afterbegin",a)},s=function(){t.body?l():t.addEventListener("DOMContentLoaded",l)};if(o&&localStorage.getItem("inlineSVGrev")==r&&(a=localStorage.getItem("inlineSVGdata")))return s(),!0;try{i=new XMLHttpRequest,i.open("GET",n,!0),i.onload=function(){i.status>=200&&i.status<400&&(a=i.responseText,s(),o&&(localStorage.setItem("inlineSVGdata",a),localStorage.setItem("inlineSVGrev",r)))},i.send()}catch(c){}}(window,document);