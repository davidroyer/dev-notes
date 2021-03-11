# Notes

- When using the `ref` attribute on a Vue component then you need to use the
  `.$el` to access the underlying HTML element as shown here:

  ```js
  const el = this.$refs.contactForm.$el;
  ```

## Nice Way Of Setting Up Data Properties

::: warning Important
:warning: Should only set one of these at a time since they set the same property names of `posts` and `todos`. One will overwrite the other
:::

```vue
<script>
const dataArrays = {};
const dataObjects = {};
const apiResources = ["posts", "todos"];

apiResources.forEach(resource => {
  dataArrays[resource] = [];
  dataObjects[resource] = {};
});

export default {
  data: () => ({
    ...dataArrays
    ...dataObjects
  })
};
</script>
```

### The Results For Each Scenario:

#### For `dataObjects`

```js

{
  posts: {},
  todos: {}
}
```

#### For `dataArrays`

```js

{
  posts: [],
  todos: []
}
```
