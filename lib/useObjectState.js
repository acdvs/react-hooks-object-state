/* eslint no-unused-vars: "off" */

'use strict'

import React, { useState } from 'react'

function useObjectState(initObject = {}) {
  // Create state from initial object
  const [state, setState] = useState(initObject)

  // Function for copying changed values
  // into existing stateful object
  const updateObject = (newEntries = {}) => {
    // Need to alter the current object, so copy it
    // to new variable without reference
    let objectCopy = JSON.parse(JSON.stringify(state))
    let objectKeys = Object.keys(objectCopy)

    for (let key in newEntries) {
      if (objectKeys.includes(key)) {
        // Handle nested objects
        if (typeof objectCopy[key] === 'object') {
          // No need to deep copy since reference is not used
          Object.assign(objectCopy[key], newEntries[key])
        } else {
          objectCopy[key] = newEntries[key]
        }
      }
    }

    setState(objectCopy)
  }

  // Provide initial/changed object and function to component
  return [state, updateObject]
}

export default useObjectState