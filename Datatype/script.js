/* -----------------------------------
   JavaScript Lecture: Data Types & Variables
   -----------------------------------*/

/* JavaScript has 8 primitive data types and 1 non-primitive:
   1. String
   2. Number
   3. BigInt
   4. Boolean
   5. Undefined
   6. Null
   7. Symbol
   8. Object (non-primitive)
*/



// -----------------------------------
// Checking Data Types using typeof
// -----------------------------------

let username2 = "Pawan Maurya";
console.log(username2, "-", typeof username2); // string

let age = 25;
console.log(age, "-", typeof age); // number

let isPresent = true;
console.log(isPresent, "-", typeof isPresent); // boolean

let bigNum = 5678990n;
console.log(bigNum, "-", typeof bigNum); // bigint

let notAssigned;
console.log(notAssigned, "-", typeof notAssigned); // undefined

let data = null;
console.log(data, "-", typeof data); // object (this is a known bug in JavaScript)

let s = Symbol(20);
console.log(s, "-", typeof s); // symbol

let arr = [12, "Pawan", true];
console.log(arr, "-", typeof arr); // object (arrays are also objects in JavaScript)

// Reassignment of symbol is not allowed as number
// s = 20; // ❌ Error
// console.log(s, typeof s);

// -----------------------------------
// Array iteration using forEach()
// -----------------------------------

let numbers = [12, 34, 56, 78];

numbers.forEach((item, index) => {
  console.log("Index:", index, "Value:", item);
});

/*
Important Points:
- var → function/global scoped, multiple declaration allowed
- let → block scoped, reinsliaztion allowed but no redeclaration
- const → block scoped, neither reinsliaztion nor redeclare
- Use typeof to check data types
- Arrays are also treated as objects
- prompt() ka use karke hum user se input le sakte hain
*/