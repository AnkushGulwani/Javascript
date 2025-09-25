"use strict"; // treat all JS code as newer version

// code readability should be high

let name = "ankush"
let age = 21
let isLoggedIn = false

console.log(typeof age) //int
console.log(typeof name) //string
console.log(typeof isLoggedIn) //boolean
console.log(typeof undefined) //undefined
console.log(typeof null) //object


/*Types of datatypes:-
number => 2^53
bigint
string=""
boolean => true/false
null => standalone value (like a variable can be declared null)
undefined => variable is declared but not defined
symbol => unique
*/

/*Return type of variables in JavaScript
1) Primitive Datatypes

     Datatype     typeof
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes

       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/

/* JavaScript is a dynamically typed language.This means that variable types are determined at runtime,
 and you do not need to explicitly declare the type of a variable before using it.
 You can assign different types of values to a variable during its lifetime.*/