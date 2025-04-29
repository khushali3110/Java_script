let print = document.getElementById("primenum");

function checkData() {
  // Get the values of the two input numbers
  let start = parseInt(document.getElementById("input-num1").value);
  let end = parseInt(document.getElementById("input-num2").value);
  // let print = document.getElementById("primenum");

  for (let begin = start; begin <= end; begin++) {
    let count = 0;
    for (let i = 1; i <= begin; i++) {
      if (begin % i == 0) {
        count++;
      }
    }

    if (count == 2) {
      print.innerText += `${begin} ,`;
    }
  }
}




// function isPrime(num){
//     if(num < 2){
//         return false;
//     }

//     for (let i = 2; i < num; i++ ){
//         if (num % 2 == 0){
//             return false;
//         }
//     }

//     return true
// }

// let start = 50;
// let end = 100;

// for (let i = start; i <= end; i++){
//     if(isPrime(i)){
//         console.log(`${i}is prime number!`)
//     }else{
//         console.log(`${i}is not prime number!`)
//     }
// }

let start = 10;
let end = 90;

for(let i = start; i<=end; i++){

    let num = i;
    let count = 0;
    
    for (let i = 1; i <= num; i++){
        if(num % i == 0){
            count++;
        }
    }
    
    
    if (count === 2){
        console.log(`${num} is prime number!`);
    }
}


