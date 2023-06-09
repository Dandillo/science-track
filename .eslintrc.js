﻿module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "unicode-bom": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
