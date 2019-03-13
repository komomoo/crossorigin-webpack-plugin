# crossorigin-webpack-plugin

## ✨ 特性

- 零配置/极简使用
- 支持 webpack 版本 v1/2/3/4
- 支持 html-webpack-plugin 版本 v2/3/4

## 🚀 快速开始

### 安装

```bash
yarn add -D crossorigin-webpack-plugin # 或 npm i -D crossorigin-webpack-plugin
```

### 使用

> 定义在 `HtmlWebpackPlugin` 插件后。

```js
const CrossoriginWebpackPlugin = require('crossorigin-webpack-plugin')

const webpackConfig = {
  /* ... */
  plugins: [
    new HtmlWebpackPlugin(),
    new CrossoriginWebpackPlugin(),
  ],
  /* ... */
}
```

### 自定义

> 默认配置为：`{crossorigin: 'anonymous'}`

```js
new HtmlWebpackPlugin({crossorigin: 'anonymous'})
```

<br>
<br>
😉😘 如果它对你有所帮助，可以点一下 <b>⭐️<a href="#">Star</a></b> ~
