import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './nested-routing/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
