import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChaosComponents } from './index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChaosComponents>
      <App />
    </ChaosComponents>
  </StrictMode>,
)
