interface Props {
  searches : string[]
}

const Gifs = ({searches}:Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {
          searches.map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default Gifs
