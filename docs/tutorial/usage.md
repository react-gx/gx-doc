---
sidebar_position: 5
---

# Usage

We are almost at the end of this Tutorial, now we just have to create a component that will use the store that we have set up earlier.

So let's see how to do that: 

**Step 1: Create a file**

Create a `Counter.jsx` file in the `src` folder which will contain our component.

**Step 2: Create the component**

Add the following code inside the `src/Counter.jsx` file:

```jsx title="src/Counter.jsx"
import "./styles.css";

export default function Counter() {
  return (
    <div className="container">
      <h1 className="title">Counter App</h1>

      <p className="text">count: 0</p>

      <div className="buttons">
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
}
```

For the style, you can (if you want) create a file called `styles.css` in the `src` folder too with the following content: 

```css title="src/styles.css"
/* Theses fonts are not required, you can use your own */
@import url("https://fonts.cdnfonts.com/css/axiforma");
@import url("https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap");

.container {
  font-family: "Axiforma";
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  font-size: 20px;
}

.buttons {
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.buttons button {
  width: 120px;
  border: none;
  padding: 7px 0;
  border-radius: 5px;
  font-family: "Oxygen Mono";
  transition: all 0.2s;
}

.buttons button:hover {
  background-color: #3e4bff;
  color: #fff;
}
```

See the result

![Counter app 1](/docs/counter1.png)

**Step3: Import hooks**

Add hooks importations like follow in your `src/Counter.jsx` file

```jsx title="src/Counter.jsx"
import { useSignal, useActions } from "@dilane3/gx";
```

:::info
`useSignal` is used to get state from a specific signal

`useActions` is used to get actions from a specific signal
:::

:::info
The `useActions` hook is available since version `1.2.0`. Earlier, you had to use `useAction` instead.

See the section [useActions and useAction](/docs/guide/hooks/useAction.md) for more explanation
:::

**Step 4: Use these hooks and set events on buttons**

Update your `Counter` component to make it looking like the following code:

```jsx title="src/Counter.jsx" {6,9,15,18-19}
import { useSignal, useActions } from "@dilane3/gx";
import "./styles.css";

export default function Counter() {
  // State
  const counter = useSignal("counter");

  // Actions
  const { increment, decrement } = useActions("counter");

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>

      <p className="text">count: {counter}</p>

      <div className="buttons">
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    </div>
  );
}
```

Too simple, isn't it ? 🤭🤭

See the final result now

![Counter app 1](/docs/counter-final.gif)

😍😍😍 very beautiful. It works very fine 😄

You can play with this code in live. Check the [playground](https://codesandbox.io/s/gx-playground-react-m608mx)