# Disabling x-powered-by

By default Next.js will add the`x-powered-by`header. To opt-out of it, open`next.config.js`and disable the`poweredByHeader`config:

```js
module.exports = {
  poweredByHeader: false,
}

```

## Related


