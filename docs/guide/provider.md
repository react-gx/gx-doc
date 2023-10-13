---
sidebar_position: 3
---

# Provider

The role of the **provider** is to make your state available everywhere in your application. So, it takes your [store](/docs/guide/store.md) and exposes it globally.

## GXProvider

It is a component that must be mounted in the root component of the application. It takes the `store` in props and makes it accessible globally.

```js
import GXProvider from "@dilane3/gx";
import store from "./gx/store";

function App() {
  return (
    <GXProvider store={store}>
      {
        // Your application here
      }
    </GXProvider>
  );
}
```

## What's next ?

Now that the provider has been mounted, you can retrieve the state and actions of any signal that has been introduced into the store with the [useSignal](/docs/guide/hooks/useSignal.md) and [useAction](/docs/guide/hooks/useAction.md) hooks.
