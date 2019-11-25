// Runtime: 160ms =>5%
// Memory: 441.MB => 14.29%

const addBinary = (a, b) => {
    let longer = a.split('');
    let shorter = b.split('');
    const sum = [];
    let transfer = false;
    
    if (shorter.length > longer.length) {
        [shorter, longer] = [longer, shorter];
    }
    
    let index = longer.length -1;

    if (longer.length > shorter.length) {
        let k = 0;
        while (shorter.length < longer.length) {
		    shorter.unshift("0");
		    k++;
	    }  
    }
    
    console.log(longer, shorter);
    while (index >= 0) {
        const n1 = parseInt(longer[index]);
        const n2 = parseInt(shorter[index]);
        let currentNumber = (n1 + n2) % 2 ;
        let currentTransfer = n1 && n2;
        console.log(currentTransfer);
        if (transfer && !currentNumber) {
            currentNumber = 1;
        } else if (transfer && currentNumber){
            currentNumber = 0;
            currentTransfer = true;
        }
        sum.unshift(currentNumber);
        transfer = currentTransfer;
        index--;
    }
    if (transfer) {sum.unshift(1);}
    return sum.join('');
};

// Runtime: 60ms => 85%
// Memory: 35MB => 50%

const addBinary = (a, b) => {
    let over = 0;
    let sum = 0;
    
    if(a.length < b.length){
        const temp = b;
        b = a.split('');
        a = temp.split('');
    } else {
        b = b.split('');
        a = a.split('');
    }
    
    let indexL = a.length - 1;
    let indexS = b.length - 1;
    
    while(indexL >= 0 || indexS >= 0){
        sum = (parseInt(a[indexL]) || 0) + (parseInt(b[indexS]) || 0) + over;
        a[indexL] = sum % 2;
        over = sum >= 2 ? 1 : 0;
        indexL--;
        indexS--;
    }
    a = a.join('');
    
    if (over){
        a = '1' + a;
    }
    return a;
};
