# React Context API and how it solves the issue of prop-drilling.

# Key Concepts:
# Root Component: This is the top-level component in a React application.

# Prop Drilling: In traditional React, to share data (state) between deeply nested components, you pass the state down through multiple levels of components via props. This can become cumbersome as the application grows, since intermediate components that don't need the data still receive and pass it down to the lower levels.

# State: A piece of data that needs to be shared between components.

# How the Context API Helps:
The Context API allows for state to be shared directly between components without having to pass it down through each level individually. This means:

Components like D, E, F, G, H, which are nested deeper in the tree, can access the shared state without having to receive it from their immediate parent components (A, B, or C).

The state is managed at the root level and can be accessed by any child component that needs it, thus solving the prop-drilling problem.
In essence, the Context API provides a way to efficiently manage and distribute global state across a React component tree.

## UseContext
The useContext hook in React is a way to access and use context values without needing to pass props manually through every level of the component tree. It works with the Context API, which is designed to provide and share values globally across components without "prop drilling.

# Why Use useContext?
The primary advantage of useContext is that it eliminates the need for prop drilling. Instead of passing props through many layers of components, useContext allows any deeply nested component to access the values directly.


# Example
import React, { createContext, useContext } from 'react';

// 1. Create a Context
const UserContext = createContext();

function App() {
  const user = { name: 'Ujwala', age: 22 };

  return (
    // 2. Provide the context value to the component tree
    <UserContext.Provider value={user}>
      <ParentComponent />
    </UserContext.Provider>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  // 3. Consume the context value using useContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
    </div>
  );
}

export default App;


# How the Example Works:
Context Creation: UserContext is created using createContext().

Context Provider: UserContext.Provider in App wraps the component tree and provides the value user to its children.

Context Consumption: ChildComponent uses the useContext(UserContext) to retrieve the user object and display the name and age properties