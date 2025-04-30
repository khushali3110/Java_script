// function isPalindrome(number) {
//   let original = Math.abs(number);
//   let reversed = 0;

//   let temp = original;

//   while (temp > 0) {
//     let digit = temp % 10;
//     reversed = reversed * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//   return reversed == original;
// }

// let input = 123;

// if (isPalindrome(input)) {
//   console.log(`${input} is palindrome number!`);
// } else {
//   console.log(`${input} is not palindrome number!`);
// }


let num1 = 456;
let originalNum= num1;
let rev = 0;



  while (num1 > 0) {
    let digit = num1 % 10;
    rev = rev * 10 + digit;
    num1 = Math.floor(num1 / 10);
  }
    

  if (rev === originalNum) {
    console.log(originalNum + " is a Palindrome Number");
  } else {
    console.log(originalNum + " is NOT a Palindrome Number");
  }
