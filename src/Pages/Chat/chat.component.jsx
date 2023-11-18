import React, { useState } from 'react';
import AnswerBox from '../../components/answer-box/answer-box.component';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question"
        />
        <button type="submit">Ask</button>
      </form>

      <AnswerBox response={response} />
           

    </div>
  );
}

export default Chat;
