import Gifs from "./gifs/components/Gifs"
import GifList from "./gifs/components/GifList"

import CustomHeader from "./shared/CustomHeader"
import CustomSearchBar from "./shared/CustomSearchBar"

import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {

  const {gifs,PreviousSearches,handlerTerm, handleTermClicked} = useGifs();

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
      termClicked={handleTermClicked}
      />

      {/* GIFS */}
      <GifList data={gifs}/>
    </>
  )
}
