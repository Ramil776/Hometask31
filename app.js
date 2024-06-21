// hometask
let fullName = prompt("Enter your name and surname");
let [firstName] = fullName.split(' ');
console.log("Hello, " + firstName + "!");

// hometask
let num1 = prompt("Enter a 4-digit number");
let digits = num1.split('').map(Number);
let sum = digits[0] + digits[1] + digits[2] + digits[3];
console.log(sum);




