import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirsSteps } from './FirstSteps'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirsSteps/>
  </StrictMode>
)
