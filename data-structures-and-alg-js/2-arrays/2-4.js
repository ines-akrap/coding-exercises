// Create an object that stores letters as array and func to display them as word
// function for adding a grade and a function for displaying the student’s grade average

class Word {
    constructor() {
        this.letters = [];
    }
    addLetter(letter) {
        this.letters.push(letter);
    }
    getWord() {
        return this.letters.join('');
    }
}
  
  // TESTS
  const word = new Word();
  word.addLetter('i');
  word.addLetter('n');
  word.addLetter('e');
  word.addLetter('s');
  console.log(word.getWord());
  