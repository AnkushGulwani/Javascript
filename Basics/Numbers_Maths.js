const score=100
console.log(score);// auto detected thst datatype is number

const balance=new Number(400) //specifically set datatype as number
console.log(balance)

//some properties of Number
console.log(balance.toString().length)
console.log(balance.toFixed(2))// for precision values

const otherNo=343.9878
console.log(otherNo.toPrecision(3)); //344 -> till what we need like 3 or 4 places

const no=3333333
console.log(no.toLocaleString('en-IN'));

// some basic math functions in js

console.log(Math) //Object [Math] {}
console.log(Math.abs(-3))// +3 => only -ve to +ve conversions
console.log(Math.round(4.6));// 5 basic rounding off
console.log(Math.ceil(4.2));//5 ceiling value
console.log(Math.floor(4.6));//4 floor value
console.log(Math.max(4,5,4,3,2,1)); // max value i.e 5 similarly min function 

console.log(Math.random()); //any value b/w 0 and 1 like 0.35624332....
console.log(Math.floor(Math.random()*10)+1);// this gives values b/w 1 to 9
