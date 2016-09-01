<?php namespace App;

use Anaxexp\Ultima\Template;

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
	wp_enqueue_style('ultima/main.css', asset_path('styles/main.css'), false, null);
	wp_enqueue_style('ultima/main.js', asset_path('scripts/main.js'), false, null);
	wp_register_style( 'ultima/components/ult_flexbox_menu.css', asset_path('styles/components/ult-flexbox-menu.css') );
	wp_enqueue_style( 'ult_flexbox_menu' );
	wp_register_script( 'ultima/lib/flexibility.js', asset_path('scripts/lib/flexibility.js'), '1.0.0', true );
	wp_enqueue_script( 'ultima/lib/flexibility.js' );
	wp_script_add_data( 'flexibility', 'conditional', 'lte IE 9' );
}, 100);



/**
 * Theme setup
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://anaxexp.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-jquery-cdn');
    add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag
     */
    add_theme_support('title-tag');

	// Add theme support for Automatic Feed Links
	add_theme_support ( 'automatic-feed-links' );

    /**
     * Register navigation menus
     * @link http://codex.wordpress.org/Function_Reference/register_nav_menus
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', TEXT_DOMAIN),
        'secondary_navigation' => __('Secondary Navigation', TEXT_DOMAIN),
        'right_topbar_navigation' => __( 'Right Topbar Navigation', TEXT_DOMAIN ),
        'left_topbar_navigation' => __( 'Left Topbar Navigation', TEXT_DOMAIN ),
        'cart_navigation' => __('Cart Navigation', TEXT_DOMAIN),
        'footer_navigation' => __('Footer Navigation', TEXT_DOMAIN)
    ]);

    /**
     * Enable post thumbnails
     * @link http://codex.wordpress.org/Post_Thumbnails
     * @link http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
     * @link http://codex.wordpress.org/Function_Reference/add_image_size
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable post formats
     * @link http://codex.wordpress.org/Post_Formats
     */
    add_theme_support('post-formats', ['aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio']);

	// Add theme support for Post Formats
	add_post_type_support( 'post', 'post-formats' );
	add_post_type_support( 'page', 'post-formats' );

    /**
     * Enable HTML5 markup support
     * @link http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

    /**
     * Use main stylesheet for visual editor
     * @see assets/styles/layouts/_tinymce.scss
     */
    add_editor_style(asset_path('styles/main.css'));
});

/**
 * Register sidebars
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ];
    register_sidebar([
        'name'          => __('Primary', TEXT_DOMAIN),
        'id'            => 'sidebar-primary'
    ] + $config);
	register_sidebar([
	     'name'          => __('Secondary', TEXT_DOMAIN),
	     'id'            => 'sidebar-secondary'
	 ] + $config);
	register_sidebar([
         'name'          => __('Shop Primary', TEXT_DOMAIN),
         'id'            => 'sidebar-shop-primary'
     ] + $config);
	register_sidebar([
         'name'          => __('Shop Secondary', TEXT_DOMAIN),
         'id'            => 'sidebar-shop-secondary'
     ] + $config);
	register_sidebar([
        'name'          => __('Footer', TEXT_DOMAIN),
        'id'            => 'sidebar-footer'
    ] + $config);
});
