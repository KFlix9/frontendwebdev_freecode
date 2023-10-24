// STRING METHODS (most important)

//scope: replaceAll, toUpperCase, substring, trim, match

//replaceAll
const myString = 'My Dog jumped on the bad. My dog is a bad Dog.';

const newString = myString.replaceAll('Dog', 'Cat');
console.log(newString);

const correctString =  myString.replaceAll(/[Dd]{1}og/g, 'cat');
console.log(correctString);


//toUpperCase
const myString2 = 'some string';
console.log(myString2.toUpperCase());


// substring
console.log(myString2.substring(5, 7));
console.log(myString2[0].toUpperCase() + myString2.substring(1))

// trim
const externalData = [
    {
        title: 'How to Code      ',
        author: ' Felix'
    },
    {
        title: '  What is vim?',
        author: ' Felix'
    },
    {
        title: ' How do loops work in JS?    ',
        author: ' Felix'
    }
]

for (let i = 0; i < externalData.length; i++) {
   externalData[i].title.trim(); 
   externalData[i].author.trim(); 
}

for (let i = 0; i < externalData.length; i++) {
    console.log(externalData[i].title);
    console.log(externalData[i].author);
}