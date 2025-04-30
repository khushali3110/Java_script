// without function

let num = 1234;

let reverse = 0;

while(num>0){
    let digit = num%10;
    reverse = reverse*10 +digit;
    num = Math.floor(num/10);
}

console.log(reverse);

// with function

// function reverseNumber(number) {
//   let reverse = 0;
//   let num = Math.abs(number);

//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reverse;
// }

// let input = 12345;

// console.log("input: ",input)
// let rev = reverseNumber(input);

// console.log("reverse: ",rev)