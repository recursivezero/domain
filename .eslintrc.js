export default {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".astro"],
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "warn",
    "comma-dangle": "warn",
    "constructor-super": "error",
    eqeqeq: ["warn", "always"],
    "import/no-deprecated": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/no-unassigned-import": "warn",
    "no-cond-assign": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true
      }
    ],
    "no-invalid-this": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-redeclare": "error",
    "no-sequences": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all"
      }
    ],
    "no-throw-literal": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "warn",
    "no-void": "error",
    "prefer-const": "warn",
    quotes: ["error", "double", { avoidEscape: true }]
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      }
    }
  ],

  global: {
    astro: true
  }
};
