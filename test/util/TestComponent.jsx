'use strict'

import React from 'react'
import useObjectState from '../../lib/useObjectState'

const TestComponent = ({initObject, newEntries}) => {
  const [object, setObject] = useObjectState(initObject)

  const updateObject = () => {
    setObject(newEntries)
  }

  return (
    <div>
      <button data-testid="button" onClick={updateObject}>Update object</button>
      <p data-testid="text">{JSON.stringify(object)}</p>
    </div>
  )
}

export default TestComponent