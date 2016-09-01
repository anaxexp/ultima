/* ------------------------------------------------------------------------ */
/* Javascripts
/* ------------------------------------------------------------------------ */
jQuery(function() {
	jQuery('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
jQuery(document).ready(function($){
    
     // Clear Input Fields value
	 $('input[type=text]').each(function() {
		var default_value = this.value;
		$(this).focus(function(){
		   if(this.value == default_value) {
		           this.value = '';
		   }
		});
		$(this).blur(function(){
		       if(this.value == '') {
		               this.value = default_value;
		       }
		});
	});
	
	/* ------------------------------------------------------------------------ */
	/* Back To Top */
	/* ------------------------------------------------------------------------ */

	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}
	});
	
	$('#back-to-top, .back-to-top').click(function() {
		  $('html, body').animate({ scrollTop:0 }, '800');
		  return false;
	});
	
	/* ------------------------------------------------------------------------ */
	/* Infobar */
	
	var infostate = 'close';
	var infobarheight = $('#infobar').height() + 62;
	
	$('.close-infobar').click(function() {
		if(infostate == 'close'){
			$('#infobar').show().animate({ top : 0 }, 220, 'easeOutQuad');
			$(this).addClass('open');
			infostate = 'open';
		}
		else if(infostate == 'open'){
			$('#infobar').show().animate({ top : -infobarheight }, 220, 'easeOutQuad');
			$(this).removeClass('open');
			infostate = 'close';
		}
		return false;
	});
	// Slide Down Top (Top Tabs)
	// -------------------------------------------------------------------
	if (jQuery('.section-tabs').length > 0 ) {
		$('.section-tabs').simpleSlideTop();
    }
    $('#infobar').css({'top' : -infobarheight}).fadeIn('fast');
	
	$(window).resize(function() {
		infobarheight = $('#infobar').height() + 62;
		$('#infobar').css({'top' : -infobarheight}).show();
		$('.close-infobar').removeClass('open');
		infostate = 'close';
  	});
	
});
// Simple Slide Open Top Content (with tabs)
// -------------------------------------------------------------------------------------

(function($) {
	$.fn.simpleSlideTop = function(opts) {
	
		var options = $.extend({}, $.fn.simpleSlideTop.defaults, opts);
		
		return this.each(function() {
			//$(this).addClass('tabs');
			$container = $(this);
			$(this).find('a').each(function(){
				
				contentID = $(this).attr('href');
				
				$(contentID).hide();
			
				$(this).bind(options.eventType, function(e){
					e.preventDefault();
				
					if ($(this).hasClass('active')) {
						// close everything if the active tab is clicked again
						$($(this).parents('ul').find('a')).each(function(){
							$(this).removeClass('active');
							$($(this).attr('href')).slideUp(options.duration*.65);
						});
					} else {
						// open the selected tab
						$tab = $(this);
						
						// check for any active tabs (so we know if they need to be closed)
						hasActive = false;
						$container.find('a').each(function(){
							if ($(this).hasClass('active')) hasActive = true;
						});
						
						// Now close all tabs except the one we just clicked...
						$($(this).parent().siblings().find('a')).each(function(){
							$(this).removeClass('active');
							$($(this).attr('href')).slideUp(options.duration*.65);
						});
						
						if (hasActive) {
							$($(this).attr('href')).delay(options.duration*.65).slideDown(options.duration);
						} else {
							$($(this).attr('href')).slideDown(options.duration);
						}
						
						$tab.addClass('active')
					}
					return false;
				});

			});
			
			if (options.startOpen) {
				var first = $(this).find('li:nth-child(' + options.defaultTab + ')').children('a');
				$(first).addClass('active');
				$($(first).attr('href')).show();
			}
		
		});
	};
	
	$.fn.simpleSlideTop.defaults = {duration: 300, defaultTab: 1, startOpen: false, eventType: 'click'}

})(jQuery);
/* ------------------------------------------------------------------------ */
/* EOF
/* ------------------------------------------------------------------------ */