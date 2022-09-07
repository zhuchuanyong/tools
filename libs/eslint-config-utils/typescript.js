// plugin:@typescript-eslint/recommended
// 应用typescript-eslint 的所有规则
// "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"] 推荐配置
module.exports = {
  extends: ['./base.js', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/ban-types': 'off',
  },
};
