module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script",
                "project": ["./tsconfig.json"]
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/restrict-template-expressions": "off"
    },
    globals: {
        __IS_DEV__: true
    }
}
