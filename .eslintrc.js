module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  rules: {
    // Add or modify rules based on your preferences
    // Examples:
    "react/react-in-jsx-scope": "off", // Disable this rule for Next.js projects
    "react/prop-types": "off", // Disable prop-types since Next.js uses TypeScript or PropTypes is optional
    "react/jsx-uses-react": "off", // Disable this rule for Next.js projects
    "react/jsx-uses-vars": "error",
    "no-console": "warn",
  },
};
