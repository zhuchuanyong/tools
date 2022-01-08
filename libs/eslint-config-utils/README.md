# @zcytools/eslint-config-utils

## 简介

在个人项目中统一 prettier 配置，将之封装为 npm 包。

## 使用

安装依赖

```shell
yarn add -D @zcytools/eslint-config-utils
```

在 `eslintrc.js` 中配置


配置如下:

- **js**
```js
module.exports = {
  extends: ['utils/index'],
};
```
- **ts**
```js
module.exports = {
  extends: ['utils/typescript'],
};
```


## tips 

```
<!-- 幽灵依赖 -->
"eslint-plugin-import": "^2.25.4",
"eslint-plugin-n": "^14.0.0",
"eslint-plugin-promise": "^6.0.0"
```