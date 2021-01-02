'use strict';

import { renderHook, act } from '@testing-library/react-hooks';
import useObjectState from '../lib/useObjectState';
import testFunctions from './util/functions';

test('function: basic', () => {
  const func = testFunctions.basic;
  const { result } = renderHook(() => useObjectState(func.initObject));

  expect(result.current[0]).toStrictEqual(func.initObject);

  act(() => result.current[1](func.newEntries));

  expect(result.current[0]).toStrictEqual(func.merged);
});

test('function: with state', () => {
  const func = testFunctions.state;
  const { result } = renderHook(() => useObjectState(func.initObject));

  expect(result.current[0]).toStrictEqual(func.initObject);

  act(() => result.current[1](func.newEntries));

  expect(result.current[0]).toStrictEqual(func.merged);
});