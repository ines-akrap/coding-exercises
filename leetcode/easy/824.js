// Runtime: 56ms
// Memory: 35.5MB

const toGoatLatin = (S) => {
    const words = S.split(' ');
    const vowels = ['a','e','i','o','u'];
    for (i=0; i<words.length; i++) {
        if (vowels.indexOf(words[i][0].toLowerCase()) === -1) {
          words[i] += words[i][0];
          words[i] = words[i].substring(1);
        }
        words[i] += 'ma';
        let j=i;  
        while(j>=0) {
          words[i] = words[i] + 'a';
          j--;  
        } 
      }
    return words.join(' ');    
};
