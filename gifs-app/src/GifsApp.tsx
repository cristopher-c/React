import { useState } from "react"

import type { Gif } from "./gifs/interfaces/gif.interface"

import Gifs from "./gifs/components/Gifs"
import GifList from "./gifs/components/GifList"

import CustomHeader from "./shared/CustomHeader"
import CustomSearchBar from "./shared/CustomSearchBar"

import { GiphyRequest } from "./gifs/actions/get-gif-by-query.action"

export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]); 

  const [PreviousSearches, setPreviousSearches] = useState<string[]>([]);
  const handlerTerm = async (term:string) => {
    if(PreviousSearches.includes(term)) return;
    setPreviousSearches([term,...PreviousSearches].slice(0,8));

    const gifs = await GiphyRequest(term);
    setGifs(gifs)

    console.log(gifs);
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title={'Find Your Gif'} />

      {/* Search bar */}
      <CustomSearchBar 
        description="Search your favorite Gif"
        onSearch={handlerTerm}
      />

      {/* Previous Searches */}
      <Gifs searches={PreviousSearches}
      termClicked={handlerTerm}
      />

      {/* GIFS */}
      <GifList data={gifs}/>
    </>
  )
}
