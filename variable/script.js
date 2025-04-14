// -----------------------------------
// Variableskeyword in JavaScript 
// -----------------------------------

// Using var:
// - Not block scoped (means it's globally accessible or function scoped)
// - Can be redeclared
// - Less secure in modern JavaScript

// var username = "Vraj";
// console.log(username);

// var username = "Raj";
// console.log(username);

// Even if var is inside a block, it's accessible outside
// {
//   var num = 10;
//   console.log("Inside block using var:", num);
// }
// console.log("Outside block using var:", num); // Still accessible

// Using let:
// - Block scoped (only accessible inside the block)
// - Can be updated, but not redeclared in the same scope
// - More secure than var

// let num1 = 100;
// console.log("Original value (let):", num1);

// num1 = 200; // Value updated
// console.log("Updated value (let):", num1);

// // let example with block scope
// let x = 20;

// {
//   let x = 50; // This x is different, scoped to this block
//   console.log("Block scope x:", x); // 50
// }
// console.log("Global scope x:", x); // 20

// let can't be redeclared in the same scope
// let value;
// let value = 29; // This will give an error

// value = 20000;
// console.log("Assigned later (let):", value);

// var and let with same variable name in same scope is not allowed
// var x = 20;
// let x = 40; // This will give an error

// Using const:
// - Also block scoped
// - Must be initialized at the time of declaration
// - Can't be updated or redeclared

// const constNum = 20;
// console.log("constNum:", constNum);

// const constNum;         // ❌ Not allowed without initialization
// constNum = 40;          // ❌ Can't assign new value

// {
//   const constVal = 10;
//   console.log("Inside block (const):", constVal);
// }

// // Outside the block, constVal is not accessible
// console.log(constVal); // ❌ Error

// Another let example with block scope
// let y = 10;
// {
//   // let y = 20; // New block variable (will work if uncommented)
//   console.log("Access y inside block:", y);
// }

// -----------------------------------
// Getting user input using prompt()
// -----------------------------------


// for any value
// let num = parseInt(prompt("Enter number:"));
// console.log(num);
// console.log(typeof num);


// for string
// let num = prompt("Enter number:");
// console.log(num);
// console.log(typeof num);