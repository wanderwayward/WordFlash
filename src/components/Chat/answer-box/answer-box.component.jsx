import { Box, Typography, List, ListItem, Alert, Sheet } from "@mui/joy";

const AnswerBox = ({ response }) => {
  console.log(response)
  return (
    <Box sx={{ margin: 'auto', width: '100%' }}>
      {response.errorMessage ? (
        <Alert severity="error">
          Error: {response.errorMessage}
        </Alert>
      ) : (
        <Sheet variant="soft" color="primary" sx={{ padding: 2, borderRadius:5, margin:'auto' }}>
          <Typography level="h4" component="div">
            Original Word: {response.originalWord}
          </Typography>
          <Typography level="h4" component="div">
            English Translation: {response.englishTranslation}
          </Typography>
          <Typography level="h5" component="div">
            Classification: {response.classification}
          </Typography>
          <Typography level="h5" component="div">Spanish Definitions:</Typography>
          <List>
            {response.spanishDefinition.map((definition, index) => (
              <ListItem key={index}>{definition}</ListItem>
            ))}
          </List>
          <Typography level="h6" component="div">Example Sentences:</Typography>
          <List>
            {response.exampleSentences.map((sentence, index) => (
              <ListItem key={index}>{sentence}</ListItem>
            ))}
          </List>
        </Sheet>
      )}
    </Box>
  );
};

export default AnswerBox;
