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

// switch-case statement
// get some data
const colors = ['oragange', 'green', 'yellow', 'purple', 'blue'];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex]; 

switch (randomColor) {
    case 'orange':
       console.log('the color is orange');
        break;
     case 'green':
       console.log('the color is green');
        break;
    case 'yellow':
       console.log('the color is yellow');
        break;
    case 'purple':
       console.log('the color is purple');
        break;
   case 'blue':
       console.log('the color is blue');
        break;
    default:
        break;
}