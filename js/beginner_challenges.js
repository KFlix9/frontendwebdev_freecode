// #1 the following does not work, fix it
function multiply(a, b) {
    return a * b;
}

// #2 function not reuturning the correct values why
 
function getPlanetName(id) { 
    let name;
    switch(id){
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Jupiter';
            break;
        default:
            break;
    }
    return name;
}

console.log(getPlanetName(3));

// #3 complete the solution so it reverses the string passed to it

let string = 'world'; 

const returnString = (string) => {
    return string.split("").reverse().join("");
}

console.log(returnString(string));

// #4 create function to determine number being "Even" or "Odd"
function determineOddEven(number) { 
    return number % 2 ? "Odd" : "Even";
}

console.log(determineOddEven(11));
console.log(determineOddEven(12));

// #5 consider an array of sheeps, count number of sheeps present

const sheeps = [true, true, true, false, 
                true, true, true, true, 
                true, false, true, false, 
                true, false, false, true, 
                true, true, true, true, 
                false, false, true, true ];

function countTrue(arr) {
    let counter = 0;
    arr.forEach(element => {
       if(element === true) counter++; 
    });    
    return counter;
}

console.log(countTrue(sheeps));

// #5 alternative: count a, e, i, o, u in a string
const testString = 'ene mena misto'     // should be 7

function vowelsInString(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0; 

    vowels.forEach(element => {
       string.split("").forEach(stringelement => {
        element === stringelement ? counter++ : null;
       }) 
    });
    return counter;
}

console.log(vowelsInString(testString));

// #6 Jenny secret message

let wrongName = 'Heinz';
let rightName = 'Johnny'; 

function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }; 
}

console.log(greet(wrongName)); 

// #7 check if number is divisible by x and y

function isDivisble(n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false; 
}

console.log(isDivisble(3,1,3));


// #8 return negative, even if number is negative 

function makeNegative(num) {
    return num < 0 ? num : -1 * num;
}

console.log(makeNegative(-1.2));
console.log(makeNegative(12));
console.log(makeNegative(1.2));


// #9 smallest integer finder
class SmallestIntegerFinder {
    findSmallInteger(args) { 
        return Math.min(...args); 
    }
}

const finder = new SmallestIntegerFinder(); 
console.log(finder.findSmallInteger([12, 1, -100, 34, -888]));

// continue here: https://youtu.be/zJSY8tbf_ys?t=17568