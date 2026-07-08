import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const name = 'Test Item';
    render(<ItemCounter productName={name}/>);
    expect(screen.findByText(name)).toBeDefined();
  })
  
  test('should render with quantity defined', () => {
    const name = 'Test Item';
    const quantity = 25;

    render(<ItemCounter productName={name} productQuantity={quantity}/>);
    expect(screen.findByText(quantity)).toBeDefined();
  })
  
  test('should decrease when -1 bottom is pressed', () => {
    render(<ItemCounter productName={'Test Item'} productQuantity={10}/>);
    
    const [bottonToEvalute] = screen.getAllByRole('button');

    fireEvent.click(bottonToEvalute);

    expect(screen.findByText(9)).toBeDefined();
    
  })

  test('should increase when +1 bottom is pressed', () => {
    render(<ItemCounter productName={'Test Item'} productQuantity={10}/>);
    
    const [_,bottonToEvalute] = screen.getAllByRole('button');

    fireEvent.click(bottonToEvalute);

    expect(screen.findByText(11)).toBeDefined();
    
  })
  
  test('should not decrease when -1 bottom is pressed and quantity is 1', () => {
    render(<ItemCounter productName={'Test Item'} productQuantity={1}/>);
    
    const [bottonToEvalute] = screen.getAllByRole('button');

    fireEvent.click(bottonToEvalute);

    expect(screen.findByText(1)).toBeDefined();
    
  })
})