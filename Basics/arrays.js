const myArray = [1, 2, 3, 4, 'abj']
// all datatypes can be inserted in an array 
console.log(myArray);

const myArray2 = new Array('one', 2, 3, 'four')// another way of initialization and declaration
console.log(myArray2);

// Array methods

myArray.push(6)//inserts value at the end of the array
myArray.pop()//deletes value from the end
myArray.unshift(1)// puts value at the beginning of array
myArray.shift()// removes the first element from an array 
console.log(myArray.includes('abj'));//true 

const newArray = myArray.join()
console.log(myArray);
console.log(newArray);

//slice and splice
console.log("A->", myArray);
const arr1 = myArray.slice(1, 3)// [2,3]
console.log(arr1);

console.log("B->", myArray);
const arr2 = myArray.splice(1, 3)// [2,3,4] considers last digit also
console.log(arr2);

console.log("C->", myArray);

/*also the major difference b/w slice and splice is that splice make 
changes in original array whereas slice does it in a copy keeping
 original array intact*/

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 0]

// array1.push(array2)

const array3 = array1.concat(array2) // to merge two arrays
console.log(array3);

const array4= [...array1,...array2]// spreading arrays
console.log(array4);

const anotherArr=[1,2,[3,4],[5,6,[7,8]],9,10,11]
const anotherArr2=anotherArr.flat(Infinity)
console.log(anotherArr2);

console.log(Array.isArray("ABCD"));// to determine wheather its an array or not... false
console.log(Array.from("ABCD"));// to convert to array





