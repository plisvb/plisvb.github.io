/////////////////////////////////// WOW JS
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

// NAVIGATION

$(document).on("click", ".mobile-nav-btn", function(){
$(".mobile-nav-holder").removeClass('mobile-nav-hide');
$(".mobile-nav-btn").addClass('mobile-nav-btn-hide');
$(".mobile-nav-holder").removeClass('mobile-nav-footer-position');
event.preventDefault();
});

$(document).on("click", ".mobile-nav-btn-close", function(){
$(".mobile-nav-holder").addClass('mobile-nav-hide');
$(".mobile-nav-btn").removeClass('mobile-nav-btn-hide');
$(".mobile-nav-holder").addClass('mobile-nav-footer-position');
event.preventDefault();
});

$(document).on("click", ".mobile-sub-menu-propos-title", function(){
$(".propos-sub-holder").toggleClass('sub-holder-show');
$(".services-sub-holder").removeClass('sub-holder-show');
$(".tarifs-sub-holder").removeClass('sub-holder-show');
$(".mobile-sub-menu-propos-title .arrow-down").toggleClass('arrow-up');
$(".mobile-sub-menu-services-title .arrow-down").removeClass('arrow-up');
$(".mobile-sub-menu-tarifs-title .arrow-down").removeClass('arrow-up');
event.preventDefault();
});

$(document).on("click", ".mobile-sub-menu-services-title ", function(){
$(".services-sub-holder").toggleClass('sub-holder-show');
$(".propos-sub-holder").removeClass('sub-holder-show');
$(".tarifs-sub-holder").removeClass('sub-holder-show');
$(".mobile-sub-menu-services-title .arrow-down").toggleClass('arrow-up');
$(".mobile-sub-menu-propos-title .arrow-down").removeClass('arrow-up');
$(".mobile-sub-menu-tarifs-title .arrow-down").removeClass('arrow-up');
event.preventDefault();
});

$(document).on("click", ".mobile-sub-menu-tarifs-title ", function(){
$(".tarifs-sub-holder").toggleClass('sub-holder-show');
$(".propos-sub-holder").removeClass('sub-holder-show');
$(".services-sub-holder").removeClass('sub-holder-show');
$(".mobile-sub-menu-tarifs-title .arrow-down").toggleClass('arrow-up');
$(".mobile-sub-menu-propos-title .arrow-down").removeClass('arrow-up');
$(".mobile-sub-menu-services-title .arrow-down").removeClass('arrow-up');
event.preventDefault();
});

$(document).on("click", ".mobile-nav-btn-footer", function(){
$(".mobile-nav-holder").removeClass('mobile-nav-hide');
$(".mobile-nav-holder").addClass('mobile-nav-footer-position');
$(".mobile-nav-btn").removeClass('mobile-nav-btn-hide');
event.preventDefault();
});

// FAQ
$(document).on("click", ".faq-holder", function(){
$(".faq-answer").removeClass('faq-answer-show');
$(".faq-holder").removeClass('faq-holder-open');
$(".arrow-down").removeClass('arrow-up');
$(this).closest('.faq-holder').find(".faq-answer").addClass('faq-answer-show');
$(this).closest('.faq-holder').addClass('faq-holder-open');
$(this).closest('.faq-holder').find(".arrow-down").addClass('arrow-up');
// $('html, body').animate({scrollTop: $(this).offset().top -200 }, 750);
event.preventDefault();
});

$(document).on("click", ".faq-holder-open", function(){
$(this).closest('.faq-holder').find(".faq-answer").removeClass('faq-answer-show');
$(this).closest('.faq-holder').removeClass('faq-holder-open');
$(this).closest('.faq-holder').find(".arrow-down").removeClass('arrow-up');
event.preventDefault();
});

// SIDE SCROLL BUTTONS
$(document).ready(function() {
$(function() {
  $('.horizon-prev-product').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer').animate({
	  scrollLeft: "-=600"
	}, "fast");
  });

   $('.horizon-next-product').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer').animate({
	 scrollLeft: "+=600"
	}, "fast");
  });
});
});

// SIDE SCROLL BUTTONS THRE
$(document).ready(function() {
$(function() {
  $('.horizon-prev-product-three').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer-three').animate({
	  scrollLeft: "-=600"
	}, "fast");
  });

   $('.horizon-next-product-three').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer-three').animate({
	 scrollLeft: "+=600"
	}, "fast");
  });
});
});

$(document).ready(function() {
	scrWidth = $('.testimonial-holder').width();
	scrWidthOuter = $('.testimonial-holder').length;
	function flxScroll() {     
		$('.flex-scroll-outer-two').toggleClass('scroll-snap-class scroll-snap-class-off');
	 }
$(function() {
  $('.horizon-prev-product-two').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer-two').toggleClass('scroll-snap-class scroll-snap-class-off');
	$('.flex-scroll-outer-two').animate({
	  scrollLeft: '-=' + scrWidth
	}, "fast");
	setTimeout(flxScroll, 201)
	console.log (scrWidth +',' + scrWidthOuter);
  });

   $('.horizon-next-product-two').click(function(event) {
	event.preventDefault();
	$('.flex-scroll-outer-two').toggleClass('scroll-snap-class scroll-snap-class-off');
	$('.flex-scroll-outer-two').animate({
	 scrollLeft: '+=' + scrWidth
	}, "fast");
	console.log (scrWidth +',' + scrWidthOuter);
	setTimeout(flxScroll, 201)
  });
});
});

// CONTACT TAB
$(document).on("click", ".tab-holder a", function(){
currentData = $(this).attr("data-current");
$(".tab-holder a").removeClass('current');
$(this).addClass('current');
$(".form").removeClass('current');
$('.' + currentData).addClass('current');
event.preventDefault();
});

// LOGOS TAB
$(document).on("click", ".tab-holder a", function(){
currentData = $(this).attr("data-current");
$(".tab-holder a").removeClass('current');
$(this).addClass('current');
$(".logos-tab").removeClass('current');
$('.' + currentData).addClass('current');
event.preventDefault();
});

// ADDRESSES TAB
$(document).on("click", ".addresses a", function(){
currentData = $(this).attr("data-current");
$(".addresses a").removeClass('current');
$(this).addClass('current');
$(".address-holder").removeClass('current');
$('.' + currentData).addClass('current');
event.preventDefault();
});

// TAFIFS TAB
$(document).on("click", ".tab-holder a", function(){
currentData = $(this).attr("data-current");
$(".tab-holder a").removeClass('current');
$(this).addClass('current');
$(".tarifs-holder-outer").removeClass('current');
$('.' + currentData).addClass('current');
event.preventDefault();
console.log(currentData);
});

// TARIFS EXTRA INFO BTN
$(document).on("click", ".tarifs-details", function(){
$(this).closest('.tarifs-details').find(".extra-info").toggleClass('extra-info-show');
$(this).closest('.tarifs-details').find(".arrow-down").toggleClass('arrow-up');
});

// MOBILE LINE MIN-WIDTH
jQuery(document).ready(function() {
var timelineWidth = parseInt($('.timeline').width());
var timelineWidthFull = timelineWidth * 6;
$('.middle-line-mobile').css("width", timelineWidthFull + 500);
console.log(timelineWidth);

function afterReveal (el) {
	if (el.classList.contains('timeline')) {
		el.addEventListener('animationend', function () {
			$(this).addClass('show-dot');
		});
	}
}

new WOW({ callback: afterReveal }).init();
});

// TEXT CHANGE
jQuery(document).ready(function() {
//$('#caption p:gt(0)').hide();
$("#caption").css("width", $("#caption > span:first-child").width());
$("#caption").css("height", $("#caption > span:first-child").height());
var captionIdx = 0;
var captionItemCount = $("#caption > span").length;
setInterval(function() {
	$("#caption span:eq(" + captionIdx + ")").fadeOut("slow");
	captionIdx = (captionIdx + 1) % captionItemCount;
	var $next = $("#caption span:eq(" + captionIdx + ")");
	$("#caption").css("width", $next.width());
	$("#caption").css("height", $next.height());
	$next.fadeIn("slow");
}, 2000);

//$('#caption p:gt(0)').hide();
$("#caption-two").css("width", $("#caption-two > span:first-child").width());
$("#caption-two").css("height", $("#caption-two > span:first-child").height());
var captionIdxTwo = 0;
var captionItemCountTwo = $("#caption-two > span").length;
setInterval(function() {
	$("#caption-two span:eq(" + captionIdxTwo + ")").fadeOut("slow");
	captionIdxTwo = (captionIdxTwo + 1) % captionItemCountTwo;
	var $nextTwo = $("#caption-two span:eq(" + captionIdxTwo + ")");
	$("#caption-two").css("width", $nextTwo.width());
	$("#caption-two").css("height", $nextTwo.height());
	$nextTwo.fadeIn("slow");
}, 2000);

});

// PHOTOS SIZE CHANGE
$(document).on("click", ".zoom", function(){
picnum = $(this).closest('.photo-holder').attr("pic-number");
picnumnext = parseInt(picnum) + 1;
picnumprev = parseInt(picnum) - 1;
$('*').css('will-change', 'inherit');
$('.photo-holder').removeClass('large-photo picanimation');
$('.photo-holder').addClass('photo-blur');
$(this).closest('.photo-holder').addClass('large-photo picanimation');
$(this).closest('.photo-holder').removeClass('photo-blur');
console.log("picnum:" + picnum + " Next:" + picnumnext + " Previous:" + picnumprev);
});

$(document).on("click", ".next", function(){
$("body").find("[pic-number='" + picnumnext + "']").find('.zoom').trigger( "click" );
});

$(document).on("click", ".prev", function(){
$("body").find("[pic-number='" + picnumprev + "']").find('.zoom').trigger( "click" );
});

$(document).on("click", ".close", function(){
$('.photo-holder').removeClass('large-photo photo-blur picanimation');
$('*').css('will-change', 'transform');
});

$(document).keyup(function(e) {
	 if (e.key === "Escape") { 
		$('.photo-holder').removeClass('large-photo photo-blur picanimation');
		$('*').css('will-change', 'transform');
	}
});

$(document).keyup(function(e) {
	 if (e.key === "ArrowRight") { 
$("body").find("[pic-number='" + picnumnext + "']").find('.zoom').trigger( "click" );
	}
});

$(document).keyup(function(e) {
	 if (e.key === "ArrowLeft") { 
$("body").find("[pic-number='" + picnumprev + "']").find('.zoom').trigger( "click" );
	}
});

// COMPANIES
$(document).on("click", ".companies-btn", function(){
$(".companies-holder").toggleClass('companies-holder-open');
$(this).toggleClass('companies-btn-open');
$('html, body').animate({scrollTop: $('.companies-holder').offset().top -150 }, 500);
event.preventDefault();
});


$(document).on("click", ".image-slide2 .paginate-arrows", function(){
currentSlide = $(this).attr("slide-number");
console.log(currentSlide);
$('.image-slide2 .paginate-arrows').removeClass('btn-current');
$(this).addClass('btn-current');
$(this).closest('.details-image-slide').removeClass("pic1 pic2 pic3 pic4 pic5");
$(this).closest('.details-image-slide').addClass("pic" + currentSlide);
event.preventDefault();
});

$(document).on("click", ".image-slide1 .paginate-arrows", function(){
currentSlide = $(this).attr("slide-number");
console.log(currentSlide);
$('.image-slide1 .paginate-arrows').removeClass('btn-current');
$(this).addClass('btn-current');
$(this).closest('.details-image-slide').removeClass("pic1 pic2 pic3 pic4 pic5");
$(this).closest('.details-image-slide').addClass("pic" + currentSlide);
event.preventDefault();
});

$(document).on("click", ".image-slide .paginate-arrows", function(){
currentSlide = $(this).attr("slide-number");
console.log(currentSlide);
$('.image-slide .paginate-arrows').removeClass('btn-current');
$(this).addClass('btn-current');
$(this).closest('.details-image-slide').removeClass("pic1 pic2 pic3 pic4 pic5");
$(this).closest('.details-image-slide').addClass("pic" + currentSlide);
event.preventDefault();
});

// LANGUAGE CONTROL
$(document).on("click", ".lang-btn", function(){
   var currentlang = $(this).html();
   localStorage.setItem("lang", currentlang);
});

// COPYRIGHT YEAR
var currentYear = new Date().getFullYear();
jQuery(document).ready(function() {
$('.current-year').html(currentYear);
});