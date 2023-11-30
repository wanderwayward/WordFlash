import { styled } from "@mui/joy/styles";
import { Typography, Divider } from "@mui/joy";

export const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center !important",
}));

export const StyledTypographyClassification = styled(Typography)(({ theme }) => ({
    textAlign: "center !important",

}));


export const StyledDivider = styled(Divider)(({ theme }) => ({
    width:'30%',
    height: '2px',
    backgroundColor: `${theme.colorSchemes.light.palette.primary[200]} !important`,
    margin: 'auto',
    marginBottom: theme.spacing(2),    
}));
