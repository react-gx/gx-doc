---
sidebar_position: 3
---

# useOperations

:::info
`useOperations` is available since version `1.3.0`
:::

The `useOperations` hook is used to retrieve operations of a [signal](/docs/guide/signals.md) that has been recorded in the [store](/docs/guide/store.md).

It takes the name of the [signal](/docs/guide/signals.md) as parameter and returns an object that contains all the operations of this signal.

```js
const { isProductExists } = useOperations("product");
```

The operation `isProductExists` will be used to check if a product exists in the state and will return the product if it exists or `undefined` if it doesn't exist.

You have to define the operations in the `operations` object of the `createSignal` function like follow:

```js
import { createSignal } from "@dilane3/gx";

const productsSignal = createSignal({
  name: "product",
  state: [],
  actions: {
    // some actions here
  },

  // Operations section
  operations: {
    isProductExists: (state, payload) => {
      return state.find((product) => product.id === payload.id);
    },
  },
});

export default productsSignal;
```

Then, you can use it inside your component like follow.

```js
import React from "react";
import { useOperations } from "@dilane3/gx";
import ProductItem from "./ProductItem";

function ProductDetails() {
  // State
  const products = useSignal("product");

  // Operations
  const { isProductExists } = useOperations("product");

  if (!isProductExists({ id: 1 })) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <ProductItem data={products[1]} />
    </div>
  );
}
```

---

**Structure**

- **useOperations**

| Properties | Type     | Status     | Description                                |
| ---------- | -------- | ---------- | ------------------------------------------ |
| `name`     | `string` | `required` | The name of the signal. It must be unique. |
