# @zcytools/eslint-config-utils

## 简介

在个人项目中统一 prettier 配置，将之封装为 npm 包。

## 使用

安装依赖

```shell
yarn add -D @zcytools/eslint-config-utils

```

## with   prettier 
```shell
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D

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

```js
// vue3
// * eslint
// * perttier
// * typescript
// * @typescript-eslint/parser  `使eslint 解析ts`
// * @typescript-eslint/eslint-plugin  作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则

// * eslint-plugin-vue   ESLint官方提供的Vue插件，可以检查 .vue文件中的语法错误
// * eslint-config-prettier 所有格式相关的校验都交给 prettier 处理 `使prettier 与 eslint兼容的插件`
// * eslint-plugin-prettier 使用eslint插件将prettier作为eslint规则执行
module.exports = {
  extends: ['utils/vue3'],
};
```


## tips 

```
<!-- 幽灵依赖 -->
"eslint-plugin-import": "^2.25.4",
"eslint-plugin-n": "^14.0.0",
"eslint-plugin-promise": "^6.0.0"
```