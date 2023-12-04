import { styled } from "@mui/joy/styles";
import { Typography, Divider } from "@mui/joy";

export const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center !important",
    
}));


export const StyledTypographyResponseWord = styled(Typography)(({ theme, checks }) => {
    const { isMobile, isTablet, isLaptop } = checks;

    return {
        textAlign: 'center !important',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        fontSize: isMobile ? '22px' : isTablet ? '30px' : isLaptop ? '35px' : '38px',
        WebkitLineClamp: isMobile ? 3 : 2,
        WebkitBoxOrient: 'vertical',
    };
});

export const StyledTypographyClassification = styled(Typography)(({ theme }) => ({
    textAlign: "center !important",

}));

export const StyledTypographyWord = styled(Typography)(({ theme }) => ({
    overflowX: 'hidden', 
    textOverflow: 'ellipsis', 
    whiteSpace: 'nowrap', 
    fontWeight: 500, 
    textAlign: 'center',
    position: 'relative',
}));


export const StyledDivider = styled(Divider)(({ theme }) => ({
    width:'30%',
    height: '2px',
    backgroundColor: `${theme.colorSchemes.light.palette.primary[200]} !important`,
    margin: 'auto',
    marginBottom: theme.spacing(2),    
}));
