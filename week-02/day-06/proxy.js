const target = {
    nextId:  null
};

const hanlder = {
    get: function(targetObject, field) {
        if (field === 'nextId') {
            if (targetObject.field === undefined) {
                targetObject.field = 1;
            } else {
                targetObject.field += 1;
            }
        } else {
            targetObject.field = 1;
        }
        return targetObject.field;
    }
}

const proxyObject = new Proxy(target, hanlder);

console.log(proxyObject.nextId);
console.log(proxyObject.nextId);
console.log(proxyObject.nextId);

console.log(proxyObject.hacker);
console.log(proxyObject.hacker);

console.log(proxyObject.nextId);