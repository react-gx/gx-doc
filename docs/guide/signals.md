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

The object parameter must contain the following properties:

| Properties | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| `name`     | `string` | The name of the signal. It must be unique.             |
| `state`    | `any`    | The initial state of the signal.                       |
| `actions`  | `object` | An object that contains all the actions of the signal. |

## What's next ?

Once the creation of the signal has been done, to use it you must register it in the [store](/docs/guide/store.md) and then retrieve the **state** and **actions** _(methods that modify the state)_ with the [useSignal](/docs/guide/hooks/useSignal.md) and [useAction](/docs/guide/hooks/useAction.md) hooks respectively.
