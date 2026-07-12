import GifList from "./gifs/components/GifList"
import Gifs from "./gifs/components/Gifs"
import { mockGifs } from "./mocks-data/gifs.mock"
import CustomHeader from "./shared/CustomHeader"
import CustomSearchBar from "./shared/CustomSearchBar"

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title={'Find Your Gif'} />

      {/* Search bar */}
      <CustomSearchBar description="Search your favorite Gif"/>

      {/* Previous Searches */}
      <Gifs searches={['React', 'Python', 'Laravel', 'Ruby']}/>

      {/* GIFS */}
      <GifList data={mockGifs}/>

    </>
  )
}
