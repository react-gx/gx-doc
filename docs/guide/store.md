---
sidebar_position: 2
---

# Store

**Store** is a collection of [signals](/docs/guide/signals.md). We know that in an application, we can manage many state separately, so `Gx` gives you the possibility to centralize all your state into a special place. The state becomes easier to manage like that.

To create a `store` you have to use the `createStore` function, and you have to put all the signals that you have created in an array and pass it as the parameter of the function.

## createStore

This function is used to create the application's store. It takes an array of signals as a parameter and returns created the store.

```js
import { createStore } from "@dilane3/gx";

export default createStore([productsSignal, usersSignal, ordersSignal]);
```

## What's next ?

After creating the store, you must make it accessible globally with the [provider](/docs/guide/provider.md).
