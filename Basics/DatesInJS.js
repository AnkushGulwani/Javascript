let myDate=new Date()// date object created

//some date methods
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

let myCreatedDate=new Date(2023, 0, 25, 23)//(yy, mm jan=0, dd, time hours, mins, sec )
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//to get seconds


let myTimestamp=Date.now()
console.log(myTimestamp);



