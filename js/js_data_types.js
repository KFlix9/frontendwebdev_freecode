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

console.log(variable6);