import React, { useState } from "react";
import Snackbar from "@mui/joy/Snackbar";
import MuiAlert from "@mui/joy/Alert";


const SnackbarFormMessage = ({ open, message, severity, position, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={position}
      variant="soft"
    >
      <MuiAlert elevation={6} variant="soft" onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>

    </Snackbar>
  );
};


export default SnackbarFormMessage;
