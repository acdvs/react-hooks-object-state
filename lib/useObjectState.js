'use strict';

import { useState } from 'react';

function useObjectState(initObject) {
  if (!isFilledObject(initObject)) {
    console.warn('A non-empty object must be provided to useObjectState. State not created.');
    return [];
  }

  const [state, setState] = useState(initObject);

  const updateObject = (partialState) => {
    if (typeof partialState === 'function') {
      partialState = partialState(state);
    }

    if (!isFilledObject(partialState)) {
      console.warn('An object or function returning an object must be passed to useObjectState setter. State not updated.');
      return;
    }

    let stateCopy = Object.assign({}, state);
    const stateKeys = Object.keys(stateCopy);

    for (const [partialKey, partialVal] of Object.entries(partialState)) {
      if (stateKeys.includes(partialKey)) {
        if (typeof stateCopy[partialKey] === 'object') {
          Object.assign(stateCopy[partialKey], partialVal);
        } else {
          stateCopy[partialKey] = partialVal;
        }
      }
    }

    setState(stateCopy);
  };

  return [state, updateObject];
}

function isFilledObject(obj) {
  if (
    !obj ||
    typeof obj !== 'object' ||
    Object.keys(obj).length === 0
  ) {
    return false;
  }

  return true;
}

export default useObjectState;
export {
  isFilledObject
};