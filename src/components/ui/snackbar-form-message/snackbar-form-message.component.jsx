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
      variant="solid"
      color="warning"
      sx={{
        height: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MuiAlert elevation={6}  color="warning" variant="solid" onClose={handleClose} severity={severity}   sx={{
        height: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {message}
      </MuiAlert>

    </Snackbar>
  );
};


export default SnackbarFormMessage;
