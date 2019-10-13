const smallestRepunitDivByK = (K) => {
    if (K === 1) {return 1;}
    if (K === 2) {return -1;}
    let N = BigInt(11);
    let i = K - 1;
    while (i) {
      if (N % BigInt(K) === 0n) {
        return N.toString().length;
      }
      N = N*10n+1n;
      i--;  
    }
    return -1;
};