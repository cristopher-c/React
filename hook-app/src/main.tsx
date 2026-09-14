import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './firs-useState/TrafficLigth'
// import { TrafficLightWithEfect } from './useEffect/TrafficLigthWithEffect'
// import { PokemonPage } from './example-poke/poke  mon-page'
// import { TasksApp } from './use-Reducer/TaskApp'
// import { ScrambleWords } from './use-Reducer/ScrambleWords'

import { Toaster } from 'sonner'

import './index.css'
import { InstagromApp } from './optimistic/exerciseOptimistic'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEfect/> */}
    {/* <PokemonPage/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    <InstagromApp/>
  </StrictMode>,
)
