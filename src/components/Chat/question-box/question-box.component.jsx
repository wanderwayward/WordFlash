import { Box, TextField, Button } from '@mui/material';

const QuestionBox = ({ question, setQuestion, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      <TextField
        fullWidth
        label="type your word here"
        variant="filled"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Ask
      </Button>
    </Box>
  );
};

export default QuestionBox;
