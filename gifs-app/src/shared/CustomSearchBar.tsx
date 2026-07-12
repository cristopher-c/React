interface Props {
  description : string
}

function CustomSearchBar({description}:Props) {
  return (
    <div className="search-container">
      <input type="text" name="" id="" placeholder={description} />
      <button>Buscar</button>
    </div>
  )
}

export default CustomSearchBar
