// DATA TYPES OVERVIEW (formal)
const stringValue = 'hello world';          //convention
const anotherStringValue = "hello world"; 
const numberValue = 20; 
const boolenValue = false; 

// COMPLEX DATA TYPES
const numberArray = [10, 20, 30, 40];
const mixedArray = [10, 'a string', { prop: 'asdf'}, [1,2]]    //all possible, although unlikely to be encountered such

//access arrays
console.log(numberArray[3]);
console.log(mixedArray[3][1]);


// OBJECTS
const objectVariable = {
    prop1: 20, 
    prop2: 50, 
}; 

// acces with dot-notation
objectVariable.prop1

const nestedObjects = {
    layer1: {
        layer2: {
            layer3: { 
                targetValue: 30
            }
        }
    }
}

console.log(nestedObjects.layer1.layer2.layer3.targetValue)

//also possible
objectVariable['prop1'];