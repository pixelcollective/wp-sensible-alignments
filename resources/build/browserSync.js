const mix = require('laravel-mix')

module.exports = (url) => {
  mix.browserSync({
    proxy: `${url}`,
    files: [
      './dist/blocks/**/*.css',
      './dist/blocks/**/*.js',
    ],
  })
}