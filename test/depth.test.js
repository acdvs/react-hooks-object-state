'use strict';

import { renderHook, act } from '@testing-library/react-hooks';
import useObjectState from '../lib/useObjectState';
import testObjects from './util/objects';

test('object: depth 1', () => {
  const obj = testObjects.depth1;
  const { result } = renderHook(() => useObjectState(obj.initObject));

  expect(result.current[0]).toStrictEqual(obj.initObject);

  act(() => result.current[1](obj.newEntries));

  expect(result.current[0]).toStrictEqual(obj.merged);
});

test('object: depth 2', () => {
  const obj = testObjects.depth2;
  const { result } = renderHook(() => useObjectState(obj.initObject));

  expect(result.current[0]).toStrictEqual(obj.initObject);

  act(() => result.current[1](obj.newEntries));

  expect(result.current[0]).toStrictEqual(obj.merged);
});

test('object: depth 3', () => {
  const obj = testObjects.depth3;
  const { result } = renderHook(() => useObjectState(obj.initObject));

  expect(result.current[0]).toStrictEqual(obj.initObject);

  act(() => result.current[1](obj.newEntries));

  expect(result.current[0]).toStrictEqual(obj.merged);
});