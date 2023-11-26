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
            content: "You will receive a Spanish word or phrase. Return a response in JSON format with the following fields: originalWord (correct any misspelled Spanish word or phrase), word (This will be the original word plus the inclussion of the relevant article (el/la) for nouns; use 'el/la' for nouns with both genders, the end result will be El/La originalWord accordingly. If the word is not a noun this field will be the same as originalWord), englishTranslation (for single words, provide a direct translation; for compound words or idiomatic expressions, give a translation that captures the overall meaning), spanishDefinition (an array of up to 2 common meanings, each as a separate string), exampleSentences (an array of Spanish sentences, each corresponding to the meanings in the spanishDefinition, in the same order), classification (limit to: 'noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'interjection', 'article', 'pronoun'; use 'uncertain' for compound or idiomatic expressions that do not fit these categories), and note (a brief note in one sentence, if the word or phrase is particularly associated with specific Spanish-speaking regions, mentioning any significant regional variations in meaning or usage). If the input is not a Spanish word or phrase, return a JSON object with two fields: errorType: 'language' and errorMessage: 'Please input a valid Spanish word or phrase.'"

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
