!function(e){e.fn.wfMegaMenu=function(s){var a={classParent:"wf-mega",classContainer:"sub-container",classSubParent:"mega-hdr",classSubLink:"mega-hdr",classWidget:"wf-extra",rowItems:3,speed:"fast",effect:"fade",event:"hover",fullWidth:!1,onLoad:function(){},beforeOpen:function(){},beforeClose:function(){}},s=e.extend(a,s),t=this;return t.each(function(){function s(){var s=e(".sub",this);e(this).addClass("mega-hover"),"fade"==a.effect&&e(s).fadeIn(a.speed),"slide"==a.effect&&e(s).slideDown(a.speed),a.beforeOpen.call(this)}function i(s){var t=e(".sub",s);e(s).addClass("mega-hover"),"fade"==a.effect&&e(t).fadeIn(a.speed),"slide"==a.effect&&e(t).show(a.speed),a.beforeOpen.call(this)}function n(){var s=e(".sub",this);e(this).removeClass("mega-hover"),e(s).hide(),a.beforeClose.call(this)}function l(s){var t=e(".sub",s);e(s).removeClass("mega-hover"),e(t).hide(),a.beforeClose.call(this)}function h(){e("li",t).removeClass("mega-hover"),e(".sub",t).hide()}function r(){$arrow='<span class="wf-mega-icon"></span>';var r=c+"-li",v=t.outerWidth();e("> li",t).each(function(){var s=e("> ul",this),i=e("> a",this);if(s.length){i.addClass(c).append($arrow),s.addClass("sub").wrap('<div class="'+f+'" />');var n=e(this).position();if(pl=n.left,e("ul",s).length){e(this).addClass(r),e("."+f,this).addClass("mega"),e("> li",s).each(function(){e(this).hasClass(u)||(e(this).addClass("mega-unit"),e("> ul",this).length?(e(this).addClass(o),e("> a",this).addClass(o+"-a")):(e(this).addClass(d),e("> a",this).addClass(d+"-a")))});var l=e(".mega-unit",this);rowSize=parseInt(a.rowItems);for(var h=0;h<l.length;h+=rowSize)l.slice(h,h+rowSize).wrapAll('<div class="row" />');s.show();var g=e(this).width(),p=pl+g,m=v-p,w=s.outerWidth(),C=s.parent("."+f).outerWidth(),b=C-w;if(1==a.fullWidth){var x=v-b;s.parent("."+f).css({width:x+"px"}),t.addClass("full-width")}var W=e(".mega-unit",s).outerWidth(!0),I=e(".row:eq(0) .mega-unit",s).length,S=W*I,L=S+b;if(e(".row",this).each(function(){e(".mega-unit:last",this).addClass("last");var s=void 0;e(".mega-unit > a",this).each(function(){var a=parseInt(e(this).height());(void 0===s||a>s)&&(s=a)}),e(".mega-unit > a",this).css("height",s+"px"),e(this).css("width",S+"px")}),1==a.fullWidth)P={left:0};else{var k=k>m?k+k-m:(L-g)/2,z=pl-k,P={left:pl+"px",marginLeft:-k+"px"};0>z?P={left:0}:k>m&&(P={right:0})}e("."+f,this).css(P),e(".row",s).each(function(){var s=e(this).height();e(".mega-unit",this).css({height:s+"px"}),e(this).parent(".row").css({height:s+"px"})}),s.hide()}else e("."+f,this).addClass("non-mega").css("left",pl+"px")}});var g=e("> li > a",t).outerHeight(!0);if(e("."+f,t).css({top:g+"px"}).css("z-index","1000"),"hover"==a.event){var p={sensitivity:2,interval:100,over:s,timeout:400,out:n};e("li",t).hoverIntent(p)}"click"==a.event&&(e("body").mouseup(function(s){e(s.target).parents(".mega-hover").length||h()}),e("> li > a."+c,t).click(function(s){var a=e(this).parent();a.hasClass("mega-hover")?l(a):i(a),s.preventDefault()})),a.onLoad.call(this)}var o=a.classSubParent,d=a.classSubLink,c=a.classParent,f=a.classContainer,u=a.classWidget;r()})}}(jQuery);