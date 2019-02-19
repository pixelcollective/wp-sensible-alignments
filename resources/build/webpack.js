const mix = require('laravel-mix')

module.exports = () => {
  mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json', '.jsx'],
    },
    externals: {
      'lodash': 'lodash',
      'react': 'React',
      'react-dom': 'ReactDOM',
      '@wordpress/a11y': 'wp.a11y',
      '@wordpress/annotations': 'wp.annotations',
      '@wordpress/api-fetch': 'wp.api-fetch',
      '@wordpress/autop': 'wp.autop',
      '@wordpress/blob': 'wp.blob',
      '@wordpress/block-library': 'wp.blockLibrary',
      '@wordpress/blocks': 'wp.blocks',
      '@wordpress/components': 'wp.components',
      '@wordpress/compose': 'wp.compose',
      '@wordpress/core-data': 'wp.coreData',
      '@wordpress/data': 'wp.data',
      '@wordpress/date': 'wp.date',
      '@wordpress/dom': 'wp.dom',
      '@wordpress/dom-ready': 'wp.dom-ready',
      '@wordpress/edit-post': 'wp.editPost',
      '@wordpress/editor': 'wp.editor',
      '@wordpress/element': 'wp.element',
      '@wordpress/escape-html': 'wp.escapeHtml',
      '@wordpress/format-library': 'wp.formatLibrary',
      '@wordpress/html-entities': 'wp.htmlEntities',
      '@wordpress/keycodes': 'wp.keycodes',
      '@wordpress/list-reusable-blocks': 'wp.listReusableBlocks',
      '@wordpress/plugins': 'wp.plugins',
      '@wordpress/hooks': 'wp.hooks',
      '@wordpress/i18n': 'wp.i18n',
    },
  })
}
