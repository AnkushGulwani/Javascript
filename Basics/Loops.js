//for loop

for (let i = 0; i <= 10; i++) {
    console.log(i); // 0 to 10 no. printing
}

//nested example
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`Outer loop ${j} when inner loop ${i}`);
    }
}

//loops (array)
let myArray = [1, 2, 3, 4, 5]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);// 1 2 3 4 5
}

//break and continue keyword

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break;// out of loop once 5 detected
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}

//while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index += 2
}

//another example
myArray2 = [1, 2, 3, 4, 5]
let arr = 0

while (arr < myArray2.length) {
    console.log(`Value is ${myArray2[arr]}`);
    arr += 1
}

//do-while loop

let score = 0// prints from 0 to 10

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


let score2 = 11// prints only 11

do {
    console.log(`Score is ${score2}`);
    score2++
} while (score2 <= 10);

//for of loop

const array1 = [1, 2, 3, 4, 5]

for (const i of array1) {
    console.log(i);
}

const str = "hello world"

for (const element of str) {
    console.log(element);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('RSA', "South Africa")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}


const myobj = {
    name1: "abc",
    name2: "def",
    name3: "ghi"
}

// for (const [key,value] of myobj) {
//     console.log(key,':-',value);

// }  object(myobj) is not iterable

//for in loop

for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);
    // name1 is abc
    // name2 is def
    // name3 is ghi  
}

const programming = ["js", "c", "cpp", "java"]

for (const key in programming) {
    console.log(`${key} -> ${programming[key]} `);
    // 0 -> js
    // 1 -> c
    // 2 -> cpp
    // 3 -> java
}

//for each loop

const coding = ["js", "c", "cpp", "java"]

coding.forEach(function (item) {
    console.log(item);
    // js
    // c
    // cpp
    // java
})

coding.forEach((item) => {
    console.log(item);
    // js
    // c
    // cpp
    // java
})

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);

    // js 0['js', 'c', 'cpp', 'java']
    // c 1['js', 'c', 'cpp', 'java']
    // cpp 2['js', 'c', 'cpp', 'java']
    // java 3['js', 'c', 'cpp', 'java']
})

const codingLang = [
    {
        langName: "JAVA",
        langShort: ".java"
    },
    {
        langName: "JavaScript",
        langShort: ".js"
    }
]

codingLang.forEach((item) => {
    console.log(item.langName);
    // JAVA
    // JavaScript
})

// const coding1 = ["js", "c", "cpp", "java"]

// const values = coding1.forEach((item) => {
//     console.log(item);
// })
// console.log(values);

//filter keyword use
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums); //[ 5, 6, 7, 8, 9 ]

const newNums1 = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums1.push(num)
    }
})

console.log(newNums1); //[ 5, 6, 7, 8, 9 ]

const nweNums2 = myNums.map((num) => num + 10)
console.log(nweNums2);
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19
// ]

const newNums3 = myNums.map((num) => num * 10).map((num) => num += 1)
    .filter((num) => num >= 40)//chaining method
console.log(newNums3);//[ 41, 51, 61, 71, 81, 91 ]

//reduce method

const nums = [1, 2, 3, 4, 5]

const total = nums.reduce((acc, curr_val) => {
    console.log(`acc:${acc} and curr_val:${curr_val}`)
    return acc + curr_val
}, 0)

console.log("total:" + total);
// acc:0 and curr_val:1
// acc:1 and curr_val:2
// acc:3 and curr_val:3
// acc:6 and curr_val:4
// acc:10 and curr_val:5
// total:15

