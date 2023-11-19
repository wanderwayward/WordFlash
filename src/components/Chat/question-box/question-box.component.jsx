import { Box, Input, Button } from '@mui/joy';

const QuestionBox = ({ question, setQuestion, handleSubmit, checks }) => {
  const { isMobile, isTablet, isDark } = checks;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: isMobile ? '100%' : isTablet ? '80%' : '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Input
        autoFocus
        fullWidth
        placeholder="type your word here"
        variant="solid"
        color="neutral"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button type="submit" variant="solid" color={isDark ? "warning" : "success"}>
        Ask
      </Button>
    </Box>
  );                                             
};

export default QuestionBox;
