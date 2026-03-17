//1️⃣SWAPPING A NUMBER
/*let a = 10;
 let b = 20;
 [ a,b] =[ b,a]
 console.log(a,b); */

//2️⃣SUM OF DIGITS
/* let c = 1678
 let sum = 0
 while(c>0) {
     let digit = c%10
     sum = sum+digit
     c=Math.floor(c/10)
 }
 console.log(sum);*/

//3️⃣SHOPPING
 const prompt = require("prompt-sync")();
/* let amount = Number(prompt("Enter the amount"))
 if(isNaN(amount)){
     console.log("Invalid amount");
 }
 else if(amount>=0 && amount<=5000){
     console.log(`Payable Amount: ${amount}` );
 }
 else if(amount>=5001 && amount<=7000){
     let discount = amount * (5/100)
     amount = amount-discount;
     console.log(`Payable Amount: ${amount}` );

 }
 else if(amount>=7001 && amount<=9000){
     let discount = amount * (10/100)
     amount = amount-discount;
     console.log(`Payable Amount: ${amount}` );

 }
 else{
     let discount = amount * (20/100)
     amount = amount-discount;
     console.log(`Payable Amount: ${amount}` );

 }*/

//4️⃣ELECTRICITY BILL CALCULATOR
 /*let unit = Number(prompt("Enter electricity unit"));
 let amount = 0;

 // Logic for consumption > 400
 if (unit > 400) {
     amount += (unit - 400) * 13;
     unit = 400;
 }

 // Logic for consumption > 200
 if (unit > 200) {
     amount += (unit - 200) * 8;
     unit = 200;
 }

 // Logic for consumption > 100
 if (unit > 100) {
     amount += (unit - 100) * 6;
     unit = 100;
 }

 // Remaining consumption (up to 100)
 amount += unit * 4.2;

 console.log("Total Payable Amount: Rs. " + amount); */

//5️⃣NUMBER OF NOTES
 /*let rupees = Number(prompt("Enter the Rupees"));

 if (rupees >= 500) {
     let n500 = Math.floor(rupees / 500);
     console.log("Number of 500Rs notes are: " + n500);
     rupees %= 500;
 }
 else if (rupees >= 200) {
     let n200 = Math.floor(rupees / 200);
     console.log("Number of 200Rs notes are: " + n200);
     rupees %= 200;
 }
 else if (rupees >= 100) {
     let n100 = Math.floor(rupees / 100);
     console.log("Number of 100Rs notes are: " + n100);
     rupees %= 100;
 }
 else if (rupees >= 50) {
     let n50 = Math.floor(rupees / 50);
     console.log("Number of 50Rs notes are: " + n50);
     rupees %= 50;
 }
 else if (rupees >= 20) {
     let n20 = Math.floor(rupees / 20);
     console.log("Number of 20Rs notes are: " + n20);
     rupees %= 20;
 }
 else if (rupees >= 10) {
     let n10 = Math.floor(rupees / 10);
     console.log("Number of 10Rs notes are: " + n10);
     rupees %= 10;
 }
 else if (rupees >= 5) {
     let n5 = Math.floor(rupees / 5);
     console.log("Number of 5Rs notes are: " + n5);
     rupees %= 5;
 } */

// //ANOTHER METHOD
/* let rupees = Number(prompt("Enter the Rupees"));
 let notes = [500,200,100,50,20,10,5]
 for (let i = 0; i < notes.length; i++) {
     let count = Math.floor(rupees/notes[i])
     console.log(`Number of ${notes[i]} Rs notes are: ${count}`);
     rupees%notes[i]
 }/*

//6️⃣Given a number n, check whether it is even or odd. Return true for even and false for odd.
/*let num = Number(prompt("Enter the number"));
if (num%2==0) {
   console.log("true"); 
}
else{
   console.log("false");
   
}*/
//7️⃣Program for multiplication table
/*let num = Number(prompt("Enter the number"));
for (let i = 1; i <= 10; i++) {
  console.log(num+ "x"+ i + "="+ num*i );
}*/

//8️⃣Program for Sum of squares of first n natural numbers
/*let num = Number(prompt("Enter the number"));
let sum =0
while(num>0){
   digit = num%10
   squares = digit*digit
   sum+=squares
   num=Math.floor(num/10)
}
console.log(sum);*/

//9️⃣You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.

/*function oppositeFaceOfDice(n){
let ans;
if (n==1) {
   ans=6
}
else if (n==2) {
   ans=5
}
else if (n==3) {
   ans=4
}
else if (n==4) {
   ans=3
}
else if (n==5) {
   ans=2
}
else{
   ans=1
}
return ans
}
let n = 2;
console.log(oppositeFaceOfDice(n));*/

//🔟Write a program to reverse digits of a number
/*function revFun(n){
   let revNum = 0;
   while(n>0){
      revNum = revNum*10+n%10
      n =Math.floor( n/10)
   }
   return revNum
}
console.log(revFun(4567));*/

//1️⃣1️⃣Given a number n, determine whether it is a prime number or not.
function Prime(n){
   let count = 0
   for (let i = 1; i <=n; i++) {
      if (n%i==0) {
         count+=1
      }
   }
   if (count == 2) {
      console.log(`${n} is prime number`);
   }
   else{
      console.log(`${n} is not prime number`);
   }
}
Prime(20);