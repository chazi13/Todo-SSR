const path = require('path')
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins')
const package = require('./package.json')

const nextConfig = {
  poweredByHeader: false,
  webpack: function(config) {
    package._moduleAliases.map(moduleAlias => {
      config.resolve.alias[moduleAlias.expose] =  path.resolve(__dirname, moduleAlias.src)
    })
    return config
  }
}

module.exports = withPlugins([
  [withCss]
], nextConfig)
