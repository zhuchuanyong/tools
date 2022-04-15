// plugin:@typescript-eslint/recommended 
// 应用typescript-eslint 的所有规则
// "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"] 推荐配置
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "./base.js",
    'plugin:@typescript-eslint/recommended',
    "prettier"
  ],
};