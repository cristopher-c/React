import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirsSteps } from './FirstSteps'
import { MyAwesomeApp } from './MyAwesomeApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirsSteps/>
    <MyAwesomeApp/>
  </StrictMode>
)
