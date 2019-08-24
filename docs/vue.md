# Vue

## Nice Way Of Setting Up Data Properties

```vue
<script>
const resourcesData = {};
const resourceTypes = ["posts", "todos"];

resourceTypes.map(type => (resourcesData[type] = {}));

export default {
  data: () => ({
    ...resourcesData
  })
};
</script>
```
