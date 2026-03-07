//***************************************************HCF****************************************************************
// let n1 = 15;
// let n2 = 30;
// for(let i = 20; i>=1; i--) {
//     if(n1%i==0 && n2%i==0){
//         console.log(i);
//         break;
//     };
// }

//***************************Euclidean algorithm for HCF*******************************************
// let a =15;
// let b = 30;
// while (a != b){
//     if (a>b)  a = a-b;
//     else b = b-a;
// }
// console.log(a);
//***************************Recursion for HCF*******************************************
// function gcd(a,b){
//     if(a==b) return a;
//     if(a>b) return gcd(a-b,b);
//     return (a,b-a)
    
// }
// let a = 32; b=20;
// console.log(gcd(a,b));
//*********************************************Factors of a Number*******************************************
// let n = 100;
// for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (n%i==0) {
//         console.log(i);
//     }
// }
// for (let i = Math.floor(Math.sqrt(n)); i>= 1; i--) {
//     if (n%i==0) {
//         if (n/i != i) {
//             console.log(n/i);
            
//         }
//     }
// }

//*********************************************Count of prime*******************************************
// let n = 30;
// let arr = new Array(n + 1).fill(true);
//  arr[0] = false; // fix #1 — 0 is not prime
//  arr[1] = false; // fix #1 — 1 is not prime
// for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//    if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) {
//          arr[j] = false;
//       } 
//    }
// }

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]) {
//         console.log(i);
//     }
// }

//**************************************************power************************************************************
// var myPow = function(x,n){
//     if (n==0) return 1;
//     let ans = temp(x,n);
//     return (n<0) ? 1/ans : ans
// }
// var temp = function(x,n){
// if (n==0) return 1;
// let ans = temp(x,parseInt(n/2));
// if (n%2==0)  return ans*ans
// return ans*ans*x
// }
// console.log(myPow(2, 10))