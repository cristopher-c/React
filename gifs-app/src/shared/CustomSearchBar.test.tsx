import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CustomSearchBar from "./CustomSearchBar";

describe('CustomSearchBar', () => {
  const desc = 'hola mundo';
  test('should render with default values', () => {
    const func = vi.fn();
    const {container} = render(<CustomSearchBar description={desc} onSearch={func}/>);
    expect(container).toMatchSnapshot();
  });
  
  test('should call onSearch after 700ms with a value', async () => {
    const onSearch = vi.fn();
    render(<CustomSearchBar description={desc} onSearch={onSearch}/>);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {value: 'test'}});
    
    await waitFor(()=>{
      expect(onSearch).toHaveBeenCalled();
      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });
  
  test('should evaluate the correct debounce', async () => {
    const onSearch = vi.fn();
    render(<CustomSearchBar description={desc} onSearch={onSearch}/>);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {value: 't'}});
    fireEvent.change(input, {target: {value: 'te'}});
    fireEvent.change(input, {target: {value: 'tes'}});
    fireEvent.change(input, {target: {value: 'test'}});


    await waitFor(()=>{
      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });

  test('should call the funciotn onSearch when button is clicked', () => {
    const onSearch = vi.fn();
    render(<CustomSearchBar description={desc} onSearch={onSearch}/>);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {value: 'test'}});

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});