# About
This package is a React hook for partially updating state objects within functional components. It reflects the behavior of `setState` used in classical components.

Use this when you need a stateful object that can't be split up into multiple states.

## Install

```bash
npm install react-hooks-object-state
```

Peer dependencies: react (^16.8.0)

## Usage

Within a functional component, simply declare and use the `useObjectState` hook to create a state object. Then pass any object updates to the returned setter function to update the original object.

Example:

```jsx
import React from 'react'
import useObjectState from 'react-hooks-object-state'

let initialObject = {
  bool: true,
  string: 'foo'
}

let newEntries = {
  bool: false
}

const Example = () => {
  const [myObject, setMyObject] = useObjectState(initialObject)

  const updateObject = () => {
    setMyObject(newEntries)
  }

  return (
    <div>
      <button onClick={updateObject}>Update object</button>
      <p>{JSON.stringify(object)}</p>
    </div>
  )
}
```

Note that an initial object <u>must</u> be provided to `useObjectState`. This hook does not merge objects but instead copies _existing_ values from a source to a target object.

Like the classical component `setState` method, this does not create entries if they don't already exist. Providing an empty initial object will always result in an empty object.