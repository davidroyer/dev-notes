# JavaScript

## Async Await

For parallel requests:

When You have an multiple endpoints you need to make requests to from an API and the order of execution does not matter, you can use async await as follows:

1. Create an array of these endpoints

   ```js
   const Resources = ["posts", "pages"];
   ```

2. Use `Array.map()` to execute the async/await logic for each request. This creates an Array of Promises.

   ```js
   const ResourcePromises = Resources.map(async resource => {
     this.resources[resource] = await this.$wp[resource]();
   });
   ```

3. Await the complete response by using `Promise.all()`

   ```js
   await Promise.all(ResoucePromises);
   ```

**Here's an example with Vue**

```vue
<template>
  <div id="app">
    <button @click="getResources()">Get Resources</button>

    <div id="data" v-if="dataLoaded">
      <h2 v-for="(resource, key) in resources" :key="key" v-text="key" />
    </div>
  </div>
</template>

<script>
const Resources = ["posts", "pages"];

export default {
  name: "App",

  data: () => ({
    dataLoaded: false,
    resources: {}
  }),

  methods: {
    async getResources() {
      const ResourcePromises = Resources.map(async resource => {
        this.resources[resource] = await this.$wp[resource]();
      });
      await Promise.all(ResourcePromises);
      this.dataLoaded = true;
    }
  }
};
</script>
```
