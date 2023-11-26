import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {  IconButton } from '@mui/joy';
import { TbBookFilled } from "react-icons/tb";
import { ThemeValuesContext } from '../../contexts/theme-values.context';


const CollectionsButton = ({theme, checks}) => {

    const navigate = useNavigate();

    const {isDark, isMobile, isTablet, isLaptop}= checks;

    const handleCollectionsClick = () => {
        navigate('/Collection')
    }


    return (
        <IconButton size='lg'
            onClick={handleCollectionsClick}
            sx={{
                overflow: 'hidden',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: isDark ? `0.5px solid ${theme.colorSchemes.dark.palette.neutral[700]}` : `0.5px solid ${theme.colorSchemes.light.palette.neutral[300]}`,
                borderRadius: '8px', 
                fontSize: isMobile ? '20px' : '30px',
                minWidth: isMobile? '45px !important': '60px !important', 
                minHeight: isMobile? '45px !important': '60px !important', 
            }}
        >

                <TbBookFilled />
          </IconButton>
    )
}

export default CollectionsButton;