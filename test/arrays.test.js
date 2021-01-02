'use strict';

import { renderHook, act } from '@testing-library/react-hooks';
import useObjectState from '../lib/useObjectState';
import testObjects from './util/objects';

test('array: 1-dimentional', () => {
  const arr = testObjects.array1d;
  const { result } = renderHook(() => useObjectState(arr.initObject));

  expect(result.current[0]).toStrictEqual(arr.initObject);

  act(() => result.current[1](arr.newEntries));

  expect(result.current[0]).toStrictEqual(arr.merged);
});

test('array: 2-dimentional', () => {
  const arr = testObjects.array2d;
  const { result } = renderHook(() => useObjectState(arr.initObject));

  expect(result.current[0]).toStrictEqual(arr.initObject);

  act(() => result.current[1](arr.newEntries));

  expect(result.current[0]).toStrictEqual(arr.merged);
});