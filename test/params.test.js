'use strict'

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import TestComponent from './util/TestComponent'

afterEach(cleanup)

describe('Hook parameter tests', () => {
  test('no initial object -> no final object', () => {
    let object = { test: true }

    const { getByTestId } = render(<TestComponent newEntries={object} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual({})

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual({})
  })

  test('null update object -> same final object', () => {
    let object = { test: true }

    const { getByTestId } = render(<TestComponent initObject={object} newEntries={null} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(object)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(object)
  })

  test('no update object -> same final object', () => {
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