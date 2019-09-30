function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    // Write your code here
    var printInfo = function(fName, lName) {
        if (fName) {
            return fName + " " + lName;
        } else {
            return lName;
        }
    }

    multiPurposeFunction(printInfo);
}

frameFunction();