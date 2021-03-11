# Notes

- I still don't understand `publicRuntimeConfig`

- If a page route is capitalized such as `About.vue` then a route will get
  generated for `/about` and `/About` which would also shows up in the
  `sitemap.xml`. Because of this, I can't imagine this is a good thing so it
  seems like it's best to get pages lowercased.

## Adding a Module

Using the `requireModule` function will allow this as shown in the example
below:

```js
export default function() {
  this.requireModule([
    '@nuxtjs/google-analytics',
    {
      id: 'UA-1234-5'
    }
  ]);
}
```
