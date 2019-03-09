'use strict'

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import TestComponent from './util/TestComponent'
import objects from './util/objects'

afterEach(cleanup)

describe('Array update tests', () => {
  test('1-dimentional', () => {
    const a1 = objects.array1d

    const { getByTestId } = render(<TestComponent initObject={a1.initObject} newEntries={a1.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(a1.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(a1.merged)
  })

  test('2-dimentional', () => {
    const a2 = objects.array2d

    const { getByTestId } = render(<TestComponent initObject={a2.initObject} newEntries={a2.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(a2.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(a2.merged)
  })
})