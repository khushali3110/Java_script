// function checkData() {
//     // Get the value from the input
//     let start = parseInt(document.getElementById("input-num1").value);
//     let print = document.getElementById("primenum");

  
//     let count = 0;
//         for (let i = 1; i <= start; i++) {
            
//             if (start % i == 0) {
//                 ++count;
//             }
//         }
    
//         if (count == 2) {
//             print.innerText = " prime number";
//         }else{
//             print.innerText = "not a prime number";
//         }
//     }


 

let num = 2;
let count = 0;

for (let i = 1; i <= num; i++){
    if(num % i == 0){
        count++;
    }
}


if (count === 2){
    console.log(`${num} is prime number!`);
}else{
    console.log(`${num} is not prime number!`);
} 

