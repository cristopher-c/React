import { describe, expect, test } from "vitest";
import { giphyAPI } from "./gifAPI";

describe('gifAPI', () => {
  test('should be configured correctly', () => { 
    const params = giphyAPI.defaults.params;
    expect(giphyAPI.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(params).toStrictEqual({
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      limit: 10,
      lang: 'es'
    });
  });
});