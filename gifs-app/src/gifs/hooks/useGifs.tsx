import {useState} from 'react'
import type { Gif } from '../interfaces/gif.interface';
import { GiphyRequest } from '../actions/get-gif-by-query.action';

export const useGifs = () => {
  
  const [gifs, setGifs] = useState<Gif[]>([]); 

  const [PreviousSearches, setPreviousSearches] = useState<string[]>([]);
  const handlerTerm = async (term:string) => {
    if(PreviousSearches.includes(term)) return;
    setPreviousSearches([term,...PreviousSearches].slice(0,8));

    const gifs = await GiphyRequest(term);
    setGifs(gifs)

    console.log(gifs);
  }
  
  return {
    //Values
    gifs,
    PreviousSearches,

    //Methods
    handlerTerm
  }
}