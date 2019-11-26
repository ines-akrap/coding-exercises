// Runtime: 52ms => 90%
// Memory: 34MB => 50%

const isAlienSorted = (words, order) => {
    for (let i=0; i<words.length; i++) {
        let n = 0;
        while( n < words[n].length) {
            if (words[i+1].length < n) {return false;}
            let index1 = order.indexOf(words[i][n]);
            let index2 = order.indexOf(words[i+1][n]);
            if (n1 < n2) {
                break;
            } else if (n1>n2) {
                return false;
            }
            i++;
        }
    }
    return true;
}
