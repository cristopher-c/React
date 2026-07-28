import { renderHook} from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";
import * as giphyActions from "../actions/get-gif-by-query.action";


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

  test('should return a list of gifs from cache', async () => { 
    const {result} = renderHook(() => useGifs());
    expect(result.current.gifs.length).toBe(0);
     
    await act( async() => {
      await result.current.handleTermClicked('carros');
    });
    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(giphyActions, 'GiphyRequest')
      .mockRejectedValue(new Error('Error into request from API'));

    await act( async() => {
      await result.current.handleTermClicked('carros');
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test('should not return more than 8 previuos terms', async () => { 
    const {result} = renderHook(() => useGifs());
    vi.spyOn(giphyActions, 'GiphyRequest')
      .mockResolvedValue([]);

    await act(async ()=>{
      await result.current.handlerTerm('carro1');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro2');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro3');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro4');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro5');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro6');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro7');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro8');
    });
    await act(async ()=>{
      await result.current.handlerTerm('carro9');
    });

    expect(result.current.PreviousSearches.length).toBe(8);
  });
})