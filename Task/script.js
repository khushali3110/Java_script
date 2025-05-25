
let numbers = [];


function addNum() {
  
    let num = document.getElementById("value1").value;
    
    num = Number(num);

   
    numbers.push(num);

   
    document.getElementById("ick").innerText = numbers.join(", "); 

    let sum = numbers.reduce((a, b) => a + b, 0); 
    
    document.getElementById("ack").innerText = sum; 

    let avg = sum / numbers.length; 
    document.getElementsByTagName("span")[2].innerText = avg.toFixed(2);

    let max = Math.max(...numbers); 
    document.getElementsByTagName("span")[3].innerText = max;

    let min = Math.min(...numbers);
    document.getElementsByTagName("span")[4].innerText = min;

   
    document.getElementById("value1").value;
}








