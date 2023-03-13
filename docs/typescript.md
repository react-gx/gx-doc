---
sidebar_label: TypeScript
sidebar_position: 4
---

# TypeScript

Like others libraries, **Gx** supports `TypeScript` since the version `1.2.0`.

It allows you to develop powerful applications and add types checking and also increases the OOP (Object Oriented Programming) concepts on top of `JavaScript`.

So let see how to configure `Gx` with `TypeScript`.

## Signals

We already know that, to create a `Signal` we have to use a pre-defined function called `createSignal` which comes from `@dilane3/gx`.

So let's see how you can add types on it.

```ts title="gx/signals/counter.ts"
import { createSignal } from "@dilane3/gx";

const counterSignal = createSignal<number>({
  name: "counter",
  state: 0,
  actions: {
    increment: (state, payload: number) => {
      return state + payload;
    },

    decrement: (state, payload: number) => {
      return state - payload;
    }
  }
});

export default counterSignal;
```

As you can see, `createSignal` accept a generic type, which refers to the state type. In our case it is just a `number` because we are creating a `counterSignal`.

:::note
By using a generic type with `createSignal`, the state parameter inside actions will automatically take this type.
:::

Assuming that, we want to create a `userSignal` which will be responsible to store informations about the current user connected into our application, we can do it like follow.

Let's create **User** class first.

```ts title="src/entities/user.ts"
export default class User {
  private id: number;
  private name: string;
  private email: string;
  private avatar: string;

  constructor() {
    // Do something here if needed
  }

  // Some others functions
}
```

Then create our signal

```ts title="gx/signals/user.ts"
import { createSignal } from "@dilane3/gx";
import User from "src/entities/user";

const userSignal = createSignal<User>({
  name: "user",
  state: null,
  actions: {
    login: (state, payload: User) => {
      return payload;
    },

    logout: (state) => {
      return null;
    }
  }
})

export default userSignal
```

Too simple and very clean 😇

## Store

There is no change with store manipulation. The same **javascript** code is valid.

```ts title="gx/store/index.ts"
import { createStore } from "@dilane3/gx";
import userSignal from "../gx/userSignal";
import counterSignal from "../gx/counterSignal";

export default createStore([userSignal, counterSignal]);
```

## Hooks

### useSignal

While getting a state from a specific `signal`, you have to tell to `Gx` the type that you want to give to your state, because it considers it as `any` by default.

Let's have an example.

```ts
const user = useSignal<User>("user");
```

By doing like this, `Gx` will add `User` type to your `user` variable directly, so that it will be easy for you to interact with this variable.

### useAction & useActions

There is no change with these hooks
