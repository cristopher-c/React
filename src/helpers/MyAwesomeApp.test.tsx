import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "../MyAwesomeApp";
import { render, screen } from "@testing-library/react";


describe('MyAwesomeApp', () => {
 
  test('render all container', () => {
    render(<MyAwesomeApp/>); 
    screen.debug();
  })
  
  test('test  evaluate snapshot', () => {
    const {container} = render(<MyAwesomeApp/>)
    expect(container).toMatchSnapshot();
  })
  
})
