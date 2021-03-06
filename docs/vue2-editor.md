# Vue2Editor

> Things To Remember And Add To Other Notes file

<br>

## For Image Handling

[CodePen Link](https://codepen.io/droyer01/pen/eqBBQp?editors=0110) of my progress so far.

## For Nuxt & SSR

Possibly switch to this:

```js
let Quill;
if (!Vue.prototype.$isServer) Quill = require("quill");
```

## Modular Version

**JavaScript**

```js
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
```

**CSS**

```css
@import "~vue2-editor/dist/vue2-editor.css";
```

<br>

## Importing Quill's styles

```css
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
```

**Both of these work**

```js
import "vue2-editor/dist/css/vue2-editor.css";
import "quill/dist/quill.snow.css";
```

```vue
<style src="quill/dist/quill.snow.css"></style>
<!-- OR -->
<style>
@import "~quill/dist/quill.snow.css";

body {
  background: lightgrey !important;
}
.quillWrapper {
  padding: 1em;
  background: white;
}

.ql-editor {
  min-height: 300px;
}
</style>
```

<br>

<!-- NOTE: Add this to Vue2Editor Docs -->

All of Quill's functionality referenced in their docs is available by providing the `VueEditor` component a `ref` attribute and then accessing `quill` from that reference.

**For example:**

```vue
<template>
  <div>
    <button @click="getEditorText">Get Text</button>
    <VueEditor ref="vEditor" v-model="content" />
  </div>
</template>

<script>
export default {
  data: () => ({
    content: ""
  }),

  methods: {
    getEditorText() {
      console.log(this.$refs.vEditor.quill.getText());
    }
  }
};
</script>
```

This was needed for testing to work

```js
export default function() {
  global.MutationObserver = class {
    constructor(callback) {}
    disconnect() {}
    observe(element, initObject) {}
    takeRecords() {
      return [];
    }
  };
  global.document.getSelection = function() {};
}
```
