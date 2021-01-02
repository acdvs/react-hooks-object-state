'use strict';

import { renderHook, act } from '@testing-library/react-hooks';
import useObjectState from '../lib/useObjectState';

test('params: no initial object -> no final object', () => {
  const { result } = renderHook(() => useObjectState());

  expect(typeof result.current[0]).toBe('undefined');
  expect(typeof result.current[1]).toBe('undefined');
});

test('params: no update object -> same final object', () => {
  const obj = { string: 'foo' };
  const { result } = renderHook(() => useObjectState(obj));

  expect(result.current[0]).toStrictEqual(obj);

  act(() => result.current[1]());

  expect(result.current[0]).toStrictEqual(obj);
});

test('params: mismatching update object -> same final object', () => {
  const initialObj = { string: 'foo' };
  const updateObj = { number: 1 };
  const { result } = renderHook(() => useObjectState(initialObj));

  expect(result.current[0]).toStrictEqual(initialObj);

  act(() => result.current[1](updateObj));

  expect(result.current[0]).toStrictEqual(initialObj);
});