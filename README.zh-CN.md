# crossorigin-webpack-plugin

[English](./README.md) | 简体中文

## ✨ 特性

- 零配置/极简使用
- 支持 webpack 版本 v2/3/4/5，支持最新 webpack5
- 支持 html-webpack-plugin 版本 v2/3/4/5

## 🚀 快速开始

### 安装

```bash
yarn add -D crossorigin-webpack-plugin # 或 npm i -D crossorigin-webpack-plugin
```

### 使用

> 需定义在 `HtmlWebpackPlugin` 插件之后

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

### 配置

> 默认配置为：`{ crossorigin: 'anonymous' }`

```js
new CrossoriginWebpackPlugin({ crossorigin: 'anonymous' })
```

---

😉😘 如果它对你有所帮助，可以点一下 <b>⭐️<a href="#">Star</a></b> ~

## [更新日志](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, komo
