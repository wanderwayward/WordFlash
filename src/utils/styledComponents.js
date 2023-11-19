import { styled } from "@mui/joy/styles";
import { Typography, LinearProgress } from "@mui/joy";

export const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center !important",
    marginBottom: '20px',
    variant: 'soft',

}));

export const StyledLinearProgress = styled(LinearProgress)`
  & .MuiLinearProgress-bar {
    height: '10px !important';
  }
`;