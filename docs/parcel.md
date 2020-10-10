# Parcel

## Hot Reloading

Hot reloading doesn't work out of the box. Need to add the following to have it:

```js
if (module.hot()) module.accept();
```
