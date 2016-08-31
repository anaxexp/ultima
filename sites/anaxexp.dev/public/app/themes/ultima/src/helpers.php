<?php namespace App;

use Anaxexp\Ultima\Asset;
use Anaxexp\Ultima\Assets\JsonManifest;
use Anaxexp\Ultima\Template;

function template($layout = 'Default')
{
    return Template::$instances[$layout];
}

function template_part($template, array $context = [], $layout = 'Default')
{
    extract($context);
    include template($layout)->partial($template);
}

/**
 * @param $filename
 * @return string
 */
function asset_path($filename)
{
    static $manifest;
    isset($manifest) || $manifest = new JsonManifest(get_template_directory() . '/' . Asset::$dist . '/assets.json');
    return (string) new Asset($filename, $manifest);
}

/**
 * Determine whether to show the sidebar
 * @return bool
 */
function display_sidebar()
{
    static $display;
    isset($display) || $display = apply_filters('ultima/display_sidebar', true);
    return $display;
}

/**
 * Page titles
 * @return string
 */
function title()
{
    if (is_home()) {
        if ($home = get_option('page_for_posts', true)) {
            return get_the_title($home);
        }
        return __('Latest Posts', TEXT_DOMAIN);
    }
    if (is_archive()) {
        return get_the_archive_title();
    }
    if (is_search()) {
        return sprintf(__('Search Results for %s', TEXT_DOMAIN), get_search_query());
    }
    if (is_404()) {
        return __('Not Found', TEXT_DOMAIN);
    }
    return get_the_title();
}
