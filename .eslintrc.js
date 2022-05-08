module.exports = {
  root: true,
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["eslint-plugin-tsdoc"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "tsdoc/syntax": "warn",
    "import/no-cycle": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
