const mix = require('laravel-mix')

module.exports = () => {
  mix.inProduction() ? (
    mix.version()
      .then(() => {
        const manifest = File.find('./dist/mix-manifest.json')
        const json = JSON.parse(manifest.read())
        Object.keys(json).forEach(key => {
          const hashed = json[key]
          delete json[key]
          json[key.replace(/^\/+/g, '')] = hashed.replace(/^\/+/g, '')
        })
        manifest.write(JSON.stringify(json, null, 2))
      })
  ) : (
    mix.sourceMaps()
  )
}