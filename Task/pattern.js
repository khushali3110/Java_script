console.log("1....................");

for (let i = 1; i <= 5; i++) {
    let row = " ";
for (let j = 1; j <= i; j++) {
    row += j + " ";
    }
  console.log(row);
}


console.log("2....................");

for (let i = 5; i >= 1; i--) {
    let row = "";
for (let j = 1; j <= i; j++) {
    row += j + " ";
    }
  console.log(row);
}

console.log("3.....................");

for (let i = 1; i <= 5; i++) {
    let row = "";
for (let j = 1; j <= i; j++) {
    row += "* ";
    }
    console.log(row);
}

console.log("4......................");

for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("5......................");

for (let i = 1; i <= 5; i++) {
    let row = " ";
    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("6........................");


for (let i = 1; i <= 5; i++) {
    let space = "  ".repeat(5 - i);
    let stars = "* ".repeat(2 * i - 1);
    console.log(space + stars);
}


console.log("7.......................");

for (let i = 5; i >= 1; i--) {
    let space = "  ".repeat(5 - i);
    let stars = "* ".repeat(2 * i - 1);
    console.log(space + stars);
}


console.log("8..........................");


// Top 
for (let i = 1; i <= 5; i++) {
    let space = "  ".repeat(5 - i);
    let stars = "* ".repeat(2 * i - 1);
    console.log(space + stars);
}

// last
for (let i = 5 - 1; i >= 1; i--) {
    let space = "  ".repeat(5 - i);
    let stars = "* ".repeat(2 * i - 1);
    console.log(space + stars);
}

console.log("9.......................");



for (let i = 1; i <= 5; i++) {
    console.log("* ".repeat(i));
}
for (let i = 5 - 1; i >= 1; i--) {
    console.log("* ".repeat(i));
}


console.log("10.......................");
for (let i = 1; i <= 5; i++) {
    console.log((i + " ").repeat(i));
}
