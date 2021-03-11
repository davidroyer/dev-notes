# SEO

## Social Share & Meta

- I have a built a very simple but elegant solution. It's the `seo-handler.js`
  plugin file. It can be used as follows:

  ```js
  export default {
    head() {
      const { title, description } = this.post;
      const seoMetaArray = this.$seo({ title, description });

      return {
        meta: [...seoMetaArray]
      };
    }
  };
  ```

## Head Meta

The best way of setting up the `titleTemplate` is by setting it in the layout
file, such as `default.vue`.

This is the only way to use some variable value from the `site.config.js` file.
Before this realization, you had to hard-code the title inside the function
which means it would need to be updated in 2 locations if its updated.
