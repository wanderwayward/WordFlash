import React, { useState } from 'react';
import { Sheet, Grid } from "@mui/joy";
import AnswerBox from '../../components/Chat/answer-box/answer-box.component';
import QuestionBox from '../../components/Chat/question-box/question-box.component';

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
    <Sheet
    sx={{
      padding: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      backgroundColor: "secondary.main",
    }}
    >

      <AnswerBox response={response} />
      <QuestionBox question={question} setQuestion={setQuestion}  handleSubmit={handleSubmit}/>  

    </Sheet>
  );
}

export default Chat;
