---
sidebar_position: 2
---

# Store

**Store** is a collection of [signals](/docs/guide/signals.md). We know that in an application, we can manage many state separately, so gx gives you the possibility to centralize all your state into a special place. The state becomes easier to manage like that.

During the creation of the store you have to fill in all the signals of the application in an array.

## createStore

This function is used to create the application's store. It takes an array of signals as a parameter and returns created the store.

```js
export default createStore([usersSignal, productsSignal, ordersSignal]);
```

## What's next ?

After creating the store, you must make it accessible globally with the [provider](/docs/guide/provider.md).
