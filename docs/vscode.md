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
