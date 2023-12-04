import { useContext } from 'react';
import { Sheet, Grid, CssBaseline  } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from '../src/Pages/Chat/chat.component';
import Collection from '../src/Pages/Collection/collection.component';
import AuthPage from './Pages/Authentication/authentication.component';
import NavBar from './Pages/Navigation/navbar.component';
import { ThemeValuesContext } from './contexts/theme-values.context';
import { UserContext } from './contexts/user.context';

const App = () => {

  const { theme } = useContext(ThemeValuesContext);
  const user = useContext(UserContext);
  console.log(user)

  return (
    <CssVarsProvider defaultMode="system" theme={theme} modeStorageKey="identify-system-mode">
      <CssBaseline />
      <Router>
        <Sheet variant="soft" color="neutral" display="flex" sx={{ width: "100%" }}>
          
          <NavBar />

          {/* Outer Grid container */}
          <Grid container justifyContent="center" alignItems="center" style={{ width: '100%', paddingTop: '60px' }}>
            {/* Main Content */}
            <Grid  xs={12} style={{ width: '100%' }}>
              {/* Inner Grid container */}
             

              <Grid container justifyContent="center" alignItems="center">
        
                <Routes>
                  
                  <Route path="/" element={user ? <Chat /> : <AuthPage/>} />
                  <Route path="/Collection" element={ user ? <Collection /> : <AuthPage/>} />
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
