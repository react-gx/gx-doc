---
sidebar_position: 2
---

# useAction

This hook is used to retrieve the actions of a [signal](/docs/guide/signals.md) that has been recorded in the [store](/docs/guide/store.md).

It takes the name of the [signal](/docs/guide/signals.md) as a the first parameter and returns an object that contains all the actions of this signal.

```js
const { saveProducts, removeFirstProducts } = useAction("products");
```

If you want to get the state of the signal, use the [useSignal](/docs/guide/hooks/useSignal.md) hook instead.
