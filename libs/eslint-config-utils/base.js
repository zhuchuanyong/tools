const common = require("./rules/common.js");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },

  extends: ["eslint:recommended",'standard'],
  rules: Object.assign({}, common),
};
