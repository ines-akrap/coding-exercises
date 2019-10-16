// Runtime: 60ms -> 81%
// Space: 35.8MB -> 100%

const hasGroupsSizeX = (deck) => {
    const partition = {};
    deck.forEach((card) => {
        if (partition[card]) {
            partition[card]++
        } else {
            partition[card] = 1;
        }
    });
    
    const min  = Math.min(...Object.values(partition));
    if (min<2) {return false;}    

    if (Object.values(partition).every(
        (value) => (greatestCommon(value,min) > 1 && v % greatestCommon(value,min) === 0))) {return true;}
    return false;
};

const greatestCommon = (a,b) => {
  while(b) {
    const c = b;
    b = a % b;
    a = c;
  }
  return a;
}