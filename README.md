# crossorigin-webpack-plugin

English | [简体中文](./README.zh-CN.md)

## ✨ Features

- Zero-config, easy to use
- Support webpack v2/3/4/5
- Support html-webpack-plugin v2/3/4/5

## 🚀 QuickStart

### Install

```bash
yarn add -D crossorigin-webpack-plugin # OR npm i -D crossorigin-webpack-plugin
```

### Usage

> Please put it after `HtmlWebpackPlugin`

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

### Config

> Default config: `{ crossorigin: 'anonymous' }`

```js
new CrossoriginWebpackPlugin({ crossorigin: 'anonymous' })
```

---

😉😘 If it is helpful to you，please encourage me with a <b>⭐️<a href="#">Star</a></b> ~

## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
