import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CreatorsProvider } from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreatorsProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </CreatorsProvider>
  </StrictMode>,
)
