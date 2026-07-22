import {describe, expect, test} from 'vitest';
import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from './MyCounterApp';

describe('MyCounterApp', () => {
  test('should render default component', () => { 
    const {container} = render(<MyCounterApp/>);
    expect(container).toMatchSnapshot();
  });
  
  test('should increment the counter when press the button +1', () => { 
    render(<MyCounterApp/>);
    const counterLabel = screen.getByRole('heading', {level: 1});
    const button = screen.getByRole('button', {name: '+1'});
    fireEvent.click(button);
    expect(counterLabel.innerHTML).toContain('counter: 11');
  });
  
  test('should decrement the counter when press the button -1', () => { 
    render(<MyCounterApp/>);
    const counterLabel = screen.getByRole('heading', {level: 1});
    const button = screen.getByRole('button', {name: '-1'});
    fireEvent.click(button);
    expect(counterLabel.innerHTML).toContain('counter: 9');
  });
})