// DATA TYPES
// just to have a basic, conventionally correct line up
const firstVariable = 'JS gives you superpowers'; 

// BASIC DATA TYPES OVERVIEW
// ...to be used for demonstration in the following
const variable1 = 10;
const variable2 = variable1; 
const variable3 = "Felix"; 
const variable4 = {
    variableType: "object",
    variableValue: "some value",
}
const variable5 = (function () {
   return "Hello, my name is ";
})();                           //what is this '()' in the end?
const variable6 = variable5 + variable3; 

//demos
console.log(variable6);


// JS as a dynamically types language
const variableA = 10; 
const variableB = "some value";
const variabelC = false;
// typescript be like
// const variableA: number = 10;
typeof variableA;
typeof variableB; 
typeof variabelC; // would print in console on browser like: "boolean"

// pitfalls / hazards of JS
console.log(variableA + variableB); //prints: 10some value << implicit coercion of variable types
// better example
const variable10AsString = '10';
const variable20AsNumber = 20;
console.log(variable10AsString + variable20AsNumber); //prints: '1020'
// use as numbers
console.log(Number(variable10AsString) + variable20AsNumber);

STOPPED HERE:
https://youtu.be/zJSY8tbf_ys?t=5428