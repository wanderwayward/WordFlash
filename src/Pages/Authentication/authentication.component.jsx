// React and hooks
import React, { useState, useContext } from 'react';

import Box from '@mui/joy/Box';

// Components
import SignInForm from '../../components/Authentication/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/Authentication/sign-up-form/sign-up-form.component';
import SnackbarFormMessage from '../../components/ui/snackbar-form-message/snackbar-form-message.component';
import { UserContext } from '../../contexts/user.context';
import { ThemeValuesContext } from '../../contexts/theme-values.context';

// Hooks
import { useSnackbar } from '../../hooks/useSnackbar';

const AuthPage = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();

  const switchToSignUp = () => setShowSignUp(true);
  const switchToSignIn = () => setShowSignUp(false);

  const { checks } = useContext(ThemeValuesContext);
  const {isMobile} = checks;



  return (
    <Box
    sx={{
      width: "100%",
      height: `calc(100vh - 60px)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    }}>
      <Box 
      width="400px"
      sx={{
        margin: isMobile ?'40% auto' : '10% auto'
      }}
      >
        {showSignUp ? (
          <SignUpForm switchToSignIn={switchToSignIn} showSnackbar={showSnackbar} />
        ) : (
          <SignInForm switchToSignUp={switchToSignUp} showSnackbar={showSnackbar} />
        )}
      </Box>

      <SnackbarFormMessage
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        position={{ vertical: 'top', horizontal: 'center' }}
        onClose={hideSnackbar}
      />
    </Box>
  );
};

export default AuthPage;