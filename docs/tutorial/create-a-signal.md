---
sidebar_position: 2
---

# Create a Signal

To create a signal, you have to use a function that `Gx` offers, and this function is `createSignal`.

So let's see how to do that.

**Step 1: Create a counter.js file**

Inside the `src/gx/signals` folder, create a new file called `counter.js`.

**Step 2: Create a signal**

Add the following code inside: 

```js title="src/gx/signals/counter.js"
import { createSignal } from "@dilane3/gx";

const counterSignal = createSignal({
  name: "counter",
  state: 0,
  actions: {}
});

export default counterSignal;
```

:::note
Note that you have to import the `createSignal` function first and use it to create your `counterSignal`.
:::

The `createSignal` function takes only one parameter, an object which should contains exactly 5 properties

- **name (required)**: An identifiant
- **state (required)**: An initial state
- **actions (required for version before `1.4.0`)**: List of actions that act to the state
- **operations (optional)**: List of operations that can be used to act to the state without modifying it but filter or apply a specific logic (available since the version `1.3.0`)
- **asyncActions (optional)**: List of asynchronous actions that act to the state (available since the version `1.4.0`)

**Step 3: Add actions**

After having created the signal and specifying the name and the initial state, we have to define some actions. In our case we will define two actions such as `increment` and `decrement` actions.

Update your `signal` like this:

```js title="src/gx/signals/counter.js" {7-13}
import { createSignal } from "@dilane3/gx";

const counterSignal = createSignal({
  name: "counter",
  state: 0,
  actions: {
    increment: (state, payload) => {
      return state + payload;
    },

    decrement: (state, payload) => {
      return state - payload;
    }
  }
});

export default counterSignal;
```

All actions should have the same schema: 

```ts
action: (state, payload?) => state
```

:::info
The `?` means that, the `payload` is not required.
:::

:::note
The `options` object of the `createSignal` functions accepts a fourth property called `operations`. This property is used to define some operations that can be used to act to the state without modifying it but filter or apply a specific logic. [Learn more](/docs/guide/signals.md) 

This feature comes with the version `1.3.0` of `gx`. It allows you to add operations to your signals.
:::

Now it's ok, we have successfully defined our signal. Let's move to the next step [create a store](/docs/tutorial/create-a-store.md)