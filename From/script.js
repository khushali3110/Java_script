function checkData() {
    alert("first")
    let username = document.getElementById("name").value;
    console.log(username);

    let email = document.getElementById("email").value;
    console.log(email);

    let Mobile = document.getElementById("number").value;
    console.log(Mobile);

    const result = `<b>name:</b>${username}, <b>email:</b> ${email} ,<b> mobile:</b> ${Mobile}`;
    document.getElementById("output").innerHTML = result;
}
