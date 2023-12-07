import React, { useState, useContext } from 'react';
import { Box} from "@mui/joy";
import AnswerBox from '../../components/Chat/answer-box/answer-box.component';
import QuestionBox from '../../components/Chat/question-box/question-box.component';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { WordsContext } from '../../contexts/words.context';

const Chat = () => {

  const { checks } = useContext(ThemeValuesContext);
  const { uploadWord } = useContext(WordsContext);
  const { isMobile } = checks;

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
    errorMessage: '',
    alternativeWords: [],
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e, word= null) => {
    e?.preventDefault();
    setIsSearchInitiated(true);
    setIsLoading(true);
    
    const query = word || question;

    const apiResponse = await fetch(`${backendUrl}/ask/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question:query }),
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
        height: "calc(100vh - 60px)", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ overflowY: 'auto', flexGrow: 1, }}> 
        <AnswerBox response={response} checks={checks} isLoading={isLoading} isSearchInitiated={isSearchInitiated} handleSubmit={handleSubmit}/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: isMobile? '7%' : '7%', marginBottom: 1 }}> 
        <QuestionBox question={question} setQuestion={setQuestion} handleSubmit={handleSubmit} checks={checks}/>  
      </Box>
    </Box>
  );
}

export default Chat;
