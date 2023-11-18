const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const axios = require('axios');

app.post('/translate', async (req, res) => {
  const inputWord = req.body.word;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-4/completions',
      {
        prompt: `Translate the Spanish word "${inputWord}" into English and provide its meaning, example usage, and classification (noun, verb, etc.).`,
        max_tokens: 60
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    res.json(response.data.choices[0].text);
  } catch (error) {
    console.error('Error fetching response:', error);
    res.status(500).send('Error processing request');
  }
});
