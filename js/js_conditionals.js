// CONDITIONALS(intro)
// intro example
if ('some string' === 'another string') {
    console.log('the strings are equal');
} else {
    console.log('the strings are not equal')
}
// basic structure we always have: if() {} else {}

// overview
const firstNumber = 20; 
const secondNumber = 10; 
const jsExpression = firstNumber > secondNumber;    //true

// only usin an if statement (no else)
if (jsExpression) {
    console.log('this expression is true');
}

// an if-else statement 
if (jsExpression) {
    console.log('this expression is true');
} else {
    console.log('this expression is false');
}

// adding if - else if - else
if (jsExpression) {
    console.log('this expression is true');
} else if (firstNumber > 0) {
    console.log('the expression is false and the firstNumber is greater than 0');
} else {
    console.log('this expression is false, and the firstNumber is 0 or less');
}