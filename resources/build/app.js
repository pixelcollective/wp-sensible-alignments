const webpack     = require('./webpack')
const babel       = require('./babel')
const browserSync = require('./browserSync')
const assets      = require('./assets')
const cssnano     = require('./cssnanoConfig')

module.exports = {
  url:  'http://lab.tinypixel.test',
  src:  './resources',
  dist: './dist',
  webpack: webpack,
  babel: babel,
  browserSync: browserSync,
  assets: assets,
  cssnano,
}
