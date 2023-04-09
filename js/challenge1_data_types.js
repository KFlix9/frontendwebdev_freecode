// Challenge #1

// #1
const myBoolean = true;
console.log(myBoolean);

// #2 
const myString = 'hello world'; 
console.log(myString); 

// #3
const myFirstNumber = 20; 
console.log(myFirstNumber); 

// #4
let mySecondNumber = 40
console.log(mySecondNumber); 

// #5
mySecondNumber = 80;
console.log(mySecondNumber); 

// #6 
const myArray = [myBoolean, myString]; 
console.log(myArray); 

// #7
const myObject = {
    firstProperty: myArray,
    sumProperty: myFirstNumber + mySecondNumber,
}

// #8
console.log(myObject);

// #9
console.log(myObject.sumProperty); 

//10
console.log(myObject.firstProperty[1]);