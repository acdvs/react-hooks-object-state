'use strict'

import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import TestComponent from './util/TestComponent'
import functions from './util/functions'

afterEach(cleanup)

describe('Function update tests', () => {
  test('basic -> updated final object', () => {
    const obj = functions.basic

    const { getByTestId } = render(<TestComponent initObject={obj.initObject} newEntries={obj.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(obj.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(obj.merged)
  })

  test('using state -> updated final object', () => {
    const obj = functions.state

    const { getByTestId } = render(<TestComponent initObject={obj.initObject} newEntries={obj.newEntries} />)
    const p = getByTestId('text')

    // Check initial state
    expect(JSON.parse(p.textContent)).toEqual(obj.initObject)

    // Simulate click and check new state
    fireEvent.click(getByTestId('button'))
    expect(JSON.parse(p.textContent)).toEqual(obj.merged)
  })
})