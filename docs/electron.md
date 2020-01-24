# Electron

## Building

This following config setting & build script works to build for all formats
using `electron-builder`.

**IMPORTANT:** Works only after upgrading builder to version 22 2 0 or higher.

### `quasar.conf.js`

```js
module.exports = {
  electron: {
    bundler: 'builder'
  }
};
```

### `package.json`

```json
{
  "build:app": "quasar build -m electron --target all"
}
```
