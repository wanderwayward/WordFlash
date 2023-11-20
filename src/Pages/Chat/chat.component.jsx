import React, { useState, useContext } from 'react';
import { Box} from "@mui/joy";
import AnswerBox from '../../components/Chat/answer-box/answer-box.component';
import QuestionBox from '../../components/Chat/question-box/question-box.component';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { WordsContext } from '../../contexts/words.context';

const Chat = () => {

  const { checks } = useContext(ThemeValuesContext);
  const { uploadWord } = useContext(WordsContext);


  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [response, setResponse] = useState({
    originalWord: '',
    englishTranslation: '',
    spanishDefinition: [],
    exampleSentences: [],
    classification: '',
    errorType: '',
    errorMessage: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const apiResponse = await fetch('http://localhost:5000/ask/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (apiResponse.ok) {
      const data = await apiResponse.json();
      setResponse(data.answer);
      uploadWord(data.answer); 
    } else {
      setResponse({ ...response, errorMessage: 'Error getting response' });
    }
    setIsLoading(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 60px)", // Adjust 60px to your navbar's height
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ overflowY: 'auto', flexGrow: 1, flexShrink: 1 }}>
        <AnswerBox response={response} checks={checks} isLoading={isLoading}/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <QuestionBox question={question} setQuestion={setQuestion} handleSubmit={handleSubmit} checks={checks}/>  
      </Box>
    </Box>
  );
}

export default Chat;
