---
sidebar_position: 4
---

# Async Actions

## Introduction

In this section, we will learn how to use `GX` to manage asynchronous actions in your application.

:::info
`Async Actions` are available since the version `1.4.0`.
:::

## What is an asynchronous action ?

An asynchronous action is an action that is not executed immediately, but after a certain time. For example, when you want to fetch data from an API, you have to wait for the response of the API before updating the state of your application.

## How to create asynchronous actions ?

To create asynchronous actions, you have to define the `asyncActions` property of the `createSignal` function and then define your asynchronous actions inside it by using a `builder` in order to build your `async actions`.
That's the global idea, we'll see exactly how to do that step by step and you'll see that it's not hard at all. 😊

### Step 1: Create a signal first

Firstly, let's consider the situation where we want to fetch movies from an API. We will create a signal called `moviesSignal` that will contain the list of movies.

```ts
import { createSignal } from "@dilane3/gx";

const moviesSignal = createSignal({
  name: "movies",
  state: {
    movies: [],
    loading: false,
    error: null,
  },
});

export default moviesSignal;
```

As you already know, the `createSignal` function takes an object as a parameter. This object contains the following required properties:

- `name`: The name of the signal.
- `state`: The initial state of the signal.

We decided to define the initial state of the signal as follows:

```ts
{
  movies: [],
  loading: false,
  error: null,
}
```

Because we want to store the list of movies in the `movies` property, we want to store the loading state in the `loading` property and we want to store the error if it occurs in the `error` property.

:::note
Don't forget to export your signal at the end of the file and to create a store in order to use it in your application.

If you don't know how to do that, you can read the [Create Store](/docs/guide/store) section.
:::

### Step 2: Create the asynchronous action

Now that we have created our signal, we can create our asynchronous action. To do this, we will use the function `createAsyncAction` which takes an **asynchronous handler method** as a parameter. This handler method will be called when the asynchronous action is executed.

```ts {1,3-10}
import { createSignal, createAsyncAction } from "@dilane3/gx";

// Async handler method
const fetchMovies = createAsyncAction(async () => {
  // fetch movies list from themoviedb API
  const response = await fetch(
    "https://api.themoviedb.org/3/account/{account_id}/lists"
  );
  const movies = await response.json();

  return movies;
});

const moviesSignal = createSignal({
  name: "movies",
  state: {
    movies: [],
    loading: false,
    error: null,
  },
});

export default moviesSignal;
```

As you can see, we have defined the `fetchMovies` asynchronous action by using the `createAsyncAction` function.

:::note
Note that we haven't used **try/catch** to catch errors because `GX` will do it for us. We will see how to handle errors later.
:::

### Step 3: Define the asynchronous actions property of the signal

Now that we have created our asynchronous action, we can define it in the `asyncActions` property of the signal.

```ts {19-21}
import { createSignal, createAsyncAction } from "@dilane3/gx";

// Async handler method
const fetchMovies = createAsyncAction(async () => {
  // fetch movies list from themoviedb API
  const response = await fetch("https://api.themoviedb.org/3/account/{account_id}/lists");
  const movies = await response.json();

  return movies;
})

const moviesSignal = createSignal({
  name: "movies",
  state: {
    movies: [],
    loading: false,
    error: null,
  },
  asyncActions: (builder) => ({
    fetchMovies: // Use the builder to build your async action by defining all cases of the async action
  })
});
```

The `asyncActions` property takes a function as a parameter and this function takes a `builder` as a parameter. The `builder` is used to build your asynchronous action by defining all cases of the asynchronous action.

### Step 4: Define cases of the asynchronous action

Now that we have defined the `asyncActions` property of the signal, we can define the cases of the asynchronous action by using the `builder` that we have received as a parameter.

```ts {21-41}
import { createSignal, createAsyncAction } from "@dilane3/gx";

// Async handler method
const fetchMovies = createAsyncAction(async () => {
  // fetch movies list from themoviedb API
  const response = await fetch(
    "https://api.themoviedb.org/3/account/{account_id}/lists"
  );
  const movies = await response.json();

  return movies;
});

const moviesSignal = createSignal({
  name: "movies",
  state: {
    movies: [],
    loading: false,
    error: null,
  },
  asyncActions: (builder) => ({
    fetchMovies: builder
      .use(fetchMovies)
      .case(fetchMovies.pending, (state) => {
        state.loading = true;

        return state;
      })
      .case(fetchMovies.fulfilled, (state, data) => {
        state.movies = data;
        state.loading = false;

        return state;
      })
      .case(fetchMovies.rejected, (state, error) => {
        state.error = error;
        state.loading = false;

        return state;
      }),
  }),
});
```

Okay okay let's stop here for a moment. I know that you are a little bit lost but don't worry, I will explain everything to you. 😊

As you can see, we have used the `builder` to build our asynchronous action by defining all cases of the asynchronous action.

The `builder` has only one method called `use`. This method is used to define the asynchronous action that we want to use. It takes the asynchronous action as a parameter and return an instance of a `BuilderCase` class.

The `BuilderCase` class is used to define the cases of the asynchronous action. It has a method called `case` that takes `asynchronous action status` as a first parameter and a callback function that takes the state and the data as parameters and returns the new state.

:::note
The callback function is called when the asynchronous action status is equal to the status passed as a parameter. And this callback function has to always return the new state in order to modify the state of the signal.
:::

:::info
When the asynchronous action status is equal to `PENDING`, we don't have access to any payload. That's why we have defined the `case` of the `PENDING` status as follows:

```ts
case(fetchMovies.pending, (state) => {
  state.loading = true;

  return state;
})
```

With only a state as a parameter and we have returned the new state by setting the `loading` property to `true`.
:::

:::tip
Rather than using the `case` method to define the cases of the asynchronous action by setting the status by yourself, you can use methods like `onPending`, `onFulfilled` and `onRejected` to define the cases of the asynchronous action. These methods take a callback function that takes the state and the data as parameters and returns the new state.

```ts
asyncActions: (builder) => ({
  fetchMovies: builder
    .use(fetchMovies)
    .onPending((state) => {
      state.loading = true;

      return state;
    })
    .onFulfilled((state, data) => {
      state.movies = data;
      state.loading = false;

      return state;
    })
    .onRejected((state, error) => {
      state.error = error;
      state.loading = false;

      return state;
    }),
});
```

It's up to you to choose the method that suits you best. 😊
:::

### Step 5: Use the asynchronous action in your application

Now that we have created our asynchronous action, we can use it in our application. To do this, we will use the `useAsyncActions` hook.

Let's consider we have a component called `Movies` inside the file `Movies.tsx` and we want to fetch the movies list when the component is mounted.

```tsx Movies.tsx {5,8-14}
import React from "react";
import { useAsyncActions, useSignal } from "@dilane3/gx";

const Movies = () => {
  const { fetchMovies } = useAsyncActions("movies");
  const { movies, loading, error } = useSignal("movies");

  React.useEffect(() => {
    (async () => {
      const response = await fetchMovies();

      console.log(response);
    })();
  }, []);

  return (
    <div>
      <h1>List of movies</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

As you can see, we have used the `useAsyncActions` hook to retrieve the `fetchMovies` asynchronous action and we have used the `useSignal` hook to retrieve the `movies`, `loading` and `error` properties of the signal.

:::note
The `useAsyncActions` hook takes the name of the signal as a parameter and returns an object that contains all asynchronous actions of the signal like `useActions` hook does for `simple actions`.
:::

Inside the `useEffect` hook, we have called the `fetchMovies` asynchronous action and we have displayed the list of movies, the loading state and the error if it occurs.
The `fetchMovies` asynchronous action returns a `response` with the following structure:

```ts
{
  status: "PENDING" | "FULFILLED" | "REJECTED", // The status of the asynchronous action
  state: any, // The state of the signal
  data: any | null, // The data returned by the asynchronous action
  error: Error | null // The error if it occurs
}
```

As you can see, the `response` contains the `status` of the asynchronous action, the `state` of the signal, the `data` returned by the asynchronous action and the `error` if it occurs.

#### Why is it useful to have the state of the signal in the response ?

It's useful because sometimes we need to perform some actions with the updated state of the signal after the asynchronous action is executed. For example, we want to display a message to the user when the asynchronous action is executed successfully.

```tsx Movies.tsx {12-14}
import React from "react";
import { useAsyncActions, useSignal } from "@dilane3/gx";

const Movies = () => {
  const { fetchMovies } = useAsyncActions("movies");
  const { movies, loading, error } = useSignal("movies");

  React.useEffect(() => {
    (async () => {
      const response = await fetchMovies();

      if (response.status === "FULFILLED") {
        alert("Movies fetched successfully");
      }
    })();
  }, []);

  return (
    <div>
      <h1>List of movies</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

:::tip
Rather than using statuses like `"PENDING"`, `"FULFILLED"` and `"REJECTED"` you can just import the `AsyncActionStatuses` enum and use it to check the status of the asynchronous action.

```tsx Movies.tsx {2,12-14}
import React from "react";
import { useAsyncActions, useSignal, AsyncActionStatuses } from "@dilane3/gx";

const Movies = () => {
  const { fetchMovies } = useAsyncActions("movies");
  const { movies, loading, error } = useSignal("movies");

  React.useEffect(() => {
    (async () => {
      const response = await fetchMovies();

      if (response.status === AsyncActionStatuses.FULFILLED) {
        alert("Movies fetched successfully");
      }
    })();
  }, []);

  return (
    <div>
      <h1>List of movies</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

It's up to you to choose the method that suits you best. 😊
:::

### Step 6: Handle errors

We have seen how to handle errors in the previous step but we will see how to handle errors in a more advanced way.

After having defined the cases of the asynchronous action, we can define the `error` case of the asynchronous action by using the `onRejected` method.

```ts
asyncActions: (builder) => ({
  fetchMovies: builder
    .use(fetchMovies)
    .onRejected((state, error) => {
      state.error = error;
      state.loading = false;

      return state;
    }),
}),
```

As you can see, we have used the `onRejected` method to define the `error` case of the asynchronous action. This method takes a callback function that takes the state and the error as parameters and returns the new state. We have binded the `error` to the `error` property of the state and we have set the `loading` property to `false` to indicate that the asynchronous action is no longer loading.

By doing like this, we can handle errors in a more advanced way in our application.

```tsx Movies.tsx {12-14,18-22}
import React from "react";
import { useAsyncActions, useSignal, AsyncActionStatuses } from "@dilane3/gx";

const Movies = () => {
  const { fetchMovies } = useAsyncActions("movies");
  const { movies, loading, error } = useSignal("movies");

  React.useEffect(() => {
    (async () => {
      const response = await fetchMovies();

      if (response.status === AsyncActionStatuses.REJECTED) {
        alert(response.error.message);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  return (
    <div>
      <h1>List of movies</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

We have seen two ways to handle errors in our application.

- The first way is to handle errors by checking the status of the asynchronous action response.
- The second way is to handle errors inside the `useEffect` hook by checking the `error` property of the signal that we have defined in the case `onRejected` of the asynchronous action.

:::note
The `error` property of the signal is `null` when the asynchronous action is not rejected.
:::

Now you know how to handle errors in your application. 😊

It's over for this section. I hope you enjoyed it and that you learned a lot of things. 😊

The next section will be about [Hooks](/docs/guide/hooks).
