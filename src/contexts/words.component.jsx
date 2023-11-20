import { createContext, useState, useEffect } from "react";
import { addWord, getWords } from "../utils/firebase-utils";
import { UserContext } from "./user.context";

export const WordsContext = createContext();

const WordsContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const { user } = useContext(UserContext);

    useEffect(() => {
    const userWords = async () => {
      const words = await getWords(user.uid);
      setWords(words);
    };
    }, [user]);


  const uploadWord = async (word) => {
    word = { ...word, userId: user.uid };
    const newWord = await addWord(word);
    setWords([...words, newWord]);
  }


  return (
    <WordsContext.Provider value={{ words, setWords,  }}>
      {children}
    </WordsContext.Provider>
  );
}


export default WordsContextProvider;