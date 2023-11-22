import { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {  IconButton } from '@mui/joy';
import { TbBookFilled } from "react-icons/tb";
import { ThemeValuesContext } from '../../contexts/theme-values.context';


const CollectionsButton = () => {

    const navigate = useNavigate();

    const {theme, checks} = useContext(ThemeValuesContext);
    const {isDark}= checks;

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
                fontSize: 'inherit',
                minWidth: '45px !important', 
                minHeight: '45px !important',}}
        >

                <TbBookFilled style={{ fontSize: '20px' }} />
          </IconButton>
    )
}

export default CollectionsButton;