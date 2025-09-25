const one="Hello";
const two="Anshul";
console.log(one+two); //Concatination => HelloAnshul

console.log(`${one} this is ${two}`)// another method by using `` and ${}

const nameOne = new String('Hello World');
console.log(nameOne);

//some methods related to string

console.log(nameOne.toUpperCase())
console.log(nameOne[4]);
console.log(nameOne.length);
console.log(nameOne.charAt(3));
console.log(nameOne.indexOf('o'));
console.log(nameOne.substring(0,4));
console.log(nameOne.split(' '));// converting above string to array based on spaces like [ 'Hello', 'World' ]


const newString="       Hello     "
console.log(newString.trim())// trims unnecessary space

const url="https://reddit.com"
console.log(url.replace('reddit','instagram'))
console.log(url.includes('com'))



console.log(nameOne);// this does not change original string





