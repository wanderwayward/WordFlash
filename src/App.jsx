import { useContext } from 'react';
import { Sheet, Grid, CssBaseline  } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from '../src/Pages/Chat/chat.component';
import User from '../src/Pages/User/user.component';
import AuthPage from './Pages/Authentication/authentication.component';
import DrawerMobileNavigation from './Pages/Menu/menu.component';

import { ThemeValuesContext } from './contexts/theme-values.context';

const App = () => {

  const { theme } = useContext(ThemeValuesContext);

  return (
    <CssVarsProvider defaultMode="system" theme={theme}   modeStorageKey="identify-system-mode"    >
      <CssBaseline />
      <Router>
      <Sheet
        variant="soft"
        color="neutral"
        display="flex"  
        sx={{
          width: "100%",
          borderRadius: 10,
          padding: 2,
          marginBottom: -21,  
        }}
        >
       <DrawerMobileNavigation />
        

          {/* Outer Grid container */}
          <Grid container justifyContent="center" alignItems="center" style={{ width: '100%' }}>
            {/* Main Content */}
            <Grid  xs={12} style={{ width: '100%' }}>
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
        </Sheet>
      </Router>
      </CssVarsProvider>
  );
}

export default App;
