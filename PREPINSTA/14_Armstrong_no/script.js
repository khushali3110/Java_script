// with function
// function isArmstrong(number) {
//   let num = Math.abs(number);
//   let temp = num;
//   let digits = 0;

//   // count no of digit
//   while (temp > 0) {
//     digits++;
//     temp = Math.floor(temp / 10);
//   }

//   temp = num;

//   let sum = 0;

//   // calculate sum of power
//   while (temp > 0) {
//     let digit = temp % 10;

//     sum += Math.pow(digit,digits);
//     temp = Math.floor(temp / 10);
//   }

//    return sum == num;
// }

// let input = 145;

// if(isArmstrong(input)) {
//     console.log(`${input} is armstrong number!`);
// }else{
//     console.log(`${input} is NOT armstrong number!`);
// }   


// without function
let num=153;
let temp =num;
let digits=0;


  while (temp > 0) {
    digits++;
    temp = Math.floor(temp / 10);
  }

  temp = num;

  let sum = 0;

    while (temp > 0) {
    let digit = temp % 10;

    sum += Math.pow(digit,digits);
    temp = Math.floor(temp / 10);
  }
  if (sum==num){
    console.log(`${num} is armstrong number`);
    }else{
        console.log(`${num} is NOT armstrong number`);
    }   

  