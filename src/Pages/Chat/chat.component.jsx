import React, { useState } from 'react';
import { Paper, Grid } from "@mui/material";
import AnswerBox from '../../components/answer-box/answer-box.component';
import QuestionBox from '../../components/question-box/question-box.component';

const Chat = () => {
  const [question, setQuestion] = useState('');
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
    console.log('starting handleSubmit');
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
  };

  return (
    <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      backgroundColor: "primary.main",
    }}
    >

      <AnswerBox response={response} />
      <QuestionBox question={question} setQuestion={setQuestion}  handleSubmit={handleSubmit}/>  

    </Paper>
  );
}

export default Chat;
