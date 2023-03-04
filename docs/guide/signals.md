---
sidebar_position: 1
---

# Signals

A **Signal** represent a specific state that your application has to manage. For example, for managing `users` and `products` inside your ecommerce application you will have to create two separate signals called `usersSignal` and `productsSignal`.

During the creation of the signal, you fill in the resources like **state**, **actions** and the **signal name** that will be used in the whole application.

## createSignal

This function is used to create a signal. It takes an object as a parameter and returns the created signal.

```js
const counterSignal = createSignal({
  name: "counter",
  state: 0,
  actions: {
    increment: (state, payload) => {
      return state + payload;
    },

    decrement: (state, payload) => {
      return state - payload;
    },
  },
});
```

The object parameter must contain the following properties:

| Properties | Type     | Description                                            |
| ---------- | -------- | ------------------------------------------------------ |
| `name`     | `string` | The name of the signal. It must be unique.             |
| `state`    | `any`    | The initial state of the signal.                       |
| `actions`  | `object` | An object that contains all the actions of the signal. |

## What's next ?

Once the creation of the signal has been done, to use it you must register it in the [store](/docs/guide/store.md) and then retrieve the **state** and **actions** _(methods that modify the state)_ with the [useSignal](/docs/guide/hooks/useSignal.md) and [useAction](/docs/guide/hooks/useAction.md) hooks respectively.
