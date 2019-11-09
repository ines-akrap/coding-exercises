// replace all spaces with %20

const urlify = (string, length) => {
  if (string.length !== length) {
    string = string.slice(0, length);  // could also use .trim()
  }
  return string.split(' ').join('%20');
}

// TESTS
console.log(urlify("Mr John Smith   ", 13));
console.log(urlify("i n e s", 8));
console.log(urlify("ines", 4));