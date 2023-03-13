---
sidebar_position: 2
---

# useActions and useAction

:::info
`useActions` is available since version `1.2.0`
:::

The `useActions` hook is used to retrieve actions of a [signal](/docs/guide/signals.md) that has been recorded in the [store](/docs/guide/store.md).

It takes the name of the [signal](/docs/guide/signals.md) as a the first parameter and returns an object that contains all the actions of this signal.

```js
const { addProduct, removeFirstProduct } = useActions("product");
```

:::info
If you want to get the state of the signal, use the [useSignal](/docs/guide/hooks/useSignal.md) hook instead.
:::

Assuming you want to get only one action, rather than doing this like follow:

```js
const { addProduct } = useActions("product");
```

You can use the `useAction` instead

```js
const addProduct = useAction("product", "addProduct");
```

Also, the `useActions` hooks accepts a series of actions that you want to retrieve and it will return you an object that contain actions that you asked for.

```js
const { addProduct, removeFirstProduct, updateProduct } = useActions(
  "product",
  "addProduct",
  "removeFirstProduct"
);
```

:::note
In this example, the `updateProduct` action won't be available, because we have tell to `useActions` to get only `addProduct` and `removeFirstProduct`.
:::

---

**Structure**

- **useActions**

| Properties   | Type       | Status     | Description                                |
| ------------ | ---------- | ---------- | ------------------------------------------ |
| `name`       | `string`   | `required` | The name of the signal. It must be unique. |
| `...actions` | `string[]` | `optional` | The series of actions                      |

- **useAction**

| Properties | Type     | Status     | Description                                |
| ---------- | -------- | ---------- | ------------------------------------------ |
| `name`     | `string` | `required` | The name of the signal. It must be unique. |
| `action`   | `string` | `required` | The action name                            |
