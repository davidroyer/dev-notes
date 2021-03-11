# Icons

- For viewing the icons library when using `@mdi/js` -> <https://materialdesignicons.com/>

If you are referencing the `$vuetify.icons` to render an icon then how you do
this actually depends on whether its happening in the template or within the
`script/JavaScript`.

An example of showing the exact same icon is shown below using both ways.
Notice the use of `.values`.

```html
<template>
  <v-icon>{{ vIcon }}</v-icon>
  <v-icon>$vuetify.icons.mdiGithub</v-icon>
</template>

<script>
  export default {
    computed: {
      vIcon() {
        return this.$vuetify.icons.values.mdiGithub
      }
    }
  }
</script>
```