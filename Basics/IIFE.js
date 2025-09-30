//Immediately Invoked Function Expression(IIFE)

//Global scope pollution sometimes creates problems... so thats why we use iife to reduce that 

(function main() {
    console.log("Database Connected");
})();

((username) => {
    console.log(`DB Connected by ${username}`);
})(`anshul`)