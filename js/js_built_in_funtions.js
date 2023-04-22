// JS BUILT-IN FUNCTIONS

// check some string methods

const myString = 'Felix'; 
myString.replace('F', 'X');

console.log(myString);                            // does not(!) actually alter the original value
console.log(myString.replace('F', 'X'));          // does not(!) actually alter the original value

console.log(myString.toUpperCase()); 

let str = 'hello World'; 

str = str.toUpperCase().split(" "); 
console.log(str);

console.log(str.indexOf("WORLD"));

