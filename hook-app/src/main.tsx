import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './firs-useState/TrafficLigth'
// import { TrafficLightWithEfect } from './useEffect/TrafficLigthWithEffect'
// import { PokemonPage } from './example-poke/poke  mon-page'
import { TasksApp } from './use-Reducer/TaskApp'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEfect/> */}
    {/* <PokemonPage/> */}
    <TasksApp/>
  </StrictMode>,
)
