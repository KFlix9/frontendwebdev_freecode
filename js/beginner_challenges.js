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
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(determineOddEven(11));
console.log(determineOddEven(12));
