let score = "ankush"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*  when converted from string to number:-
    "33"=>33
    "33abc"=>NaN
    true=>1 ; false=>0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)// number or string to boolean conversion
console.log(booleanIsLoggedIn)

/*
1=>true
0=>false
""=>false
"something"=>true
*/

let someNumber = 33
let stringNumber = String(someNumber)// number too string conversion
console.log(stringNumber)
console.log(typeof stringNumber)

/*...........Operations...........*/
let str1 = "Hello"
let str2 = " Everyone"
let str3 = str1 + str2 //concatination
console.log(str3)

console.log("1" + 2) //12
console.log("1" + "2") //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

let gameCounter=99
gameCounter++
console.log(gameCounter)