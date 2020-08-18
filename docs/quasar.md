# Quasar Framework

## VS Code Setup

Have the following dev dependencies:

- `@vue/eslint-config-prettier`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-vue`

Adjust `.eslintrc.js` to:

```js
module.exports = {
  extends: ['prettier', 'plugin:vue/recommended', '@vue/prettier']
};
```

Have the following in `.vscode/settings.json`:

```json
{
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "prettier-eslint"
}
```
