---
sidebar_position: 2
---

# useAction

This hook is used to retrieve actions of a [signal](/docs/guide/signals.md) that has been recorded in the [store](/docs/guide/store.md).

It takes the name of the [signal](/docs/guide/signals.md) as a the first parameter and returns an object that contains all the actions of this signal.

```js
const { addProduct, removeFirstProduct } = useAction("product");
```

:::info
If you want to get the state of the signal, use the [useSignal](/docs/guide/hooks/useSignal.md) hook instead.
:::

Assuming you want to get only one action, rather than doing this like follow:

```js
const { addProduct } = useAction("product");
```

You can use this syntax

```js
const addProduct = useAction("product", "addProduct");
```

Also, the `useAction` hooks accepts a series of actions that you want to retrieve and it will return you an object that contain actions that you asked for.

```js
const { addProduct, removeFirstProduct } = useAction(
  "product",
  "addProduct",
  "removeFirstProduct"
);
```

---

**Structure**

| Properties   | Type     | Description                                |
| ------------ | -------- | ------------------------------------------ |
| `name`       | `string` | The name of the signal. It must be unique. |
| `...actions` | string[] | The series of actions                      |
