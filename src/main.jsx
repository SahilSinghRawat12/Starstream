import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      // add more flags if you want to opt into them early:
      // v7_fetcherPersist: true,
      // v7_normalizeFormMethod: true,
      // v7_partialHydration: true,
      // v7_skipActionErrorRevalidation: true
    }}>
     <AppContextProvider>
     <App/>
      <Toaster   position="bottom-left"
                reverseOrder={false}/>
     </AppContextProvider>
  </BrowserRouter>
)
