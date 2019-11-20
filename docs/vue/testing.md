# Testing

## Greats tips

- Keep the tests running by using the `--watch` flag
- Prevent error when using snapshot by using the `-u` (update) flag so that Jest updates the generated file before comparing.

## Notes

- When setting up Jest tests, `it()` and `test()` are the same thing

- Use `propsData` to test the `props` which would be things like options and configuration for Vue2Editor.

  **Example:**

  ```js
  const customToolbar = [["blockquote", "code-block"]];

  const wrapper = mount(VueEditor, {
    propsData: {
      value: "Vue School newww",
      editorToolbar: customToolbar
    }
  });
  ```

- Access the Vue instance by doing the following:

  **Example**

  ```js
  const { vm } = wrapper;
  ```
