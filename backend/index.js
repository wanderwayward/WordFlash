import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';


dotenv.config();

const app = express();

app.use(cors({
  origin:[ 'https://word-flash.vercel.app', 'https://word-flash-ruben-aguirres-projects.vercel.app', 'http://localhost:5173/'] // frontend url
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
            content: "Before processing, verify if the input is a recognized Spanish word or phrase, prioritizing common usage and standard dictionary definitions. Exclude archaic, highly regional, or obsolete terms. For inputs that are nonsensical or do not correspond to any known Spanish words (such as random keystrokes or non-words), directly use the error handling procedure defined below. " +
            "If the input is a valid and existing Spanish word or phrase, return a JSON response with the following fields: " +
            "originalWord: Correct any missing accents. " +
            "word: This will be the original word plus the inclusion of the relevant article (el/la) for nouns; use 'el/la' for nouns with both genders. The end result will be El/La originalWord accordingly. If the word is not a noun, this field will be the same as originalWord. " +
            "englishTranslation: For single words, provide a direct translation; for compound words or idiomatic expressions, give a translation that captures the overall meaning. " +
            "spanishDefinition: An array of up to 2 common meanings, each as a separate string. " +
            "exampleSentences: An array of Spanish sentences, each corresponding to the meanings in the spanishDefinition, in the same order. " +
            "classification: Limit to 'noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'interjection', 'article', 'pronoun'; use 'expression' for compound or idiomatic expressions that do not fit these categories. " +
            "note: A brief note in one sentence, if the word or phrase is particularly associated with specific Spanish-speaking regions, mentioning any significant regional variations in meaning or usage. " +
            "If the input is not a valid or existing Spanish word or phrase, or if it is nonsensical (such as random strings of letters with no meaning in Spanish), return a JSON object with the following fields: " +
            "errorType: 'language', " +
            "errorMessage: 'The input is not a valid or existing Spanish word or phrase.', " +
            "alternativeWords: An array of up to 3 alternative REAL words or phrases that are STRICTLY in the Spanish language, STRICTLY pre-existing words. These alternatives should be selected based on their phonetic similarity to the original input, common misspellings, or semantic relevance within the Spanish language context. The goal is to provide suggestions that the user might have intended to input, focusing exclusively on Spanish vocabulary. This excludes any words or phrases from other languages, particularly English. For example, if the input is a non-existent word that resembles a Spanish word, the alternatives should be real Spanish words with similar phonetics or spelling."
            
            
            
            
                      
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
