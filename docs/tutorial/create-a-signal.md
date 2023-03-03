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
Note that we have to import the `createSignal` function first and use it to create our `counterSignal`.
:::

The `createSignal` function takes only one parameter, an object which should contains exactly 3 properties

- name: An identifiant
- state: An initial state
- actions: List of actions that act to the state

**Step 3: Add actions**

After having created the signal and specifying the name and the initial state, we have to define some actions. In our case we will define two actions such as `increment` and `decrement` actions.

Update your `signal` like this:

```js title="src/gx/signals/counter.js"
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
action: (State, PayloadArg?) => newState
```

:::info
The `?` means that, the `payload` is not required.
:::

Now it's ok, we have successfully defined our signal. Let's move to the next step [create a store](/docs/tutorial/create-a-store.md)