# Throubleshooting

****

## The state update twice after calling an action ?

If you have this issue, that means you are using the version `1.3.0` or earlier.

We have fix that issue in version `1.4.0`. Please upgrade your package to that version by executing one of the following command depending on your package manager.

**with npm**
```bash
npm update @dilane3/gx
```

**with yarn**
```bash
yarn upgrade @dilane3/gx
```

**with pnpm**
```bash
pnpm update @dilane3/gx
```

You don't want to upgrade your package ? No problem, you can fix that issue by yourself.

Follow the steps below:

### React

Your `App.js` file should look like this:

```jsx title="src/App.jsx"
import React from 'react';
import { StrictMode } from 'react';

function App() {
  return (
    <StrictMode>
      <div>My App</div>
    </StrictMode>
  );
}

export default App;
```

You need to remove the `StrictMode` component, so your `App.js` file should look like this:

```jsx title="src/App.jsx"
import React from 'react';

function App() {
  return (
    <div>My App</div>
  );
}

export default App;
```

:::note
In a `React Native` application, you have to do the same thing, but depending on if you are using `Expo` or not the entry file will be different.
:::

### Next.js

In a `Next.js` application, the method is a little bit different. You need to create a `next.config.js` file in the root of your project, and add the following code:

```js title="next.config.js"
module.exports = {
  reactStrictMode: false,
}
```

****

## Problem with the importation of actions while using TypeScript

If you have this issue when you want to import actions from your signal, that means you are using the version `1.1.1` or earlier.

We have fix that issue in version `1.2.0`. Please upgrade your package to that version by executing the following command

**with npm**
```bash
npm update @dilane3/gx
```

**with yarn**
```bash
yarn upgrade @dilane3/gx
```

Refer yourself on [TypeScript integration](/docs/typescript.md) to see how you can integrate TypeScript very well into your app.

****

## Your problem doesn't appear here ?

Please [create an issue](https://github.com/react-gx/gx/issues) to explain to the maintainer your problem.