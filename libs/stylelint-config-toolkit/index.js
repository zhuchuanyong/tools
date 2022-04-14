module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  overrides: [
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
