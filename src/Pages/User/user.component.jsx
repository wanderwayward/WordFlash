import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { WordsContext } from '../../contexts/words.context';
import { Box, Typography, List, ListItem } from '@mui/joy';

const User = () => {

    const { user } = useContext(UserContext);
    const { words } = useContext(WordsContext);
    
    
    return (
        <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 60px)", 
          display: "flex",
          marginTop: "60px",
          flexDirection: "column",
          alignItems: "center",
        }}>
            <Box
            sx={{
                width: "70%",
                flexDirection: "row !important",
                display: "flex",
                justifyContent: "space-around",
            }}
            >
                <Typography variant="h2">
                    Sort 
                </Typography>
                <Typography variant="h2">
                    Flash Card View
                </Typography>
            </Box>

            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
                alignText: "center",
            }}>

            <List>
                {words.map(word => (
                    <ListItem>
                        {word.originalWord.toUpperCase()}-  
                         {word.englishTranslation.toUpperCase()}
                    </ListItem>
                ))}
            </List>

           </Box>
        </Box>
    )
}

export default User;