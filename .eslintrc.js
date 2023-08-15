module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'standard',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react','prettier','import',
  ],
  rules: {
    "react/prop-types": "off",
    'react/react-in-jsx-scope': 'off',
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
  },
}
