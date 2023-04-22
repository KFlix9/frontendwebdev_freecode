// FUNCTIONS
// basic function
function myFunction() {
    console.log('Hello world, this is my first function');
}

console.log(typeof myFunction); 

myFunction();

// immidiately invoked function
// ...declared and called at the same time
( function anotherFunction() { 
    console.log('immidiately invoked function');
} ) (); 

// parameters and arguments
function someFunction(param1, param2) { 
    console.log(param1); 
    console.log(param2); 
}; 

// invoke function
someFunction(20, 'some string'); 


// with a variable, which is at least needed when calling function
const anotherFunction = function () {
    console.log('another thing');
}

console.log( typeof anotherFunction);

// (!) the de-facto standard of writing js functions - ES6 Standard - Arrow Function
// ..this improves readability, seperation and scoping > especially with keyword this - what is covered later
const arrowFunction = () => {
    console.log('i am an arrow function'); 
}

// basic syntac
() => {
    
}

// return values from functions
const aFunctionWithReturn = () => {
    return 20;
}
const result = aFunctionWithReturn(); 
console.log(result);

// lets see what happens after return
const myFunctionNumber = () => {
    let myNumber = 20;
    return myNumber;
    myNumber = 50;              //useless
}

const myNumber = 20; 

let someReturnFunction = () => {
    if(myNumber) {
        return 'returned the function early'; 
    }
    return 40;
}

console.log(someReturnFunction()); 


//
const myObj = {
    prop1: 50,
    prop2: aFunctionWithReturn
}