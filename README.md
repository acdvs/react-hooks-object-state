# About

This package is a React hook for partially updating object states within functional components. It reflects the merge behavior of `setState` used in classical components.

**Use this** when you need an object state that shouldn't be split up into multiple states.  
**Don't use this** if you only need an object state with a few simple properties.

## Features

- Partially update object values in state without erasing any non-updated entries
- Calculate new values based on the previous state with a function argument

The use of `props` in function arguments is not included since hooks are not able to read component props and workarounds would not be effective.

## Install

```bash
$ npm install react-hooks-object-state
```

Peer dependencies: react (^16.8.0)

## Usage

Within a functional component, simply declare and use the `useObjectState` hook to create a state object. Then pass any object updates to the returned setter function to update the original object.

```jsx
import React from 'react'
import useObjectState from 'react-hooks-object-state'

const Example = () => {
  const [myObject, setMyObject] = useObjectState({bool: true, string: 'foo'})

  const updateObject = () => {
    setMyObject({bool: false})
  }

  return (
    <div>
      <button onClick={updateObject}>Update object</button>
    </div>
  )
}

// myObject after update:
// {
//   bool: false,
//   string: 'foo'
// }
```

#### Passing a function

Alternatively, you can pass a function to the setter if you need to use `state` to calculate object values.

```js
const updateObject = () => {
  setMyObject((state) => {
    return {
      string: state.str + 'bar'
    }
  })
}
```

#### Additional info

An initial object **must** be provided to `useObjectState`. This hook deep-merges objects by copying _shared_ entries from a source to a target object.

Like the classical component `setState` method, this does not create entries if they don't already exist. Providing an empty initial object will always result in an empty object.