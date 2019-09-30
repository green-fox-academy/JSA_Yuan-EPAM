function multiPurposeFunction(action){
    console.log(action);
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here
    var square = function(num) {
        return num * num;
    }
    var square2 = (num) => {
        return num * num;
    }

    multiPurposeFunction(square);
    multiPurposeFunction(square2);
}

frameFunction();