interface Props {
  searches : string[]

  termClicked : (term:string) => void;
}

const Gifs = ({searches, termClicked}:Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {
          searches.map(
            (item) => (
              <li key={item}
                onClick={() => termClicked(item)}
              >{item}</li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default Gifs
