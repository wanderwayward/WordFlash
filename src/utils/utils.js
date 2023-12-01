export const AlphabeticalSort = (a, b) => {
    if(a.originalWord < b.originalWord) { return -1; }
    if(a.originalWord > b.originalWord) { return 1; }
    return 0;
  }

export const groupByClassification = (wordsArray) => {
    const classifications = ['noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'interjection', 'article', 'pronoun', 'expression'];
    const grouped = {};
  
    // Initializing each classification with an empty array
    classifications.forEach(classification => {
      grouped[classification] = [];
    });
  
    // Populating each classification array
    wordsArray.forEach(word => {
      if (grouped.hasOwnProperty(word.classification)) {
        grouped[word.classification].push(word);
      }
    });
    return grouped;
  };
