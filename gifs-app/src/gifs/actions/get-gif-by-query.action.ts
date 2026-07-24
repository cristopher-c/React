import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

import { giphyAPI } from "../../api/gifAPI";

export const GiphyRequest = async (query: string) : Promise<Gif[]> => {
  if(query.trim().length === 0) return [];
  
  try {
    const response = await giphyAPI.get<GiphyResponse>('/search',
      {
        params:{
          q: query,
        }
      }
    );

    return response.data.data.map(
      (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
      })
    );  
  } catch (error) {
    console.error(error);  
    return [];
  }
};