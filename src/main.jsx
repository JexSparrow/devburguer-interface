import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standart'
import { ToastContainer, Flip } from 'react-toastify'


import AppProvider from './hooks'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>

        <BrowserRouter>
          <Router />
        </BrowserRouter>




        <GlobalStyles />


        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Flip}
        />

      </AppProvider>
    </ThemeProvider>

  </StrictMode >,
)

// Podemos colocar algumas configs no Toast conteiner, theme, time, autoclose, etc