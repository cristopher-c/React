import { useEffect, useState } from "react"

interface Props {
  id: number
}

interface Pokemon {
  id: number,
  name: string,
  imageUrl: string,
}

export const usePokemon = ({id}:Props) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemonById = async (id: number) => {
    setisLoading(true);
    const query = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await query.json();

    setPokemon({
      id: id,
      name: result.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    });
    setisLoading(false);  
  }

  useEffect(() => {
    getPokemonById(id);
  
  }, [id])
  
  return {
    pokemon,
    isLoading,
    formatedId : id.toString().padStart(3,'0'),
  }
}
