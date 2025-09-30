/*
Prefered not to use var because of issue in block scope and functional scope
*/
if (true) {// Local scope
    let a = 1
    const b = 2
    var c = 3 // var acts as global scope
    console.log("Inside:", a);//1
    console.log("Inside:", b);//2
    console.log("Inside:", c);//3

}

//Global Scope
let a = 10
console.log("Outside:", a);//10
const b = 20
console.log("Outside:", b);//20
console.log("Outside:", c)//3 is getting declared same 

function one() {
    const username = "Anshul"

    function two() {
        const website = "instagram"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

/*Basically child function can access parent function but not other way like function 
two can access function one*/

//Intresting example

console.log(abc(5));// 6

function abc(num) {
    return num + 1
}


console.log(abcd(5));// Cannot access 'abcd' before initialization 

const abcd = function (num) {
    return num + 1
}

