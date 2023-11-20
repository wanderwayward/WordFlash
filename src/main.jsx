import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './contexts/user.context.jsx'
import {WordsContextProvider} from './contexts/words.context.jsx'


import ThemeValuesProvider from './contexts/theme-values.component.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeValuesProvider>
        <UserProvider>
          <WordsContextProvider>
            <App />
          </WordsContextProvider>
        </UserProvider>
      </ThemeValuesProvider>
  </React.StrictMode>,
)
