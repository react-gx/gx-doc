# Throubleshooting

****

## The state update twice after calling an action ?

The origin of this problem is that you have enabled `Strict Mode`. So you have to disable it.

How to do that ?

### React

Your `App.js` file should look like this:

```js title="src/App.js"
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

```js title="src/App.js"
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

## Your problem doesn't appear here ?

Please [create an issue](https://github.com/react-gx/gx/issues) to explain to the maintainer your problem.