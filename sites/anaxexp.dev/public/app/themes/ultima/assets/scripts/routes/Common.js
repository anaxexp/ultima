import $ from 'jquery';
import jQuery from 'jquery';
import { createLogger } from 'dalogga';
const log = createLogger();
window.$ = $;
window.jQuery = jQuery;
const $el = {
    window : $(window),
    body : $(document.body),
    htmlbody: $('html, body'),
    infobar : $('#infobar'),
    closeInfoBar : $('.close-infobar'),
    sectionTabs : $('.section-tabs'),
    textInput : $('input[type=text]'),
    backtotop : $('#back-to-top, .back-to-top')
};
const actions = [

];
export default {
    init() {
        // JavaScript to be fired on all pages


        log.info('start', { 'INIT' : 'CommonJS', 'actions': actions });

    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        log.info('start', { 'FINALIZE' : 'CommonJS', 'actions': actions });

        $el.body.deleegate('[data-action]', 'click', function () {
            var action = $(this).data('action');
            if (action in actions) {
                actions[action].apply(this, arguments);
            }
        });
        $el.body.delegate('[data-onchange]', 'change', function () {
            var action = $(this).data('onchange');
            if (action in actions) {
                actions[action].apply(this, arguments);
            }
        });
        $el.body.on('onkeyup', '[data-onkeyup]', function () {
            var action = $(this).data('onkeyup');
            if (action in actions) {
                actions[action].apply(this, arguments);
            }
        });
        $el.body.delegate('[data-mousedown]', 'mousedown', function () {
            var el = $(this);
            var action = el.data('mousedown');
            if (action in actions) {
                actions[action].apply(this, arguments);
            }
        });
        $el.body.on('ready', '[data-onload]', function () {
            var action = $(this).data('onload');
            console.log(action);
            if (action in actions) {
                actions[action].apply(this, arguments);
            }
        });//mousedown

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $el.htmlbody.animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        // Clear Input Fields value
        $el.textInput.each(function() {
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

        $el.window.scroll(function(){
            if($el.window.scrollTop() > 200){
                $el.backtotop.fadeIn(200);
            } else{
                $el.backtotop.fadeOut(200);
            }
        });

        $el.backtotop.click(function() {
            $el.htmlbody.animate({ scrollTop:0 }, '800');
            return false;
        });

        /* ------------------------------------------------------------------------ */
        /* Infobar */

        var infostate = 'close';
        var infobarheight = $el.infobar.height() + 62;

        $('.close-infobar').click(function() {
            if(infostate == 'close'){
                $el.infobar.show().animate({ top : 0 }, 220, 'easeOutQuad');
                $(this).addClass('open');
                infostate = 'open';
            }
            else if(infostate == 'open'){
                $el.infobar.show().animate({ top : -infobarheight }, 220, 'easeOutQuad');
                $(this).removeClass('open');
                infostate = 'close';
            }
            return false;
        });
        // Slide Down Top (Top Tabs)
        // -------------------------------------------------------------------
        if ($el.sectionTabs.length > 0 ) {
            $el.sectionTabs.simpleSlideTop();
        }

        $el.infobar.css({'top' : -infobarheight}).fadeIn('fast');

        $el.window.resize(function() {
            infobarheight = $el.infobar.height() + 62;
            $el.infobar.css({'top' : -infobarheight}).show();
            $el.closeInfoBar.removeClass('open');
            infostate = 'close';
        });

        log.info('stop', { 'FINALIZE' : 'CommonJS', 'actions': actions });
    }}


