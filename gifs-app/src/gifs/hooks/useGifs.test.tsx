import { renderHook} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";

describe('useGifs', () => {
  test('should return default values and methods', () => { 
    const {result} = renderHook(() => useGifs());
    expect(result.current.PreviousSearches.length).toBe(0);
    expect(result.current.gifs.length).toBe(0);
    expect(result.current.handleTermClicked).toBeDefined();
    expect(result.current.handlerTerm).toBeDefined();
  });
  
  test('should render a list of gifs', async () => {
    const {result} = renderHook(() => useGifs());
    await act(async() => {
      await result.current.handlerTerm('carros');
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test('should render a list of gifs when handleTermClicked is clicked', async () => { 
    const {result} = renderHook(() => useGifs());
    expect(result.current.gifs.length).toBe(0);
    await act( async() => {
      await result.current.handleTermClicked('carros');
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs from cache', () => { 
    
  })
})