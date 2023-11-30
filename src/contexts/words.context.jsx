import { createContext, useState, useEffect, useContext } from "react";
import { addWord, getWords, deleteWord} from "../utils/firebase-utils";
import { UserContext } from "./user.context";
import { AlphabeticalSort, groupByClassification } from "../utils/utils";
import { set } from "react-hook-form";

export const WordsContext = createContext();

const WordsContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [alphabeticalWords, setAlphabeticalWords] = useState([]);
  const [classificationWords, setClassificationWords] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { user, loading: userLoading } = useContext(UserContext);

  const userWords = async () => {
    setIsLoading(true);
    const words = await getWords(user.uid);
    setWords(words);
    setIsLoading(false);
  };



    useEffect(() => {
    if (user) {
      userWords();
    }
    }, [user]);

    useEffect(() => {
      if (words.length === 0) {
          return;
      }
      const classifiedWords = groupByClassification([...words].sort(AlphabeticalSort))
      setAlphabeticalWords([...words].sort(AlphabeticalSort))
      setClassificationWords(classifiedWords)

    }, [words])


    const uploadWord = async (word) => {
      if (word.errorMessage) {
          return;
      }
      // Check if the word already exists
      const wordExists = words.some(existingWord => existingWord.originalWord === word.originalWord);
        // Abort the upload if the word already exists
      if (wordExists) {
          console.log("Word already exists in the array.");
          return;
      }
  
      // Proceed with the upload if the word does not exist
      word = { ...word, userId: user.uid };
      const newWord = await addWord(word);
      setWords([...words, newWord]);
      userWords();
  }
  

  const deleteWordFromCollection = async (word) => {
    console.log("start delete word");
    await deleteWord(word.id);
    const newWords = words.filter((w) => w.id !== word.id);
    setWords(newWords);
  };

  const combinedLoading = userLoading || isLoading; 





  return (
    <WordsContext.Provider value={{ isLoading: combinedLoading, words, setWords, alphabeticalWords, classificationWords, uploadWord, deleteWordFromCollection  }}>
      {children}
    </WordsContext.Provider>
  );
}


export default WordsContextProvider;