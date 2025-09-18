console.log('Hello Lauren')

function sayHello() {
    console.log('hello')
}

sayHello()

function sum(a, b) {
    console.log(a + b)
}

sum(5, 1)

function sum(c, d) {
    return c + d
}

console.log(sum(7, 25))

const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Cats are stupid.')
console.log(result);

let helloText = "say Hi";
let check = 4

if (check > 3) {
    let hello = "say Hello instead";
    console.log(hello); // "say hello instead"
}

console.log (hello); 
