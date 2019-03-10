'use strict'

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import TestComponent from './util/TestComponent'
import objects from './util/objects'

afterEach(cleanup)

describe('Object update tests', () => {
  test('depth 1', () => {
    const d1 = objects.depthOne

    const { getByTestId } = render(<TestComponent initObject={d1.initObject} newEntries={d1.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(d1.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(d1.merged)
  })

  test('depth 2', () => {
    const d2 = objects.depthTwo

    const { getByTestId } = render(<TestComponent initObject={d2.initObject} newEntries={d2.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(d2.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(d2.merged)
  })

  test('depth 3', () => {
    const d3 = objects.depthThree

    const { getByTestId } = render(<TestComponent initObject={d3.initObject} newEntries={d3.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(d3.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(d3.merged)
  })
})