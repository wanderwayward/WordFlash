import { useState } from 'react';

export const useSnackbar = (initialSeverity = 'success') => {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: initialSeverity });

    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    }
    
    const hideSnackbar = () => {
        setSnackbar({ open: false, message: '', severity: initialSeverity });
    };

    return [snackbar, showSnackbar, hideSnackbar];
};
