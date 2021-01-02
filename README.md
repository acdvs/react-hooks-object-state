[![License][license-img]][license-link]
[![NPM Version][npm-img]][npm-link]
[![Travis Build Status][travis-img]][travis-link]
[![Codecov][coverage-img]][coverage-link]

## About

A React hook for partially updating object states within functional components that avoids the default behavior of `useState` that overwrites the entire object state. It reflects the merge behavior of `setState` used in classical components.

**Use this** when you need an object state that shouldn't be split up into multiple states.  
**Don't use this** if you only need an object state with a few simple properties.

## Features

- Partially update object values in state without erasing any non-updated entries
- Calculate new values based on the previous state with a function argument

## Install

```bash
$ npm install react-hooks-object-state
```

Peer dependencies: react (^16.8.0)

## Usage

Within a functional component, simply declare and use the `useObjectState` hook to create a state object. Then pass any object updates to the returned setter function to update the original object.

```jsx
import React from 'react';
import useObjectState from 'react-hooks-object-state';

const Example = () => {
  const [myObject, setMyObject] = useObjectState({ bool: true, string: 'foo' });

  const updateObject = () => setMyObject({ bool: false });

  return <button onClick={updateObject}>Update object</button>;
}

// myObject after update:
// {
//   bool: false,
//   string: 'foo'
// }
```

#### Passing a function

Alternatively, you can pass a function to the setter if you need to use the previous state to calculate new state values.

```jsx
const updateObject = () => {
  setMyObject((state) => {
    return {
      string: state.str + 'bar'
    }
  })
}
```

The use of `props` in function arguments is not included since hooks are not able to read component props, and workarounds would not effectively replicate the classical `setState` behavior.

#### Additional info

An initial object **must** be provided to `useObjectState`. This hook deep-merges objects by copying common entries from a source to a target object.

Like the classical `setState` method, this does not create entries if they don't already exist. Providing an empty initial object will always result in an empty object.

[license-img]: https://img.shields.io/github/license/acdvs/react-hooks-object-state
[license-link]: https://github.com/acdvs/react-hooks-object-state/blob/master/LICENSE

[npm-img]: https://img.shields.io/npm/v/react-hooks-object-state
[npm-link]: https://www.npmjs.com/package/react-hooks-object-state

[travis-img]: https://img.shields.io/travis/acdvs/react-hooks-object-state
[travis-link]: https://travis-ci.org/acdvs/react-hooks-object-state

[coverage-img]: https://img.shields.io/codecov/c/gh/adamdavies001/react-hooks-object-state
[coverage-link]: https://codecov.io/gh/adamdavies001/react-hooks-object-state