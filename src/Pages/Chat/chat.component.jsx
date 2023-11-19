import React, { useState, useContext } from 'react';
import { Box} from "@mui/joy";
import AnswerBox from '../../components/Chat/answer-box/answer-box.component';
import QuestionBox from '../../components/Chat/question-box/question-box.component';
import { ThemeValuesContext } from '../../contexts/theme-values.context';
import { set } from 'react-hook-form';

const Chat = () => {

  const { checks } = useContext(ThemeValuesContext);


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
    } else {
      setResponse({ ...response, errorMessage: 'Error getting response' });
    }
    setIsLoading(false);
  };

  return (
    <Box
    sx={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    }}>

      <AnswerBox response={response} checks={checks} isLoading={isLoading}/>
      <QuestionBox question={question} setQuestion={setQuestion}  handleSubmit={handleSubmit} checks={checks}/>  

    </Box>
  );
}

export default Chat;
