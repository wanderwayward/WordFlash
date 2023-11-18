import { Box, Input, Button } from '@mui/joy';

const QuestionBox = ({ question, setQuestion, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Input
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
