function calc(choice) {
    alert(choice)
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let output;
    let op;

    switch (choice) {
        case 1:
            output = Number(value1) + Number(value2);
            op = "addition";
            break;
        case 2:
            output = Number(value1) - Number(value2);
            op = "subtraction";
            break;
        case 3:
            output = Number(value1) * Number(value2);
            op = "multipliaction";
            break;
        case 4:
            output = (Number(value1) / Number(value2)).toFixed(2);
            op = "division";
            break;
        case 5:
            output = Number(value1) % Number(value2);
            op = "remender";
            break;
        case 6:
            alert("wrong choice");
            break;
    }
    const result = `${op} ${value1} & ${value2} = ${output}`;
    document.getElementById("ack").innerHTML = result
}