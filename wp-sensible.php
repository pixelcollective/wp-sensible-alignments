<?php
/**
 * Plugin Name:     WP Sensible - Alignment Options
 * Plugin URI:      https://github.com/pixelcollective/wp-sensible-alignment-options
 * Description:     Add wrappers to alignwide and alignfull blocks on save
 * Version:         0.1.0
 * Author:          Tiny Pixel
 * Author URI:      https://tinypixel.io
 * License:         MIT License
 * Text Domain:     sensible
 * Domain Path:     /resources/lang
 *
 * @category   WP-Plugin
 * @package    WP_Sensible
 * @subpackage Alignment_Options
 * @author     Kelly Mears <developers@tinypixel.io>
 * @license    MIT <https://opensource.org/licenses/MIT>
 * @link       https://github.com/pixelcollective/wp-sensible-alignments
 **/

namespace TinyPixel\Plugins\Sensible;

/**
 * WP Editor Dependencies
 */
$gutenberg_dependencies = [
    'wp-element',
    'wp-i18n',
    'wp-api-request',
    'wp-data',
    'wp-hooks',
    'wp-components',
    'wp-blocks',
    'wp-editor',
    'wp-compose',
    'wp-plugins',
];

/**
 * Enqueue Editor Hooks WP Plug
 */
add_action(
    'admin_init',
    __NAMESPACE__ .'\enqueueHooks',
);

/**
 * Enqueue Editor Hooks Scripts
 */
function enqueueHooks($gutenberg_dependencies)
{
    wp_enqueue_script(
        'wp-sensible-alignment-js',
        plugins_url('/dist/index.js', __FILE__),
        [
            'wp-element',
            'wp-i18n',
            'wp-api-request',
            'wp-data',
            'wp-hooks',
            'wp-components',
            'wp-blocks',
            'wp-editor',
            'wp-compose',
            'wp-plugins',
        ],
        null,
        true
    );

    wp_register_script(
        'wp-sensible-alignment-js',
        plugins_url('/dist/index.js', __FILE__),
        [
            'wp-element',
            'wp-i18n',
            'wp-api-request',
            'wp-data',
            'wp-hooks',
            'wp-components',
            'wp-blocks',
            'wp-editor',
            'wp-compose',
            'wp-plugins',
        ],
        null,
        null
    );
}
