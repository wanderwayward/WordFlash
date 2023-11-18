import {  Box } from "@mui/joy";

const AnswerBox = ({response}) => {
    console.log(response);
    return (
        <Box>
        {response.errorMessage ? (
        <p>Error: {response.errorMessage}</p>
            ) : (
        <div>
          <p>Original Word: {response.originalWord}</p>
          <p>English Translation: {response.englishTranslation}</p>
          <p>Classification: {response.classification}</p>
          <p>Spanish Definitions</p>
          <ul>
            {response.spanishDefinition.map((definition, index) => (
              <li key={index}>{definition}</li>
            ))}
            </ul>

          <p>Example Sentences:</p>
          <ul>
            {response.exampleSentences.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>
         )}
        </Box>
    )
}

export default AnswerBox;