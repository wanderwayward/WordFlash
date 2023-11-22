import { Box, List, ListItem, Grid, Typography } from '@mui/joy';
import Word from './word/word.component';

const Words = ({ words }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <List sx={{ width: '100%' }}>
                {/* Mapping through the words */}
                {words.map((word, index) => (
                    <Word word={word} key={index}/>
                ))}
            </List>
        </Box>
    )
}

export default Words;
