/* HOW JS WORKS.....??

Javascript execution context
- Global execution context -> (this)
- Function exceution context
- Eval execution context

How does js code gets execute:-
1 phase-> Memory creation phase

val1->undefined
val2->undefined
addNum (function)->defination
result1->undefined
result2->undefined

2 phase-> Execution phase

val1 <- 10
val2 <- 20
addNum -> new variable enviornment + execution thread -> Memory phase and execution context
..... this gets deleted once process completes and returns to global execution

result1<-15

*/

//CONTROL FLOW (Logic Control)

// if else
const temperature = -1
if (temperature >= 40) {
    console.log("temperature is greater than 40");

} else if (temperature < 30) {
    console.log("temperature is lesser than 40");
}
else {
    console.log(`invalid temperature ie., ${temperature}`);
}
const balance = 10000

/*if (balance > 500) console.log("test"),
    console.log("test2");
*/

//nested if else
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && (loggedInFromEmail || loggedInFromGoogle)) {
    console.log("User Logged In");

    if (debitCard) {
        console.log("Allowed to buy");
    }
}

//switch case
const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid");
        break;
}

//another example
const month1 = "jan"

switch (month1) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;

    default:
        console.log("Invalid");
        break;
}

/*truthy and falsy values

falsy values-> 0, -0, BigInt, "", null, undefined, NaN, false
truthy values->"0", 'false', [], {}, function(){}, ""
*/

const userEmail = []//"h@gmail.com"
// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("Dont have user email");

// }

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 //10
//val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 3//10
console.log(val1);

//Ternary operator

// condition ? true : false

const teaPrice=10
teaPrice<=8 ? console.log("less than 8") : console.log("more than 8");


