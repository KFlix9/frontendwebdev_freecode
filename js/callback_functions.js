// CALLBACK FUNCTIONS

// beginning example to be disected troughout the lesson
function myCallBack(someNumber) {
    return someNumber * 2;
}

function mainFunction(randonNumber, shouldCall, callback) {
     let result = randomNumber;

     if(shouldCall) {
        result = callback(randomNumber);
     }
     return result;
}

mainFunction(20, true, myCallBack);
// in convention this would look like this - end result
mainFunction(20, true, (num) => num * 2); 


// pre-step to convention
mainFunction(20, true, function (num)) {
   return num * 2;
}

mainFunction(20, true, (num) => {
    return num * 2;
})

mainFunction(20, true, num => num * 2);

// why do we need callback - reusability / asynchronous programming

// be the example of map
const myArray = [2, 4, 6]; 

function myCustomMapOperationCallback(itemFromArray) {
    return itemFromArray * 2;
}
const newArray = myArray.map(() => myCustomMapOperationCallback());     //here the callback is really useful

// another example
const strArray = ["Felix", "world", "hello", "whatsUp"];

const newstrArray = strArray.map( item => item + "!");