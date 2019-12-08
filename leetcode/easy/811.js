// Runtime: 72ms => 92.5%
// Memory: 38.9MB => 48%

const subdomainVisits = (cpdomains) => {
    let domains = {};
    for (let domain of cpdomains) {
        let array = domain.split(' ');
        const visits = parseInt(array[0]);
        array = array[1].split('.');
        let key = '';
        for (let i = array.length - 1; i>=0; i--) {
            if (key === '') {
                key = array[i];
            } else {
               key = array[i] + '.' + key; 
            }
            domains[key] = domains[key] + visits || visits;
        }
    }
    return Object.keys(domains).map((key) => domains[key] + ' ' + key);
};
