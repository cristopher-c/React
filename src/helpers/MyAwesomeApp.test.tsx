import { describe, test } from "vitest";
import { MyAwesomeApp } from "../MyAwesomeApp";
import { render, screen } from "@testing-library/react";


describe('MyAwesomeApp', () => {
 
  test('render name and lastname', () => {
    render(<MyAwesomeApp/>); 
    screen.debug();    
  })
  
})
