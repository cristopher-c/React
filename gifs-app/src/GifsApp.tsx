import { mockGifs } from "./mocks-data/gifs.mock"

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Find Your Perfect Gif</h1>
        <p>Busca y comparte tu Gif perfecto</p>
      </div>

      {/* Search bar */}
      <div className="search-container">
        <input type="text" name="" id="" placeholder="Buscar Gif" />
        <button>Buscar</button>
      </div>

      {/* Previous Searches */}
      <div className="previous-searches">
        <h2>Previous Searches</h2>
        <ul className="previous-searches-list">
          <li>Cars</li>
          <li>Motir Bikes</li>
          <li>Pools</li>
        </ul>
      </div>

      {/* GIFS */}
      <div className="gifs-container">
        { 
          mockGifs.map(
            (gif) => (
              <div key={gif.id} className="gif-card">
                <img src={gif.url} alt={gif.title} />
                <h3>{gif.title}</h3>
                <p>
                  {gif.height}x{gif.width} - (1.5MB)
                </p>
              </div>
            )
          )
        }
      </div>

    </>
  )
}
