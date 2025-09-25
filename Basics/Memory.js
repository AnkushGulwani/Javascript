let nameOne="Abj"
let nameTwo=nameOne
nameTwo="Anshul"
console.log(nameOne)
console.log(nameTwo)
/*Example of how stack is used.... also a copy is taken in static memory like
in this one above a copy of nameOne is taken... primitive datatypes use static memory */

let userOne={
    email:"abc@gmail.com"
}

let userTwo=userOne

userTwo.email="xyz@gmail.com"

console.log(userOne)
console.log(userTwo)

/*So herein heap is used in non primitive datatypes like objects, functions and arrays
..... therefore providing a reference to it like in above eg where a reference of userOne is provided to userTwo 
instead of copy so that changes happen both in userOne and userTwo */