'use strict'

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import TestComponent from './util/TestComponent'

afterEach(cleanup)

describe('Hook parameter tests', () => {
  test('no parameters', () => {
    let object = { test: true }

    const { getByTestId } = render(<TestComponent newEntries={object} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual({})

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual({})
  })

  test('no update object', () => {
    let object = { test: true }

    const { getByTestId } = render(<TestComponent initObject={object} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(object)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(object)
  })
})