# Lifting state up in React refers to the practice of moving the state from a child component to a common parent component, allowing the parent to manage and share that state across multiple child components. This is typically done when two or more components need to share or synchronize data.

Here’s how you can lift state up in React:

# 1. Identify the Common Parent Component:
Find the common parent component of the child components that need to share the state.

# 2. Move State to the Parent Component:
Move the state that is being managed in one of the child components to the parent component. The parent will now own the state.

# 3. Pass State and Handlers as Props:
The parent will pass down the state to the children that need it via props.
The parent will also pass down a handler function to update the state. This handler will be passed to any child that needs to modify the state.

## Example

import React, { useState } from 'react';

// Parent Component
function Parent() {
  // State lifted up to the parent
  const [count, setCount] = useState(0);

  // Handler to update the state
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA count={count} onCountChange={handleCountChange} />
      <ChildB count={count} />
    </div>
  );
}

// Child A Component (Can update the state)
function ChildA({ count, onCountChange }) {
  return (
    <div>
      <h2>Child A</h2>
      <p>Count: {count}</p>
      <button onClick={() => onCountChange(count + 1)}>Increment</button>
    </div>
  );
}

// Child B Component (Can only display the state)
function ChildB({ count }) {
  return (
    <div>
      <h2>Child B</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Parent;


# Key Points:
State Lifting: The state (count) is lifted to the Parent component.
State Sharing: ChildA can modify the state, and ChildB can display it.
Callback Function: The handleCountChange function in the parent is passed to ChildA, allowing it to update the parent's state.
This pattern is commonly used to keep the state centralized when multiple components need to interact with the same data.
