// QUESTION 1:
// "" + 1 + 0      "" Is an empty sting, therefore the string is 10
// "" - 1 + 0      "" This also has an empty string, however, the 1 is a negative value, so the string sees the negative as a number making the answer -1
// true + false    These are called booleans, they can convert into #s true=1 and false=0 so 1 + 0 is 1 as a number.
// !true           This means not true (false)
// 6/ "3"          The string reads numbers when dividing, therefore the answer to this expression would be 2
// "2" * "3"       The string also reads strings as numbers when multiplying making the answer to this expression 6
// 4 + 5 + "px"    the first two numbers would be added, but the px would stay. The answer would be 9px
// "$" + 4 + 5     this would be a concated string making the answer $45
// "4" - 2         string sees a subtraction, making 4 a number instead of a string. answer is 2
// "4px" - 2       I believe this wouldn't add up to anything. you can't convert "4px" to a number so the answer would be NaN (not a number)
// " -9 " + 5      The -9 is a string and since we are adding, this makes it concat making the answer -95
// " -9 " - 5      Since the expression is subtracting, -9 would convert from string to a number making the answer -14
// null + 1        null is converted to 0 making the expression 1
// undefined + 1   Undefined doesn't exist, making this expression "undefined" or NaN
// undefined == null  the == makes that it can be true
// undefined === null  the === means eqactly which makes this expression false 
// " \t \n" - 2    from my understanding, the JS tries to convert the string into a number (tab + newline=0) making the answer -2

// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log(true + false)
// console.log(!true)
// console.log( 6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log(" -9 " + 5)
// console.log(" -9 " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(" \t \n" - 2)


//QUESTION 2:
//let addition = three + four won’t give the expected result, because the strings aren’t automatically converted into numbers. Unless you use the unary + operator, they’ll stay as strings. In this case, the result would be "34", not a numeric sum. 
// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = three + four // "34" 
// let multiplication = three * four // 14
// let division = three / four // 3/4 fraction or 0.75
// let subtraction = three - four // -1

// let lessThan1 = three < four // true
// let lessThan2 = thirty < four // this would technically be true because these are still strings. 4 is greater than 3. It doesn't matter what comes after that unless both first characters are the same.

// console.log(addition)
// console.log(multiplication)
// console.log(division)
// console.log(subtraction)
// console.log(lessThan1)
// console.log(lessThan2)


// QUESTION 3:
// if (0) console.log('#1 zero is true') // not print - zero is considered empty so this would be false
// if ("0") console.log('#2 zero is true') // will print - JS looks at the sting, as long as theres something in the string, it's considered true
// if (null) console.log('null is true') // not print - null represents no value
// if (-1) console.log('negative is true') // will print - the -1 is a value
// if (1) console.log ('positive is true') // will print - 1 is a value


//QUESTION 4:
// let a =2, b = 3;
// let result = `${a} + ${b} is ` + ((a + b <10) ? "less than 10" : "greater than 10")
// the += means that it's combining the result (whatever a + b is) and either "less than 10" or "greater than 10"
// let a = 2, b = 3
// let result = `${a} + ${b} is `

// if (a + b < 10) {
//     result += 'less than 10'   
// } else {
//     result += 'greater than 10'
// } 
// // this just means that whatever 2 + 3 = to, show either 'less than 10' or 'greater than 10'

// console.log(result) // this will show '2 + 3 is less than 10


//QUESTION 5:
// function expression syntax
// const getGreeting = function(name) {
//     return 'Hello ' + name + '!';
// }; 

// console.log(getGreeting)

// //arrow method
// const getGreeting1 = (name) => {return 'Hello' + name + '!';}
// console.log(getGreeting1)


//QUESTION 6:
// const westley = {
//     name: 'Westley',
//     numFingers: 5    
// }

// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6,
//     }

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `
//         console.log(greeting + this.getCatchPhrase(person))      
//     },
//     getCatchPhrase: (person) => person.numFingers === 6
//     ? "Stop saying that"
//     : "Nice to meet you"
// }
       
// inigo.greeting(westley)
// inigo.greeting(rugen)


//QUESTION 7:
// const basketballGame = {
//     score: 63,
//     foul: 5,
//     freeThrow() {
//         this.score++;
//         return this
//     },
//     basket() {
//         this.score += 2;
//         return this
//     },
//     threePointer() {
//         this.score += 3;
//         return this
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score);
//         return this
//     },
//     fullTime() {
//         console.log('Final score is '+this.score);
//         return this
//     },


// }
// basketballGame.basket().freeThrow().basket().threePointer().halfTime().fullTime();


//QUESTION 8:
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }
// for (let key in sydney) {
//     console.log(sydney)
// }

// const Destin = {
//     name1: 'Destin',
//     population1: 13_991,
//     state1: 'Florida',
//     founded1: 'around 1845',
//     timezone1: 'UTC'
// }
// for (let key in Destin) {
//     console.log(Destin)
// }


//QUESTION 9:
// let teamSports = ['Hockey', 'Cricket', 'Volleyball']
// let moreSports = [...teamSports] // created new variable
// moreSports.push('Soccer', 'Basketball') // added new sports

// let dog1 = 'Bingo'
// let dog2 = dog1 //created new variable equal to dog1
// dog2 = 'Spot' // new value

// let cat1 = {name: 'Fluffy', breed: 'Siberian'}
// let cat2 = {...cat1} //created new variable equal to cat1
// cat2.name = 'Mr. Whiskers' // new name property

// console.log(teamSports) // not changed because we called the original variable
// console.log(dog1) // did not change because we called the original variable
// console.log(cat1) // changed because the orignal variable changed when we added new name to property
// console.log(moreSports)
// console.log(cat2)


//QUESTION 10:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;

//     this.canDrive = function() {
//         return this.age >= 16;
//     };
// }  

// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     canDrive() {
//         return this.age >= 16
//     }
// }

// let person1 = new Person('Lauren', 29) // created new person
// let person2 = new Person('Mike', 39) // created another new person
// let person3 = new Person('Emma', 4) // created a third new person

// console.log(person1.canDrive()) 
// console.log(person2.canDrive())
// console.log(person3.canDrive())