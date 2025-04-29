
function checkSum(){
    
    let count = parseInt(document.getElementById("sum-num").value)
    let result = document.getElementById("answer");
        
        if (count % 2 == 0){
           result.innerText = "even number!"
        }
        else{
            result.innerText = "odd number!"
        }
}
