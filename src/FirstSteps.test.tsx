import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstSteps } from "./FirstSteps";

vi.mock('./shoping-cart/ItemCounter', () => ({
  default: () => <div data-testid="ItemCounter"/>,
}));

describe('FirstSteps', ()=> {

  test('should match snapshot', () => {
    const {container} = render(<FirstSteps/>);
    expect(container).toMatchSnapshot();
  })

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstSteps/>);
    
    const element = screen.getAllByTestId('ItemCounter');

    expect(element.length).toBe(4);

  })

})