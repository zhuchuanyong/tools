# @zcytools/eslint-config-utils

## 简介

在个人项目中统一 prettier 配置，将之封装为 npm 包。

## 使用方法

### 安装基础依赖

```shell
pnpm add -D @zcytools/eslint-config-utils eslint

```

### js 

在 `.eslintrc.js` 中配置
```js
module.exports = {
  extends: ['@zcytools/eslint-config-utils/index'],
};
```

### ts

```shell
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

在 `.eslintrc.js` 中配置
```js
module.exports = {
  extends: ['@zcytools/eslint-config-utils/typescript'],
};

```

### vue3 

```shell
pnpm add -D eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser @babel/core  @babel/eslint-parser

```

```js
module.exports = {
  extends: ['@zcytools/eslint-config-utils/vue3'],
};
```
## with   prettier 
```shell
yarn add prettier -D
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D

```

```js
{
  "extends": ["plugin:prettier/recommended"]
}
```