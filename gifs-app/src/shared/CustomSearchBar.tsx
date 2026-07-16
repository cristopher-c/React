import { useEffect, useState } from "react";

interface Props {
  description : string

  onSearch : (query:string) => void;
}

function CustomSearchBar({description, onSearch}:Props) {

  const [query, setQuery] = useState('');
  useEffect(()=>{
    const timeToSubmit = setTimeout(()=>{
      handleSearch();
    }, 700)
        
    return () => {
      clearTimeout(timeToSubmit)
    }
  }, [query])

  const handleSearch = () => {
    if (query.trim().length < 1) return;
    onSearch(query.trim().toLowerCase());
  }
  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.keyCode === 13) handleSearch();
  }
  
  return (
    <div className="search-container">
      <input 
        type="text"
        placeholder={description}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
      >Buscar</button>
    </div>
  )
}

export default CustomSearchBar
