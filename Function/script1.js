

// 4 way of function
//simple function


// function show() {
//     console.log("simple function");
// }
// show();


// ( () => {
//     console.log("IIFE function")
// })()


// var show2 = function () {
//     console.log("annonymous function");
// }
// show2();


// const show3 = () => {
//     console.log("arrow function");
// };
// show3();



// function concepts

function add(){
    var a = 40;
    var b = 55;
    console.log("addition =",(a+b));  
}
add()
add()


function sum(a , b){
    console.log("addition =",(a+b));
}
sum(4,5)
sum(4,4)


function calc(a , b){
    return a+b
}
    console.log("addition=",calc(45,4));
    const output = calc(2,3)
    console.log("sum =", output);
    

function add(a,b){
    console.log(`addition of ${a} & ${b} = ${a + b}`);
}
add(5,6)
add(7,1)