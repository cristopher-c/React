import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";
import { render, screen } from "@testing-library/react";

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
})