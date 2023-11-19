import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';


dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // frontend url
}));

app.use(express.json());

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function getWordInformation(spanishWord) {
  console.log('getWordInformation', spanishWord)
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You will receive a Spanish word or phrase. Return a response in JSON format with the following fields: originalWord (the given Spanish word, if mispelled it should be corrected), englishTranslation (a direct and accurate English translation of the word), spanishDefinition (the definition of the word in Spanish; if there are multiple meanings, provide up to 2 of the most common meanings as an array of strings), exampleSentences (an array of simple and clear sentences in Spanish, each using the word in the context of its corresponding meaning, in the same order as the meanings in spanishDefinition), and classification (the grammatical classification, such as noun, verb, adjective, etc.; specify 'uncertain' if the classification is not clear). Limit the number of meanings and example sentences to a maximum of 2. If the input is not a Spanish word, return a JSON object with two fields: errorType: 'language' and errorMessage: 'Please only input a valid Spanish word or phrase.' in English and with a polite tone."
          },
          { role: "user", content: spanishWord },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });
  
      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  
  
  
app.post('/ask', async (req, res) => {
  const userInput = req.body.question;
  const response = await getWordInformation(userInput);
  if (response) {
    res.json({ answer: response });
  } else {
    res.status(500).send('Error processing your request');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
