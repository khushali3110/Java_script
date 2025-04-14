// Assignment

// let x = 10;
// let y = "10";

// x += 20;

// // or x = x+20
// console.log(x);

// -=,*=,/=,%=/


// comprasion operator => !=, ==, ===

// let x = 10;
// let y = "10";
// console.log(x == y); // only compare value
// console.log(x === y); // compare both datatype and value


// console.log(x != y);

// console.log(x !== y);

// console.log()



// relation operator => <, >, <=, >=

// const data1 = 30;
// const data2 = 40;

// console.log(data1 > data2); // false
// console.log(data1 < data2); // true
// console.log(data1 >= data2); // false
// console.log(data1 <= data2); // true


// Arithmetic Operators => +,-,/,*,%

// const x = 12;
// const y = 15;

// console.log(x + y);  // 27
// console.log(x - y);  //-3
// console.log(x / y);  //0.8
// console.log(x * y); // 180
// console.log(x % y); //12%15 => 12


// unary operator

// a++ => post increment => phle use kr lo fir  increment kr do
// ++a => pre increment => phle increment kr do fir use kro

// let x = 10;

// console.log(x++);  // 10

// console.log(x++); // 11

// console.log(x) // 12




// console.log(++x);  // 13


// a-- => post decrement -> phle use kro fir decrement kro
// --a => pre decrement -> phle decrement kro fir use kro


// let y = 10;

// y = y++ + ++y + y++;

// console.log(y);


// let z = 5;

// let x = 2;

// x = ++x + x++ + z-- + ++z + x;

// console.log(x);



// ==============================
// Logical Operators in JavaScript
// ==============================

// AND (&&) operator: Both conditions must be true
let x = 10;
let y = 30;
let z = 50;

console.log(x < y && x > z); // false
console.log(x < y && y < z); // true

// OR (||) operator: At least one condition must be true
console.log(x < y || x > z); // true
console.log(x > y || y < z); // true

// NOT (!) operator: Reverses the result
console.log(!(x < y || x > z)); // false
console.log(!(!(x > y) || y < z)); // false

// ==============================

// Variable Swapping
// ==============================

// Swapping using a temporary variable
let a = 10;
let b = 20;

console.log("Before Swap - A:", a, "B:", b);

let temp = a;
a = b;
b = temp;

console.log("After Swap using temp - A:", a, "B:", b);

// Swapping using destructuring
[a, b] = [b, a];

console.log("After Swap using destructuring - A:", a, "B:", b);

// ==============================
// Grade Calculator using if-else if ladder
// ==============================

let marks = parseInt(prompt("Enter your marks"));

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Failed...");
}