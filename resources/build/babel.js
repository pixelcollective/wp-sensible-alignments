const mix = require('laravel-mix')

module.exports = () => {
  mix.babelConfig({
    'plugins': [
      ['@wordpress/babel-plugin-makepot',
        { 'output': './lang/sensible.pot',
      }],
    ],
  })
}