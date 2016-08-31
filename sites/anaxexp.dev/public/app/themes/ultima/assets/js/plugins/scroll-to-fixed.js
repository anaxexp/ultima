/**
 * Created by cwell on 8/25/2016.
 */
jQuery(function() {
    var scrollrow = jQuery(".scroll-row-padding");
    var menurow = jQuery(".scroll-menu-row");
    var logorow = jQuery(".scroll-logo-row");
    var cartmenurow = jQuery(".scroll-cart-menu-row");
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 76) {
            menurow.removeClass("scroll-menu-row").addClass("scrolled-menu-row");
            scrollrow.removeClass("scroll-row-padding").addClass("scrolled-row-padding");
            logorow.removeClass("scroll-logo-row").addClass("scrolled-logo-row");
            cartmenurow.removeClass("scroll-cart-menu-row").addClass("scrolled-cart-menu-row");
        } else if (scroll <= 71) {
            menurow.removeClass("scrolled-menu-row").addClass("scroll-menu-row");
            scrollrow.removeClass("scrolled-row-padding").addClass("scroll-row-padding");
            logorow.removeClass("scrolled-logo-row").addClass('scroll-logo-row');
            cartmenurow.removeClass("scrolled-cart-menu-row").addClass("scroll-cart-menu-row");
        }
    });
});