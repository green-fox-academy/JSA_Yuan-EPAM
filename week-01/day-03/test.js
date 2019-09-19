let kvArray = [{key: 1, val: 10},
                {key: 2, val: 20},
                {key: 3, val: 30}];

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.val;
    return rObj;
});

console.log(kvArray);
console.log(reformattedArray);