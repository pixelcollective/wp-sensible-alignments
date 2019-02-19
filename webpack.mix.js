require('laravel-mix-stylelint')
require('laravel-mix-eslint')

const mix = require('laravel-mix')
const app = require('./resources/build/app')

mix.setPublicPath(app.dist)
app.browserSync(app.url)

app.webpack()
app.babel()
app.assets()

mix.react(
  './resources/assets/scripts/alignments.js',
  './dist/index.js',
).eslint({
  fix: false,
  cache: false,
})
