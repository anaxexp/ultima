<?php namespace App;

/**
 * Theme customizer
 */
add_action('customize_register', function (\WP_Customize_Manager $wp_customize) {
    // Add postMesultima support
    $wp_customize->get_setting('blogname')->transport = 'postMesultima';
});

/**
 * Customizer JS
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('ultima/customizer.js', asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
});
