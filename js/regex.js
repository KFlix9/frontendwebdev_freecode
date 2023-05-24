// REGULAR EXPRESSIONS

const emailValidatorRegex = new RegExp('^.+@.+\..+$');
const userInput = 'invalidemail@g'; 
const isValid = emailValidatorRegex.test(userInput);

console.log(isValid);

// Identifiers and Quantifiers
const regex = new RegExp('g');

const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
console.log(regex.test(string2));

const regex2 = new RegExp('favorite'); 
regex.test(string1); 

// RegEx is case sensitive
const regex3 = new RegExp('FavoritE'); 
console.log(regex3.test(string1)); 

// Special characters & new syntax
console.log(/favorite/.test(string1));
/[A-Z]/.test(string1);      //false - no upper case letters
/[0-9a-z]/.test(string1);
/./.test(string1);          //true - any character
/\s/.test(string1);         //true - string
/^f/.test(string1);         // carrot is the beginning of the line
/code|steak/.test(string1); // OR

// Quantifiers
console.log(/a-z/.exec(string1));  // array just with ["m"]
console.log(/[a-z]*/.exec(string1));  // * zero or more times
console.log(/[a-z]+/.exec(string1));  // + one or more of the preceeding character
console.log(/[a-z ]+/.exec(string1));  // this is the entire string 
console.log(/[a-z ]{2, 6}/.exec(string1));  // this is entire string 

// Flags
const regex4 = /[a-z]/g;

// Example
const str = 'hello world, 2021  @ more of a string';
/^[a-z ]+,[0-9]+@[a-z ]+$/.exec(str);