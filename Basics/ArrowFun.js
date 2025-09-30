const user = {
    username: "Anshul",
    price: 999,

    loginMsg: function () {
        console.log(`${this.username} logged in`);
    } //this=> refers current context

}
user.loginMsg()
user.username = "sam"// username changed to sam and so is current context
user.loginMsg()// sam logged in

// function one() {
//     let username="abj"
//     console.log(this.username); undefined
// }

const one = function () {
    let username = "abj"
    console.log(this.username); undefined
}

// as one cant access (this) inside function
one()

//Arrow Function
const two = () => {
    let username = "abj"
    console.log(this.username); //cant access here also similar situation as above so undefined
}

two()

const addFun = (n1, n2) => {
    return n1 + n2
}
console.log(addFun(1, 2)); //3

//Implicit Return
const subFun = (n1, n2) => (n1 - n2)

console.log(subFun(1, 2)); //-1