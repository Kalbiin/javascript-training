// TEMPLATE STRINGS
const title = 'Best reads 2019';
const author = 'Mario'
const likes = 30;

// CONCATENATION WAY
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// TEMPLATE STRING (TEMPLATE LITERAL) WAY
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// CREATING HTML TEMPLATES
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);