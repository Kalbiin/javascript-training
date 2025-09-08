// boolean & comparisons
console.log(true, false);

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let includeResult = email.includes('@');
console.log(includeResult);

let includeResults = names.includes('luigi');
console.log(includeResults);

// comparison operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
// lower case is greater than uppercase
console.log(name > 'Shaun');
console.log(name > 'Crystal');