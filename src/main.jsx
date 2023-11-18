import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './contexts/user.context.jsx'
import theme from  './utils/theme.js'


import { ThemeProvider } from '@mui/material/styles'  
import ThemeValuesProvider from './contexts/theme-values.component.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeValuesProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeValuesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
