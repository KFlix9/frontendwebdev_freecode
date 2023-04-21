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