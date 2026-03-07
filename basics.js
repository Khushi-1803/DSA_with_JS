//SWAPPING A NUMBER
// let a = 10;
// let b = 20;
// [ a,b] =[ b,a]
// console.log(a,b);

//SUM OF DIGITS
// let c = 1678
// let sum = 0
// while(c>0) {
//     let digit = c%10
//     sum = sum+digit
//     c=Math.floor(c/10)
// }
// console.log(sum);

//SHOPPING
 const prompt = require("prompt-sync")();
// let amount = Number(prompt("Enter the amount"))
// if(isNaN(amount)){
//     console.log("Invalid amount");
// }
// else if(amount>=0 && amount<=5000){
//     console.log(`Payable Amount: ${amount}` );
// }
// else if(amount>=5001 && amount<=7000){
//     let discount = amount * (5/100)
//     amount = amount-discount;
//     console.log(`Payable Amount: ${amount}` );

// }
// else if(amount>=7001 && amount<=9000){
//     let discount = amount * (10/100)
//     amount = amount-discount;
//     console.log(`Payable Amount: ${amount}` );

// }
// else{
//     let discount = amount * (20/100)
//     amount = amount-discount;
//     console.log(`Payable Amount: ${amount}` );

// }

//ELECTRICITY BILL CALCULATOR
// let unit = Number(prompt("Enter electricity unit"));
// let amount = 0;

// // Logic for consumption > 400
// if (unit > 400) {
//     amount += (unit - 400) * 13;
//     unit = 400;
// }

// // Logic for consumption > 200
// if (unit > 200) {
//     amount += (unit - 200) * 8;
//     unit = 200;
// }

// // Logic for consumption > 100
// if (unit > 100) {
//     amount += (unit - 100) * 6;
//     unit = 100;
// }

// // Remaining consumption (up to 100)
// amount += unit * 4.2;

// console.log("Total Payable Amount: Rs. " + amount);

//NUMBER OF NOTES
// let rupees = Number(prompt("Enter the Rupees"));

// if (rupees >= 500) {
//     let n500 = Math.floor(rupees / 500);
//     console.log("Number of 500Rs notes are: " + n500);
//     rupees %= 500;
// }
// else if (rupees >= 200) {
//     let n200 = Math.floor(rupees / 200);
//     console.log("Number of 200Rs notes are: " + n200);
//     rupees %= 200;
// }
// else if (rupees >= 100) {
//     let n100 = Math.floor(rupees / 100);
//     console.log("Number of 100Rs notes are: " + n100);
//     rupees %= 100;
// }
// else if (rupees >= 50) {
//     let n50 = Math.floor(rupees / 50);
//     console.log("Number of 50Rs notes are: " + n50);
//     rupees %= 50;
// }
// else if (rupees >= 20) {
//     let n20 = Math.floor(rupees / 20);
//     console.log("Number of 20Rs notes are: " + n20);
//     rupees %= 20;
// }
// else if (rupees >= 10) {
//     let n10 = Math.floor(rupees / 10);
//     console.log("Number of 10Rs notes are: " + n10);
//     rupees %= 10;
// }
// else if (rupees >= 5) {
//     let n5 = Math.floor(rupees / 5);
//     console.log("Number of 5Rs notes are: " + n5);
//     rupees %= 5;
// }

// //ANOTHER METHOD
// let rupees = Number(prompt("Enter the Rupees"));
// let notes = [500,200,100,50,20,10,5]
// for (let i = 0; i < notes.length; i++) {
//     let count = Math.floor(rupees/notes[i])
//     console.log(`Number of ${notes[i]} Rs notes are: ${count}`);
//     rupees%notes[i]
// }



