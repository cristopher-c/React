import {useState} from 'react'

import type { Gif } from '../interfaces/gif.interface';
import { GiphyRequest } from '../actions/get-gif-by-query.action';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]); 
  const [PreviousSearches, setPreviousSearches] = useState<string[]>([]);
  
  const gifCache: Record<string, Gif[]> = {};
  const handlerTerm = async (term:string) => {
    if(PreviousSearches.includes(term)) return;
    setPreviousSearches([term,...PreviousSearches].slice(0,8));

    const gifs = await GiphyRequest(term);
    setGifs(gifs);

    gifCache[term] = gifs;
  }

  const handleTermClicked = async (term:string) => {
    if(gifCache[term]){
      setGifs(gifCache[term]);
      return;
    }

    const gifs = await GiphyRequest(term);
    setGifs(gifs);
  }
  
  return {
    //Values
    gifs,
    PreviousSearches,

    //Methods
    handlerTerm,
    handleTermClicked
  }
}