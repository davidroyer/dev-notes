# Vue2Editor

This was needed for testing to work

``` js
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