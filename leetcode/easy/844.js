// Runtime: 56ms => 84%
// Memory: 34.9MB => 66%

const backspaceCompare = (S, T) => {
    return afterTextEditor(S) === afterTextEditor(T);
};

const afterTextEditor = (string) => {
    const edited = [];
    for (let i=0; i<string.length; i++) {
        if (string[i] === '#') {
            edited.pop();
        } else {
            edited.push(string[i]);
        }
    }
    return edited.join('');
}
