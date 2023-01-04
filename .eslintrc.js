module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  parser: "@babel/eslint-parser", // Uses babel-eslint transforms. (Reuse babel-eslint dependency from react-scripts)
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: [
    "import", // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],
  root: true, // For configuration cascading.
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: ["warn", "double"],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "index", "sibling", "parent", "internal"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        //Everything from a feature should be exported from the index.js file which behaves as the public API of the feature.
        //This ensures a feature is a 'self-contained module' but can expose different parts to other features via its entry point.
        patterns: ["./features/*/*"],
      },
    ],
    "react/no-unknown-property": ["error", { ignore: ["css", "sx"] }],
  },
  settings: {
    react: {
      version: "detect", // Detect react version
    },
  },
};
