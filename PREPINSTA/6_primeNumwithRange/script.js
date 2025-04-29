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
