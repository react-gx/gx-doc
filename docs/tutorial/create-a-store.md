---
sidebar_position: 3
---

# Create a Store

Now it's the time to create a store where your signals have to be stored.

So, to do that, let's follow the following steps:

**Step 1: Create a file**

You have to create a file named `index.js` inside the `src/gx/store` folder.

**Step 2: Create a store**

For creating a store, you have to use a pre-defined function which comes with `Gx`, it's called `createStore`.

So add the following code in your `index.js` file.

```js title="src/gx/store/index.js"
import { createStore } from "@dilane3/gx";
import counterSignal from "../signals/counter";

const store createStore([counterSignal]);

export default store;
```

:::note Note 1
The `createStore` function takes as argument an array containing a list of signals that we want to make available globally.
:::

:::note Note 2
Don't forget to import your `counterSignal`
:::