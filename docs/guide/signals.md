---
sidebar_position: 1
---

# Signals

A **Signal** represent a specific state that your application has to manage. For example, for managing `users` and `products` inside your ecommerce application you will have to create two separate signals called `usersSignal` and `productsSignal`.

To create a signal, you have to use a pre-defined function called `createSignal`, and you have to provide an object that contains properties like **state**, **actions** and the **signal name** that will be used in the whole application.

## createSignal

This function is used to create a signal. It takes an object as a parameter and returns the created signal.

```js
import { createSignal } from "@dilane3/gx";

const productsSignal = createSignal({
  name: "product",
  state: [],
  actions: {
    // payload here representes a product
    addProduct: (state, payload) => {
      return [...state, ...payload];
    },

    removeFirstProduct: (state) => {
      return state.slice(1);
    },
  },
});
```

:::note
Note that the `payload` argument in an action function is not required, you can skip it.
:::

:::info
With the version `1.3.0` of `gx`, you can add `operations` to your signals like follow:
:::

```js
import { createSignal } from "@dilane3/gx";

const productsSignal = createSignal({
  name: "product",
  state: [],
  actions: {
    addProduct: (state, payload) => {
      return [...state, ...payload.product];
    },

    removeFirstProduct: (state) => {
      return state.slice(1);
    },
  },
  operations: {
    isProductExist: (state, payload) => {
      return state.find((product) => product.id === payload.id);
    },
  },
});
```

The `isProductExist` operation will be used to check if a product exists in the state and will return the product if it exists or `undefined` if it doesn't exist.
We can see that the `operations` object has the same schema as the `actions` object but the difference is that the `operations` object doesn't modify the state.

:::info
The `operations` object is optional, you can skip it.

To know how to use operations, please refer to the [useOperations](/docs/guide/hooks/useOperations) hook.
:::

The object parameter must contain the following properties:

| Properties   | Type     | Description                                               | Version     |
| ------------ | -------- | --------------------------------------------------------- | ----------- |
| `name`       | `string` | The name of the signal. It must be unique.                | since 1.0.0 |
| `state`      | `any`    | The initial state of the signal.                          | since 1.0.0 |
| `actions`    | `object` | An object that contains all the actions of the signal.    | since 1.0.0 |
| `operations` | `object` | An object that contains all the operations of the signal. | since 1.3.0 |

## What's next ?

Once the creation of the signal has been done, to use it you must register it in the [store](/docs/guide/store.md) and then retrieve the **state** and **actions** _(methods that modify the state)_ with the [useSignal](/docs/guide/hooks/useSignal.md) and [useAction](/docs/guide/hooks/useAction.md) hooks respectively.
