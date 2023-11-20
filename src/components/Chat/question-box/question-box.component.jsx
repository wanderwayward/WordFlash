import { Box, Input, Button } from '@mui/joy';

const QuestionBox = ({ question, setQuestion, handleSubmit, checks }) => {
  const { isMobile, isTablet, isDark } = checks;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      p={1}
      sx={{
        width: isMobile ? '100%' : isTablet ? '80%' : '50%',
        display: 'flex',
        flexDirection: 'row',
        gap: 2
      }}
    >
      <Input
        autoFocus
        fullWidth
        placeholder="type your word here"
        variant="soft"
        color="danger"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button type="submit" variant="soft" color={isDark ? "warning" : "primary"}>
        Ask
      </Button>
    </Box>
  );                                             
};

export default QuestionBox;
