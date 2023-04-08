const yourFirstVariable = 'Learning to code gives you superpowers';
const yourSecondVariable = 10; 
// object
const yourThirdVariable= {firstProperty: 'hello world'}; 

// print with console.log
console.log(yourThirdVariable);

// declare variable (and just that)
let anotherVariable; 
// assign value to it
anotherVariable = 20; 
console.log(anotherVariable);

// ON: CONST LET VAR
const variable1 = 10;
let variable2 = 10;
var variable3 = 10; 

// VAR
// var should not be used anymore, legacy idea, can be re-declared(!)
var oldVar = 10; 
var oldVar = 100; //(!)
console.log(oldVar); 

// LET
// let allows for values to be changed / re-assigned
let counter = 0; 
counter = counter + 1; 
counter++; 

//CONST 
// const allows values not to be changed / re-assigned
const counterAsConst = 0; 
counterAsConst++; 
// console.log('counter from const' + counterAsConst);  << will throw error 
const TAX_RATE = 0.19; //semantic convention for const, often seen