/*There are two ways to declare objects ie., literals and constructors.....
if object is made from constructor (Object.create) its singleton otherwise its not
*/

/*
Taking a symbol and defining it...and priniting it
 */

const symb = Symbol("key1")

const JsUser = {
    name: "Ankush",
    age: 21,
    [symb]: "mykey1",
    location: "Faridabad",
    email: "ankush@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);// prefered way of printing data
console.log(JsUser[symb]);// accessing symbol

JsUser.email = "Abc@google.com"
console.log(JsUser["email"]);
//Object.freeze(JsUser)// to freeze object
JsUser.email = "Abc@ai.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello user...");
}

JsUser.greeting2 = function () {
    console.log(`Hello user, ${this.name} `);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

//another way of initializing & declaring object
const app1 = {}
app1.name = "Bumble"
app1.users = "2.2Cr"
console.log(app1.users);

// we can also create nested objects 
const app2 = {
    email: "a@gmail.com",
    name: {
        firstname: "andrew"
        , lastname: "mathews"
    }
}

console.log(app2.name.firstname);

//merging or combining objects
const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"d"
}
//const obj3={obj1,obj2}

const obj3=Object.assign({},obj1,obj2)// (target{},source...)
const obj4={...obj1,...obj2}//or we can do is spreading of objects
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//some extra important methods
console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));
console.log(JsUser.hasOwnProperty('IsLoggedIn'));//true

//object de-structure

const course={
    name:"IIT-JEE",
    price:"100000",
    tutor:"anand"
}

const { name: n } = course;
console.log(n); // Output: "IIT-JEE"
