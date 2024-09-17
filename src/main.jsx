import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/routes.jsx'
import MyGlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyGlobalStyles />
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>,
)
