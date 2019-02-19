const mix = require('laravel-mix')

module.exports = (url) => {
  mix.browserSync({
    proxy: `${url}`,
    files: [
      './dist/*.js',
    ],
  })
}