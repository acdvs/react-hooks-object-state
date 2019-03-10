/* eslint no-unused-vars: "off" */
'use strict'

import React, { useState } from 'react'

function useObjectState(initObject = {}) {
  // Create state from initial object
  const [state, setState] = useState(initObject)

  // Function for merging changed values
  // into existing state object
  const updateObject = (partialState) => {
    let partial = partialState

    if (typeof partial === 'function') {
      // Call function to get returned object
      partial = partialState(state)
    }

    // Only merge objects if partial has something to merge
    if (partial && typeof partial === 'object' && Object.keys(partial).length !== 0) {
      // Need to alter the current object,
      // so make deep copy without reference
      let stateCopy = JSON.parse(JSON.stringify(state))
      let stateKeys = Object.keys(stateCopy)

      for (let key in partial) {
        if (stateKeys.includes(key)) {
          // Handle nested objects
          if (typeof stateCopy[key] === 'object') {
            // No need to deep copy since reference is not used
            Object.assign(stateCopy[key], partial[key])
          } else {
            stateCopy[key] = partial[key]
          }
        }
      }

      setState(stateCopy)
    } else {
      console.error('Object or function must be passed to useObjectState setter.')
    }
  }

  // Provide initial/changed object and function to component
  return [state, updateObject]
}

export default useObjectState