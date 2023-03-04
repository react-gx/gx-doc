---
sidebar_position: 3
---

# Provider

The **provider** allows to make elements of the [signals](/docs/guide/signals.md) (state, actions) contained in the [store](/docs/guide/store.md) accessible in the whole application.

## GXProvider

It is a component that must be mounted in the root component of the application. It takes the store in props and makes it accessible globally.

```js
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
