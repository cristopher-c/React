import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const AddMock = vi.fn();
const SubtractMock = vi.fn();
const ResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: AddMock,
    handleSubtract: SubtractMock,
    handleReset: ResetMock,
  })
}));

describe('MyCounterApp2', () => { 
  test('should render the component', () => {
    render(<MyCounterApp/>);
    screen.debug();
  });
  
  test('should call function when button is clicked', () => { 
    render(<MyCounterApp/>);
    const button = screen.getByRole('button', {name: '+1'});
    fireEvent.click(button);
    expect(AddMock).toHaveBeenCalled();
  })
})