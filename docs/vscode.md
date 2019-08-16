# VSCODE

To get markdown files to automatically fix rules from `markdownlint`,
this goes in `settings.json`:

```json
{
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

To get `eslint` and `prettier` working together in a non-VueCLI project, I did the following:

```bash
yarn add -D babel-eslint eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier vue-eslint-parser
```

Inside `.babelrc.json`. Ther order sems to _REALLY_ matter btw:

```js
{
  extends: [
      "plugin:vue/recommended",
      "eslint:recommended",
      "prettier/vue",
      "plugin:prettier/recommended"
    ]
}
```

## Markdown

- Shortcut to open Markdown Preview to side

<kbd>⌘K</kbd>  
 _Release. Then,_  
<kbd>V</kbd>
