import { CustomHeader } from '@/heroes/shared/CustomHeader';
import { CustomStats } from '@/heroes/shared/CustomStats';
import { FilterControls } from './components/FilterControls';

export const SearchPage = () => {
  return (
    <>
      <CustomHeader title="Heroes Search Page" description="Selecciona tu super heroe favorito y customizalo"/>

      <CustomStats/>

      {/* Controls */}
      <FilterControls/>
    </>
  )
}

export default SearchPage;
