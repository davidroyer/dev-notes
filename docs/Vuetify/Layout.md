# Grid & Layout

If you want to created a column that isn't as wide like your contact form then
you can do the following:

```html
<template>
  <!-- BEST WAY -->
  <v-row justify="center" align="center">
    <v-col md="6">
      <github-projects></github-projects>
    </v-col>
  </v-row>
  <!-- ALTERNATE WAY -->
  <v-row>
    <v-col md="6" offset-md="3">
      <!-- Content Here -->
    </v-col>
  </v-row>
</template>
```
