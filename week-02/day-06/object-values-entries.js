let count = {'eventA' : 10, 'eventB' : 12, 'eventC' : 15, 'eventD' : 9};

let maxCount = Math.max(...Object.entries(count).map(entry => entry[1]));
console.log(maxCount);
