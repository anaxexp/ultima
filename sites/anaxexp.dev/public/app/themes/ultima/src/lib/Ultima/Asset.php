<?php namespace Anaxexp\Ultima;

use Anaxexp\Ultima\Assets\ManifestInterface;

/**
 * Class Template
 * @package Anaxexp\Ultima
 * @author QWp6t
 */
class Asset
{
    public static $dist = '/dist';

    /** @var ManifestInterface Currently used manifest */
    protected $manifest;

    protected $asset;

    protected $dir;

    public function __construct($file, ManifestInterface $manifest = null)
    {
        $this->manifest = $manifest;
        $this->asset = basename($file);
        $this->dir = dirname($file) != '.' ? dirname($file) : '';
    }

    public function __toString()
    {
        return $this->getUri();
    }

    public function getUri()
    {
        $file = ($this->manifest ? $this->manifest->get($this->asset) : $this->asset);
        return get_stylesheet_directory_uri() . self::$dist . '/' . $this->dir . '/' . $file;
    }
}
