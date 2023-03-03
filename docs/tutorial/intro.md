---
sidebar_position: 1
---

# Getting Started

Welcome to this **Tutorial section**, you will learn how to use the **`GX`** library by practicing, so we'll present to you a very nice example of how to use GX in a React application.

## Presentation

Through this Tutorial, we'll learn how to setup a global state for a `Counter Application`.

## Objectives

- Create a global state that all the components of the app will access to.
- Define two actions like `increment` and `decrement` for incrementing the counter value to 1 and decrementing it to 1 respectively.
- Put the state inside a store to make it available from anywhere.
- Access to both state and actions via two predefined hooks such as `useSignal` and `useAction`.

## Pre-requisites

We assume that you have already created a new `React` application by using `create-react-app` CLI.

After that, you have to create a new folder (`gx` folder) inside the `src` folder.

Then, inside the `gx` folder, create two new folders and name them as `signals` and `store` which will contains respectively signals and the store.

The final result which looks like the image below.

![base structure](/docs/base.png)

Ready ? Let's get started by [creating a signal](/docs/tutorial/create-a-signal)
