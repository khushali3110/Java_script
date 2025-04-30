// without function

let input = 1234;

let sum = 0;

while (input > 0) {
    let digit = input % 10;
    sum += digit;
    input = Math.floor(input / 10);
}

console.log(sum);


// with function
// function sumofDigits(number) {
//     let sum = 0;
//     let num = Math.abs(number);

//     while (num > 0) {
//         let digit = num % 10;
//         sum += digit;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// let input = 1234;
// let result = sumofDigits(input);
// console.log("sum of digit :", result);

