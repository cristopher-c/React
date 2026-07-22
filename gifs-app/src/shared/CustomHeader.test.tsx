import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CustomHeader from "./CustomHeader";

describe('Custom Header', () => {
  const title = 'Title Provided';
  test('Should render title', () => {
    render(<CustomHeader title={title}/>);
    expect(screen.getByText(title)).toBeDefined();
  })
  
  test('Should render description', () => {
    const desc = 'Description';
    render(<CustomHeader title={title} description={desc}/>);
    expect(screen.getByRole("paragraph").innerHTML).toBe(desc);
  })
  
  test("Shouldn't render description when not provided", () => {
    const {container} = render(<CustomHeader title={title}/>);
    
    const divEle = container.querySelector('.content-center');
    const element = divEle?.querySelector('p');

    expect(element).toBeNull();
  })
})