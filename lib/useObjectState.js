'use strict';

import React, { useState } from 'react';

function useObjectState(initObject = {}) {
  const [state, setState] = useState(initObject);

  const updateObject = (partialState) => {
    let partial = partialState;

    if (typeof partial === 'function') {
      partial = partialState(state);
    }

    if (
      !partial ||
      typeof partial !== 'object' ||
      Object.keys(partial).length === 0
    ) {
      console.error('Object or function returning object must be passed to useObjectState setter. State not updated.');
      return;
    }

    let stateCopy = Object.assign({}, state);
    let stateKeys = Object.keys(stateCopy);

    for (let [key, val] of Object.entries(partial)) {
      if (stateKeys.includes(key)) {
        if (typeof stateCopy[key] === 'object') {
          Object.assign(stateCopy[key], val);
        } else {
          stateCopy[key] = val;
        }
      }
    }

    setState(stateCopy);
  }

  // Provide initial/changed object and function to component
  return [state, updateObject];
}

export default useObjectState;