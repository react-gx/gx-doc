---
sidebar_position: 1
---

# Introduction

**GX** is a `Global State Management Library` for React and React Native. You can use it to manage your application state, and it is based on the concept of **Signals**.
It is a very simple library, very easy to use, very perfomant and so light.

So let's get started!

## Installation

Using npm:
```bash
npm install @dilane3/gx
```

Using yarn:
```bash
yarn add @dilane3/gx
```

## Pre-requisites

To use GX properly, you need to disable the `Strict Mode` in your React or React Native application. The reason is that, while `Strict Mode` is enabled, React will make state changes `twice`, and GX will not work properly.

To do that, follow the instructions below:

### React

Your `App.js` file should look like this:

```jsx title="src/App.js" {2,6-8}
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

```jsx title="src/App.js" {5}
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



