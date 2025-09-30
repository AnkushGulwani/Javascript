function sayHello() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

//sayHello() For executing function

function add(num1, num2) {
    console.log(num1 + num2);
}

add(9, "19") //919 because 19 is string 
const result = add(9, 19) //28

console.log(result); //undefined because no use of return in function

function sub(num3, num4) {
    return num3-num4
    console.log("hello");// after return no code will be executed
}

console.log(sub(19,9));

function loginUserMsg(username = "default username"){
    return `${username} logged in`
}

console.log(loginUserMsg("Samuel")); // Samuel overrides default username
console.log(loginUserMsg()); //default username logged in

function calculateCartPrice(...num1 /*rest operator */){
    return num1;
}

console.log(calculateCartPrice(200,300,833));//[ 200, 300, 833 ]

const course={
    name:"iit-jee",
    fees:67809
}

function handleObject(anyobject){
    console.log(`Price for ${anyobject.name} course is ${anyobject.fees}`);
}

handleObject(course)// Output- Price for iit-jee course is 67809
// we can also pass direct object
handleObject({
    name:"neet",
    fees:111890
})// Output- Price for neet course is 111890

//similarly can be done for arrays too

const newArr=[1,2,3,4,5]
function returnValue(getArray){
    return getArray
}

console.log(returnValue(newArr));// Output-[ 1, 2, 3, 4, 5 ]

console.log(returnValue([6,7,8,9,0]))// Output-[ 6, 7, 8, 9, 0 ]