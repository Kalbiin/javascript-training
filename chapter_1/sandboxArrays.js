// ARRAY SYNTAX
let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas);

//to override values in an array
ninjas[1] = 'ken';

// TO EXTRACT FROM THE ARRAY USE []
console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// You can use different data types in arrays
// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// Array methods
console.log(ninjas.length);

let joinResult = ninjas.join('-');
console.log(joinResult);

let indexofResult = ninjas.indexOf('chun-li');
console.log(indexofResult);

let concatResult = ninjas.concat(['ken', 'crystal']);
console.log(concatResult);

let pushResult = ninjas.push('ken');
pushResult = ninjas.pop();
console.log(pushResult);

