import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";

describe('useCounter', () => {
  test('should render with deafault values', () => {
    const {result} = renderHook( () => useCounter());
    expect(result.current.counter).toBe(10);
  });
  
  test('should render with props', () => {
    const {result} = renderHook( () => useCounter(25));
    expect(result.current.counter).toBe(25);
  });
  
  test('should increment when handleAdd is called', () => {
    const {result} = renderHook( () => useCounter());
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(11);
  });
  
  test('should decrement when handlerSubtract is called', () => {
    const {result} = renderHook( () => useCounter());
    act(() => {
      result.current.handleSubtract();
    });
    expect(result.current.counter).toBe(9);
  });
  
  test('should reset to initialValue when handlerReset is called', () => {
    const {result} = renderHook( () => useCounter());
    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleReset();
    });
    expect(result.current.counter).toBe(10);
  });
})