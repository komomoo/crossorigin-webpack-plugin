/**
 * crossorigin-webpack-plugin
 */

let HtmlWebpackPlugin
try {
  HtmlWebpackPlugin = require('html-webpack-plugin')
} catch (e) {
  if (!(e instanceof Error) || e.code !== 'MODULE_NOT_FOUND') throw e
}

module.exports = class CrossoriginWebpackPlugin {
  constructor (options) {
    this.options = options || { crossorigin: 'anonymous' }
  }

  apply (compiler) {
    // Hook into the html-webpack-plugin processing
    if (HtmlWebpackPlugin && HtmlWebpackPlugin.getHooks) {
      // HtmlWebpackPlugin 4/5
      compiler.hooks.compilation.tap('CrossoriginWebpackPlugin', (compilation) => {
        HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('CrossoriginWebpackPlugin', (htmlPluginData, callback) => {
          // console.log(htmlPluginData.assetTags)
          htmlPluginData.assetTags.scripts.forEach(item => (item.attributes.crossorigin = this.options.crossorigin))
          callback(null, htmlPluginData)
        })
      })
    } else if (compiler.hooks) {
      // HtmlWebpackPlugin 3
      compiler.hooks.compilation.tap('CrossoriginWebpackPlugin', compilation => {
        compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('CrossoriginWebpackPlugin', this._addAttributeToScripts.bind(this))
      })
    } else {
      // HtmlWebpackPlugin 2
      compiler.plugin('compilation', compilation => {
        compilation.plugin(
          'html-webpack-plugin-alter-asset-tags',
          this._addAttributeToScripts.bind(this)
        )
      })
    }
  }

  _addAttributeToScripts (htmlPluginData, callback) {
    htmlPluginData.head.filter(tag => tag.tagName === 'script').forEach(script => (script.attributes.crossorigin = this.options.crossorigin))
    htmlPluginData.body.filter(tag => tag.tagName === 'script').forEach(script => (script.attributes.crossorigin = this.options.crossorigin))
    callback(null, htmlPluginData)
  }
}
