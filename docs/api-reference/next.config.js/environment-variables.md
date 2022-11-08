# Environment Variables

> Since the release of[Next.js 9.4](/blog/next-9-4)we now have a more intuitive and ergonomic experience for[adding environment variables](/docs/basic-features/environment-variables). Give it a try!

:::details 示例
- [With env](https://github.com/vercel/next.js/tree/canary/examples/with-env-from-next-config-js)
:::

> Note: environment variables specified in this way willalwaysbe included in the JavaScript bundle, prefixing the environment variable name with`NEXT_PUBLIC_`only has an effect when specifying them[through the environment or .env files](/docs/basic-features/environment-variables).

To add environment variables to the JavaScript bundle, open`next.config.js`and add the`env`config:

```js
module.exports = {
  env: {
    customKey: 'my-value',
  },
}

```

Now you can access`process.env.customKey`in your code. For example:

```jsx
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>
}

export default Page

```

Next.js will replace`process.env.customKey`with`'my-value'`at build time. Trying to destructure`process.env`variables won't work due to the nature of webpack[DefinePlugin](https://webpack.js.org/plugins/define-plugin/).

For example, the following line:

```jsx
return <h1>The value of customKey is: {process.env.customKey}</h1>

```

Will end up being:

```jsx
return <h1>The value of customKey is: {'my-value'}</h1>

```

## Related




