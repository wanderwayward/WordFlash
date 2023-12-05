import { Box, Input, Button } from '@mui/joy';

const QuestionBox = ({ question, setQuestion, handleSubmit, checks }) => {
  const { isMobile, isTablet, isLaptop, isDark } = checks;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      p={1}
      sx={{
        width: isMobile ? '100%' : isTablet ? '83%' : isLaptop ? '75%' : '43%',
        display: 'flex',
        flexDirection: 'row',
        gap: 2
      }}
    >
      <Input
        autoFocus
        fullWidth
        placeholder="Type your word here"
        variant="soft"
        color="warning"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button type="submit" variant="soft" color="success">
        Ask
      </Button>
    </Box>
  );                                             
};

export default QuestionBox;
