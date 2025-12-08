/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // ✅ Prefer type-only imports when possible
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],

    // ✅ Remove/flag unused vars/imports (allow `_`-prefixed)
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    // ✅ Auto-sort imports/exports
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  ignorePatterns: [
    "dist/",
    "node_modules/",
  ],
};
