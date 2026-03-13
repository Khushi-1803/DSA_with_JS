//1️⃣filter the negative values from the array 
let arr = [78,67,45,96,-78,-34,61,-90]
let filarr = []
// let filteredArray = arr.filter(num=>num<0)
// console.log(filteredArray);
//ANOTHER METHOD
for(num of arr){
    if (num<0) {
       filarr.push(num)
    }
}
console.log(filarr);

//2️⃣ Remove Elements from Array Start
let arr1 = [8,9,5,3,4]
let removedElem = arr1.shift()
console.log(arr1);
console.log(removedElem);

//3️⃣This method converts a 2D array into a CSV string 
let arr2 = [["a","b"],["c","d"]]
let csvStr = arr2.map((item)=>item.join(",")).join("\n")
console.log(csvStr);

//4️⃣to count number of data types in an array in JavaScript ?
const countDatatypes = (arr3) => {
    let obj = {}
    arr3.forEach((val) => {
         if (obj[typeof val]) {
            obj[typeof val]++;
        }
        else{
            obj[typeof val] = 1
        }
    });
    return obj
}
let arr3 = [function () { }, new Object(), [], {},
    NaN, Infinity, undefined, null, 0
];

console.log(countDatatypes(arr3));

// 5️⃣How to remove falsy values from an array in JavaScript ?

let arr4 = [1,,4,null,89,undefined," ",0];

let newArr = [];

arr4.forEach((num) => {
    if (
        num !== false &&
        num !== 0 &&
        num !== " " &&
        num !== 0n &&
        num !== null &&
        num !== undefined &&
        !Number.isNaN(num)
    ) {
        newArr.push(num);
    }
});

console.log(newArr);

//6️⃣Finding largest value of an array
let arr5 = [11,22,87,89,67,43,62]
let lar = arr5[0]
for (let i = 1; i < arr5.length; i++) {
    if (arr5[i]>lar) {
    lar = arr5[i]
}
    
}
console.log(lar);

//7️⃣Finding second largest value of an array
let arr6 = [11,22,87,89,67,43,62]
let largest = arr6[0]
let secLargest = arr6[1]
for (let i = 2; i < arr6.length; i++) {
    if (arr6[i]>largest) {
     secLargest = largest   
     largest = arr6[i]
}
}
console.log(secLargest);



