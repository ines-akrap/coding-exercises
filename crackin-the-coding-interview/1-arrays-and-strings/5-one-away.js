// There  are  three  types  of  edits  that  can be  performed  on  strings:  insert  a  character, remove a character, or  replace a character
// Given two strings, write a  function to check if they are one edit (or zero edits) away
// what if equal ?? (solution with false)

const oneAway = (string1, string2) => {
    if (string1.length === string2.length) {
        return isReplaced(string1, string2);
    } else if (string1.length === string2.length + 1 || string1.length === string2.length -1) {
        return isAddedOrRemoved(string1, string2);
    }
    return false;
}

const isReplaced = (s1, s2) => {
    let diff = 0;
    for (let i=0; i< s1.length; i++) {
        if (s1[i] === s2[i]) {continue;}
        diff++;
        if (diff > 1) { return false;}
    }
    return (diff === 1); 
}

const isAddedOrRemoved = (s1, s2) => {
    let j=0;
    const isAdded = s1.length < s2.length;
    for (let i=0; i<s1.length; i++) {
        if (s1[i] === s2[j]) { 
            j++;
            continue;
        }
        if (isAdded && s1[i] === s2[j+1]) {
            return true;
        } else if (!isAdded && s1[i+1] === s2[j]) {
            return true;
        }
        return false;
    }
}

// TESTS
console.log(oneAway('pale', 'ple'), 'true');
console.log(oneAway('pales', 'pale'), 'true');
console.log(oneAway('pale', 'bale'), 'true');
console.log(oneAway('pale', 'bake'), 'false');
console.log(oneAway('pale', 'bae'), 'false');