---
sidebar_position: 4
---

# Set the Provider

At this time, our `counter signal` has already been created and the `store` has also been set up. So now, what we have to do is the make our `store` available from everywhere in our application.

Let's how to do that.

**Step 1: Importations**

Open the `src/App.js` file and add these two imports

```jsx title="src/App.js"
import GXProvider from "@dilane3/gx";
import store from "./gx/store";
```

:::note
`GXProvider` is just a component which will take your store and make it available to every components of your application.
:::

**Step 2: Wrap you app with the GXProvider**

Here is how your `App.js` file will look like: 

```jsx title="src/App.js"
import GXProvider from "@dilane3/gx";
import store from "./gx/store";

export default function App() {
  return (
    <GXProvider store={store}>
      {
        // You app here
      }
    </GXProvider>
  );
}
```