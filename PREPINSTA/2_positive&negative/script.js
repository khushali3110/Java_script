
let print = document.getElementById("answer");
function checkSum() {
    let checkNum = parseInt(document.getElementById("sum-num").value);

    if (checkNum > 0) {
        print.innerHTML = `<i>Positive Number</i>`;
    } else if (checkNum < 0) {
        print.innerHTML = `<b>Negative Number!</b>`;
    } else {
        print.innerText = "nutral number";
    }
}



// let k = 0;

// if (k > 0){
//     console.log (`${k} is positive number`)
// }else if (k < 0){
//     console.log (`${k} is negative number`)
// }else{
//     console.log (`${k} is nutral number`)
// }