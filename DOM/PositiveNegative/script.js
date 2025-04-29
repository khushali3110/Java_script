let print = document.getElementById("answer");


function checkData() {
    let inputNum = parseInt(document.getElementById("input-num").value);


    if (inputNum >= 0) {
        print.innerHTML = `<b>positive number</b>`;
    } else {
        print.innerText = "Negative Number!";  
    }
}


