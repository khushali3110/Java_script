let x = 100;
let y = 3;
let z = 100;

if(x > y && x > z){
    console.log(x,"x is greatest")
}else if(y > x && y > z){
    console.log(y,"y is greatest")
}else if (z > x && z > y) {
    console.log(z,"z is greatest")
}else{
    console.log(" all data is same!")
}