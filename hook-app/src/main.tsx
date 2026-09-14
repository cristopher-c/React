import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { Toaster } from 'sonner'

// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './firs-useState/TrafficLigth'
// import { TrafficLightWithEfect } from './useEffect/TrafficLigthWithEffect'
// import { PokemonPage } from './example-poke/poke  mon-page'
// import { TasksApp } from './use-Reducer/TaskApp'
// import { ScrambleWords } from './use-Reducer/ScrambleWords'
// import { InstagromApp } from './optimistic/exerciseOptimistic'
import { ClientInformation } from './use-suspense/ClientInformation'

import './index.css'
import { getUserAction } from './use-suspense/api/get-user.action'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    {/* <TrafficLightWithEfect/> */}
    {/* <PokemonPage/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <InstagromApp/> */}
    <Suspense fallback={
      <div className="bg-gradient">
        <h1 className='text-4xl text-white'>Loading...</h1>
      </div>
    }>
      <ClientInformation getUserById={getUserAction(99)}/>
    </Suspense>
  </StrictMode>,
)
