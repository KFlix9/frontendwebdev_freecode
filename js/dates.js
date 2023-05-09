// DATES

const myDate = new Date();
console.log(myDate); 

// Example 1
new Date(2020, 11, 2, 7, 10);

// Example 2
new Date('Jan 20 2020'); 
new Date('Jan-20-2020');
new Date('Jan 20 2020 02:20:10'); 

// Example 3
new Date(102031203);

// Example 4
// ...input as ISO 8601
new Date('2020-01-20T00:00Z'); 

// Example 5
// ...with timezones
new Date('Jan 20 2020 02:20:10 -10:00'); 


const myNewDate = new Date();
console.log(myNewDate.toString());

console.log(myNewDate.toISOString());

//get actual date
myDate.getDate();

//get actual month zero indexed
console.log(myDate.getMonth());

myDate.getFullYear();