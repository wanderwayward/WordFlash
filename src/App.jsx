import { useContext } from 'react';
import { Box, Grid, CssBaseline  } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from '../src/Pages/Chat/chat.component';
import User from '../src/Pages/User/user.component';
import AuthPage from './Pages/Authentication/authentication.component';

import { ThemeValuesContext } from './contexts/theme-values.context';

const App = () => {

  const { theme } = useContext(ThemeValuesContext);

  return (
    <CssVarsProvider defaultMode="system" theme={theme}   modeStorageKey="identify-system-mode"    >
      <CssBaseline />
      <Router>
        

          {/* Outer Grid container */}
          <Grid container justifyContent="center" alignItems="center" style={{ width: '100%' }}>
            {/* Main Content */}
            <Grid  xs={12} sm={10} style={{ width: '100%' }}>
              {/* Inner Grid container */}
              <Grid container justifyContent="center" alignItems="center">
        
                <Routes>
                  <Route path="/" element={<Chat />} />
                  <Route path="/User" element={<User />} />
                  <Route path="/Auth" element={<AuthPage />} />
                </Routes>

              </Grid> {/* End of Inner Grid container */}
            </Grid> {/* End of Main Content */}
          </Grid> {/* End of Outer Grid container */}
      </Router>
      </CssVarsProvider>
  );
}

export default App;
