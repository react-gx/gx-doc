---
sidebar_position: 4
---

# useAsyncActions

:::info
`useAsyncActions` is available since version `1.4.0`
:::

The `useAsyncActions` hook is used to retrieve asynchronous actions of a [signal](/docs/guide/signals.md) that has been recorded in the [store](/docs/guide/store.md).

It takes the name of the [signal](/docs/guide/signals.md) as a the first parameter and returns an object that contains all the asynchronous actions of this signal.

```js
const { fetchMovies, createMovie } = useAsyncActions("movies");
```

Also, the `useAsyncActions` hooks accepts a series of asynchronous actions that you want to retrieve and it will return you an object that contain asynchronous actions that you asked for.

```js
const { fetchMovies, createMovie } = useAsyncActions(
  "movies",
  "fetchMovies",
  "createMovie"
);
```

**Structure**

- **useAsyncActions**

| Properties   | Type       | Status     | Description                                |
| ------------ | ---------- | ---------- | ------------------------------------------ |
| `name`       | `string`   | `required` | The name of the signal. It must be unique. |
| `...actions` | `string[]` | `optional` | The series of asynchronous actions         |
