// function checkData() {
//   // Get the value from the input
//   let year = parseInt(document.getElementById("input-num1").value);
//   let print = document.getElementById("LeapYear");

//   // Check if the input is a valid number
//   if (isNaN(year)) {
//     print.innerHTML = `<b class="text-danger">Please enter a valid year</b>`;
//     return;
//   }
  

//   // Function to check if it's a leap year
//   function isLeapYear(year) {
//     return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
//   }

//   // Output result
//   if (isLeapYear(year)) {
//     print.innerHTML = `<i>Leap year </i>`;
//   } else {
//     print.innerHTML = `<i>Not a leap year</i>`;
//   }
// }


let year = 1996;

if(year % 400 == 0){
    console.log(`${year} is leap year! `);
}else if(year % 4 == 0 && year % 100 !== 0){
   console.log(`${year} is leap year! `);
}else{
    console.log(`${year} is not leap year!`)
}
