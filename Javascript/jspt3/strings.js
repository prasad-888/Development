// Javascript strings are immutable, meaning that once a string is created, it cannot be changed.

let str = "random string";

str.toUpperCase(); // "RANDOM STRING"
str.toLowerCase(); // "random string"

// with arguments

let msg = "ILoveCoding";
msg.indexOf("Love");

msg.indexOf("o");

msg.indexOf("z"); // -1 because "z" is not in the string

let msg1 = "   hello   ";
let newMsg1 = msg1.trim();
console.log(newMsg1); // "hello"
newMsg1 = newMsg1.toUpperCase();
console.log(newMsg1); // "HELLO"

// Methodchaining
msg1 = msg1.trim().toUpperCase();
console.log(msg1); // "HELLO"

// slice

msg.slice(5) // Coding
msg.slice(1,5)  // love
 msg.slice(-1) // msg.slice(msg.length-1 = 10) 

// replace

let str1 = "IloveCoding";
str1.slice("love","do"); // "IdoCoding"
str1.slice("o","x");  //"IlxveCoding" // first occurence of "o" is replaced with "x"


str1.replace("love","do"); // IdoCoding
str1.replace("o","x"); // IlxveCoding // first occurence of "o" is replaced with "x"

str1.repeat(2); //'IloveCodingIloveCoding'

let fruit = 'mango';
fruit.repeat(5); // 'mangomangomangomangomango'