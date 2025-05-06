let x = 0;
console.log(x);
let y = 1;
console.log(y);

for (let i = 3; i <= 10; i++){
    let next = x + y;
    console.log(next);
    x = y;
    y = next;
}



// 0   ← from console.log(x)
// 1   ← from console.log(y)
// 1   ← 0 + 1
// 2   ← 1 + 1
// 3   ← 1 + 2
// 5   ← 2 + 3
// 8   ← 3 + 5
// 13  =   5 + 8
// 21   =  8 + 13