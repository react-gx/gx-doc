---
sidebar_position: 1
---

# useSignal

This hook takes the name of the [signal](/docs/guide/signals.md) as a parameter and returns the state contained inside that signal.

```js
const products = useSignal("products");
```

If you want to get actions _(methods that allow you to modify this state)_, use the [useAction](/docs/guide/hooks/useAction.md) hook instead.
