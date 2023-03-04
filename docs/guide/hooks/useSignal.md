---
sidebar_position: 1
---

# useSignal

This hook takes the name of the [signal](/docs/guide/signals.md) as a parameter and returns the state contained inside that signal.

```js
const products = useSignal("product");
```

:::info
If you want to get actions _(methods that allow you to modify the state)_, use the [useAction](/docs/guide/hooks/useAction.md) hook instead.
:::

****

**Structure**

| Properties | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| `name`     | `string` | The name of the signal. It must be unique.             |
