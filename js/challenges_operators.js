// CHALLENGE #1

//const numberVariable = 0; 
let numberVariable = 0;     // fixing this by using mutable variable

numberVariable++; 
numberVariable++; 
numberVariable++; 

console.log(numberVariable); 

// CHALLENGE #2
// Snippet 1
const firstNumber = 20; 
const secondNumber = '20'; 

const result = firstNumber === secondNumber; 

console.log(result); 

// Snippet 2
const firstOtherNumber = 20; 
const secondOtherNumber = '20'; 

const resultOther = firstOtherNumber === secondOtherNumber;

console.log(resultOther);

// CHALLENGE #3
const expression1 = 100 % 50; 
const expression2 = 100 / 50; 
const expression3 = expression1 < expression2; 
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5); 

// CHALLENGE #4
const myObj = {
    prop1: 'first value',
    prop2: 20
}; 
const myArray = [40, 50, 2];
const resultThisComparison = myObj.prop2 === (myArray[0] / myArray[2]); 

console.log(resultThisComparison);

// CHALLENGE #5
const myNewObj = {
    nestedObject1: {
        price: 100,
        quantity: 5
    }, 
    nestecObject2: { 
        price: 150, 
        quantity: 2
    }
}

const myArrFromObjs = [myNewObj.nestedObject1, myNewObj.nestecObject2]; 

const resultThatComparison = 
    (myArrFromObjs[0].price * myArrFromObjs[0].quantity) >
    (myArrFromObjs[1].price * myArrFromObjs[1].quantity);

console.log(resultThatComparison); 