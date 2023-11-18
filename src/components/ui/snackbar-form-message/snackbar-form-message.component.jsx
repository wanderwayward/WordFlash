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
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={position}
    >
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};


export default SnackbarFormMessage;
