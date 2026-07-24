import { beforeEach, describe, expect, test, vi } from "vitest";
import { GiphyRequest } from "./get-gif-by-query.action";

import AxiosMockAdapter from "axios-mock-adapter";
import { giphyAPI } from "../../api/gifAPI";
import { giphyByQueryResponse } from "../../mocks-data/giphy-response.mock";

describe('get-gif-by-query.action', () => {
  const mock = new AxiosMockAdapter(giphyAPI);
  beforeEach(()=>{
    mock.reset();
  });

  test('should make query', async () => {
    mock.onGet('/search').reply(200, giphyByQueryResponse);
    const gifs = await GiphyRequest('goku');
    
    expect(gifs.length).toBe(10);
    expect(gifs.map(
      (gif) => {
        expect(typeof gif.id).toBe('string');
        expect(typeof gif.url).toBe('string');
        expect(typeof gif.title).toBe('string');
        expect(typeof gif.width).toBe('number');
        expect(typeof gif.height).toBe('number');
      }
    ));
  });
  
  test('should return an empty list if query is empty', async () => {
    mock.onGet('/search').reply(200, {data:[]});
    const gifs = await GiphyRequest('');
    console.log(gifs);
    
    expect(gifs.length).toBe(0);
  });

  test('should return a bad request', async () => {
    const handleConsoleError = vi.spyOn(console, 'error')
      .mockImplementation(() => {});

    mock.onGet('/search').reply(400, {data:{
      message: 'Bad Request'
    }}); 
    const gifs = await GiphyRequest('goku');
    
    expect(gifs.length).toBe(0);
    expect(handleConsoleError).toHaveBeenCalledTimes(1);
  });
});