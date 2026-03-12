//Check whether the string is palindrome or not

// let str = "Computer";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// if (str == rev) {
//   console.log("String is palindrome");
// } else {
//   console.log("String is not palindrome");
// }

//Find Unique Characters of a String in JavaScript

// let s1 = "javascript";
// let s2 = [...new Set(s1)];
// console.log(s2);

//STRINGS

/* 1. give me only hint i want to do this problem in js Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']'. Determine whether the Expression is balanced or not.
An expression is balanced if:

Each opening bracket has a corresponding closing bracket of the same type.
Opening brackets must be closed in the correct order.*/

// function isBalanced(expression) {
//   let stack = [];
//   for (const char of expression) {
//     if (char == "{" || char == "[" || char == "(") {
//       stack.push(char);
//     } else if (stack.length === 0) {
//       return false;
//     } else {
//       let top = stack.pop();
//       if (
//         (char == ")" && top != "(") ||
//         (char == "]" && top != "[") ||
//         (char == "}" && top != "{")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// let expression = "{[()]}";
// if (isBalanced(expression)) {
//   console.log("Expression is balanced");
// } else {
//   console.log("Expression is not balanced");
// }

/* 2. Given two non-empty strings s1 and s2, consisting only of lowercase English letters, determine whether they are anagrams of each other or not.
Two strings are considered anagrams if they contain the same characters with exactly the same frequencies, regardless of their order.*/
// let str1 = "hello";
// let stack1 = [];

// for (let char of str1) {
//   stack1.push(char);
// }

// let str2 = "oelhl";
// let stack2 = [];

// for (let char of str2) {
//   stack2.push(char);
// }

// if (str1.length != str2.length) {
//   console.log("Strings are not anagrams");
// } else {
//   stack1.sort();
//   stack2.sort();

//   let res1 = stack1.join("");
//   let res2 = stack2.join("");

//   if (res1 === res2) {
//     console.log("Strings are anagrams");
//   } else {
//     console.log("Strings are not anagrams");
//   }
// }

/* Given a string s, reverse the string without reversing its individual words. Words are separated by dots(.) 
   Input: s = "i.like.this.program.very.much"
   Output: "much.very.program.this.like.i" 
*/

// let string = "i.like.this.program.very.much";

// let result = string.split(".").reverse().join(".");

// console.log(result);

/* Given a string s consisting of lowercase English Letters. return the first non-repeating character in s. If there is no non-repeating character, return '$'. */

// let word = "geeksforgeeks";
// let count = {};

// for (const char of word) {
//   if (count[char]) {
//     count[char] += 1;
//   } else {
//     count[char]=1;
//   }
// }
// for (const char in count) {
//   if (count[char] === 1) {
//     console.log(char);
//   }
// }

