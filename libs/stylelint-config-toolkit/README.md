# @zcytools/stylelint-config-toolkit

## 简介

在个人项目中统一 stylelint 配置，将之封装为 npm 包。

## 使用

安装依赖

```shell
yarn add -D @zcytools/stylelint-config-toolkit
```

在 `stylelint.config.js` 中配置

```js
module.exports = {
  extends: ['@zcytools/stylelint-config-toolkit'],
}

```