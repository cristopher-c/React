import { describe, expect, test } from 'vitest';
import { add, multiply, subs } from "./math.helper";

describe('Function add', () => {
  
  test('two positive numbers', () => {
    const result = add(4,6);
    
    expect(result).toBe(10)
  })
  
  test('two negative numbers', () => {
    const a = -5;
    const b = -12;
    const result = add(a,b);
    
    expect(result).toBe(-17)
  })

  test('one negative, one positive numbers', () => {
    const result = add(-4,6);
    
    expect(result).toBe(2)
  })

})

describe('Function Substrac', () => {
  
  test('two positive numbers', () => {
    const result = subs(4,6);
    
    expect(result).toBe(-2)
  })
  
  test('two negative numbers', () => {
    const a = -5;
    const b = -12;
    const result = subs(a,b);
    
    expect(result).toBe(7)
  })

  test('one negative, one positive numbers', () => {
    const result = subs(-4,6);
    
    expect(result).toBe(-10)
  })

})

describe('Function Multiply', () => {
  
  test('two positive numbers', () => {
    const result = multiply(4,6);
    
    expect(result).toBe(24)
  })
  
  test('two negative numbers', () => {
    const a = -5;
    const b = -12;
    const result = multiply(a,b);
    
    expect(result).toBe(60)
  })

  test('one negative, one positive numbers', () => {
    const result = multiply(-4,6);
    
    expect(result).toBe(-24)
  })
  
  test('multiply for 0', () => {
    const result = multiply(4,0);
    
    expect(result).toBe(0)
  })

})
