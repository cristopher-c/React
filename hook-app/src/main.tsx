import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { HooksApp } from './HooksApp'
import { TrafficLight } from './firs-useState/TrafficLigth'

import './index.css'
import { TrafficLightWithEfect } from './useEffect/TrafficLigthWithEffect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp/> */}
    {/* <TrafficLight/> */}
    <TrafficLightWithEfect/>
  </StrictMode>,
)
