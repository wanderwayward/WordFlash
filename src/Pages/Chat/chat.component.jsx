import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [inputWord, setInputWord] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/engines/gpt-4/completions', {
        prompt: `Translate the Spanish word "${inputWord}" into English and provide its meaning, example usage, and classification (noun, verb, etc.).`,
        max_tokens: 60,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_API_KEY`
        }
      });
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <input type="text" value={inputWord} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Translate</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ChatGPT;
