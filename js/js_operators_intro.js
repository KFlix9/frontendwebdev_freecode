// OPERATORS (intro)
// arithmetic, assignment, comparison, logical as 4 major operators

//ARITHMETIC
console.log(20 + 50); 
console.log(50 - 20); 
console.log(20 / 2); 
const result = 20 + 50 / 2; 
console.log(result); 
console.log(100 % 50);
console.log(100 % 77);
console.log(8**2); 

// increment / decrement
let startingNumber = 0; 
startingNumber++; 
console.log(startingNumber);
startingNumber--; 
console.log(startingNumber);

// assignment
let x = 10; 
x += 5; 
x -= 5;
x *= 5; 
x /= 1; 


//COMPARISON
const someResult = 20 > 18; 
console.log(someResult);        //true

const someOtherResult = 20 === 20; // is equal in value and type
console.log(someOtherResult); 

// comporison operators: === == !== !=
// some more examples...
const numberValue = 20; 
const stringValue = "20"; 

console.log(numberValue == stringValue);    //is compared and then true
console.log(numberValue === stringValue);   //assert datatype is equal, else 'false', here: 'false'

console.log(numberValue != stringValue);    //false
console.log(numberValue !== stringValue);   //true


const myArray = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5]; 

console.log(myArray === anotherArray);       //false


const myObj = {
    property1: 'some value', 
    property2: 20
};

const anotherObject = {
    property1: 'some value', 
    property2: 20
}; 

console.log(myObj === anotherArray);         //false 
// >> you cannot compare objects or arrays this way, often used util lib: lodash

// numeric comparison
// as known: > < >= <= etc

//teneray
const tenResult = 20 === 20 ? 'values match' : 'values do not match'; 