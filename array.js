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


