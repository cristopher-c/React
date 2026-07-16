import type { Gif } from "../interfaces/gif.interface";

interface Props {
  data : Gif[];
}

const GifList = ({ data }:Props) => {
  return (
    <div className="gifs-container">
      {
        data.map(
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
  )
}

export default GifList

// Componente el cual va a renderizar el contenido del .map, recibiendo la data de los mockGif como property