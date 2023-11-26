import React, { useState, useContext } from 'react';
import { Box} from "@mui/joy";
import AnswerBox from '../../components/Chat/answer-box/answer-box.component';
import QuestionBox from '../../components/Chat/question-box/question-box.component';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { WordsContext } from '../../contexts/words.context';

const Chat = () => {

  const { checks } = useContext(ThemeValuesContext);
  const { uploadWord } = useContext(WordsContext);

  const { isMobile, isTablet } = checks;


  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const [response, setResponse] = useState({
    originalWord: '',
    word:'',
    englishTranslation: '',
    spanishDefinition: [],
    exampleSentences: [],
    classification: '',
    note:'',
    errorType: '',
    errorMessage: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSearchInitiated(true);
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
    height: "calc(100vh - 60px)", // Account for the navbar
    display: "flex",
    flexDirection: "column",
  }}
>
  <Box sx={{ overflowY: 'auto', flexGrow: 1, }}> {/* Adjust flexGrow as needed */}
    <AnswerBox response={response} checks={checks} isLoading={isLoading} isSearchInitiated={isSearchInitiated}/>
  </Box>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '6vh', paddingBottom: isMobile ? 8 : 1}}> {/* Set a fixed height or percentage for QuestionBox */}
    <QuestionBox question={question} setQuestion={setQuestion} handleSubmit={handleSubmit} checks={checks}/>  
  </Box>
</Box>

  );
}

export default Chat;
