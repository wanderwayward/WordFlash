import { styled } from "@mui/material/styles";
import { TextField, Divider, Select, Toolbar, Button, Tab, Tabs, FormControlLabel, Chip } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiFilledInput-root": {
      background: "rgb(255, 255, 255)",
      transition: "box-shadow 0.3s", // Add a transition for smooth hover effect
      "&:hover": {
        boxShadow: `0 0 2px ${'theme.palette.secondary.main'}`, // Apply the glow effect on hover
        backgroundColor: 'rgb(255, 255, 255)' // maintain the white background color on hover
      },
      '&.Mui-focused': {
        backgroundColor: 'rgb(255, 255, 255)', // maintain the white background color on focus
      },
    },
    "& .MuiFilledInput-underline:before": {
      // Default underline color
      borderBottom: "1px solid #a77da6",
    },
  
    "& .MuiFilledInput-underline:after": {
      // Underline color when input is focused
      borderBottom: "2px solid #a77da6",
    },
  
    "&:hover .MuiFilledInput-underline:before": { 
      // Underline color when hovered (before focus)
      borderBottom: "1px solid #a77da6 !important",
    },
  
    "&:hover .MuiFilledInput-underline:after": { 
      // Underline color when hovered (after focus)
      borderBottom: "2px solid #523d52 !important",
    },
    "& .MuiInputLabel-filled": {
      color: 'black', // Normal state color
    },
  
    "& .MuiInputLabel-filled.Mui-focused": {
      color: theme.palette.secondary.main, // Color when the input is focused
    },
    // manage the margin here
    margin: theme.spacing(1, 0),  // this applies 1x the theme spacing unit on top and bottom, and 0 on left and right
  }));