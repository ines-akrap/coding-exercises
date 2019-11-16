// store set of words in array and display fwd and bwd

class Words {
  constructor() {
    this.words = [];
  }
  addWord(word) {
    this.words.push(word);
  }
  getWords() {
    return this.words;
  }
  getWordsBackwards() {
    return this.words.reverse();
  }
}

// TESTS
const words = new Words();
words.addWord('ines');
words.addWord('testing');
words.addWord('functions');
console.log(words.getWords());
console.log(words.getWordsBackwards());
