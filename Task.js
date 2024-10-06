function All(num1, Char, num2) {
    if(Char == '+') {
        return num1 + num2;
    } else if(Char == '-') {
        return num1 - num2;
    } else if(Char == '*') {
        return num1 * num2;
    } else if(Char == '/') {
        return num1 / num2;
    } 
}
let num1 = parseInt(prompt("Enter 1st Number: "));
let num2 = parseInt(prompt("Enter 2nd Number: "));
let Chr = prompt("Enter +/ -/ */ /: ");

console.log(All(num1, Chr, num2));


function C(Cel) {
    return (Cel * 9 / 5) + 32;
}
let In = parseInt(prompt("Enter Celsius: "));
console.log(C(In));


let Arr = [1, 8, 9, 3, 10, 100, 5, 6, 7, 8, 2, 99];
let Even = [];
for(i=0; i<Arr.length; i++) {
    if(Arr[i] % 2 == 0) {
        Even.push(Arr[i]);
    }
}
console.log(Even);

let Arr = [1, 8, 9, 3, 10, 100, 5, 6, 7, 8, 2, 99];
let mx = 0;
for(i=0; i<Arr.length; i++) {
    if(mx < Arr[i]) {
        mx = Arr[i];
    }
}
console.log(mx);