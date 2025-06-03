// // console.log("Hello World!");
// // let a =10;
// // let b= 5;
// //let num=10;
// // console.log("sum is",a+b);
// //console.log(1+2);
// //console.log("hello","world", num , (1+5));
// //it will print hello world 10 6

// // In javascript if we want to print something in the console of the browser we use console.log



// let pencilPrice = 10;
// let eraserPrice = 5;
// console.log("The total price is :", pencilPrice +  eraserPrice, "Rupees");
// console.log("the total price is : " + ( pencilPrice + eraserPrice) + " Rupees. ");
// //  As seen above when we want to add variables in a string there is effort i.e we have to write " " 
// // every time so we use something called template literals
// // they are written using backticks i.e ` ` they are just below the esc key
// // and we can use ${} to add variables in the string
// console.log(`Your total price is ${pencilPrice + eraserPrice} Rupees. `);



// // Operators in JS
// // 1. Arithmetic Operators
// console.log(1 + 2); // addition
// console.log(1 - 2); // subtraction
// console.log(1 * 2); // multiplication
// console.log(1 / 2); // division
// console.log(1 % 2); // modulus
// console.log(1 ** 2); // exponentiation

// // 2. Unary Operators
// let a = 10;
// console.log(a++); // 10
// console.log(a); // 11
// console.log(++a); // 12
// console.log(a--); // 12     
// console.log(a); // 11
// console.log(--a); // 10

// // 3. Assignment Operators
// let b = 10;
// b += 5; // b = b + 5
// console.log(b); // 15
// b -= 5; // b = b - 5    
// console.log(b); // 10
// b *= 5; // b = b * 5
// console.log(b); // 50
// b /= 5; // b = b / 5
// console.log(b); // 10
// b %= 5; // b = b % 5
// console.log(b); // 0
// b **= 5; // b = b ** 5
// console.log(b); // 0


// // 4. Comparison Operators
// console.log(1 == 1); // true
// console.log(1 == 2); // false
// console.log(1 != 1); // false
// console.log(1 != 2); // true
// console.log(1>2); // false
// console.log(1>=2); // false
// console.log(1<2); // true
// console.log(1<=2); // true
// // a bit strange is the === operator

// // == checks value  of the variable and not the type
// console.log(1 === 1); // true
// console.log(1 === '1'); // true

// // === compares both value and type
// console.log(1 === '1'); // false

// // Copmparison for non-numbers
// // a-61 b-62 ......
// // A-41 B-42 ......
// console.log('a'>'A'); // true
// console.log('a'>'b'); // false
// console.log('B'<'C'); // true
// console.log('*' < '&'); // false


// // 5. Logical Operators
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false
// console.log(!true); // false
// console.log(!false); // true    


// // Conditional Statements

// //if-else
// //nested if-else
// //switch

// let age = 19;
// console.log("before my if statement");
// if(age>=18){
//     // Do something
//     console.log('you can vote');
// }
// // some code after if
// console.log("after my if statement");


// let firstName = "aman";
// if(firstName == "shradha"){
//     console.log('Welcome $(firstName)');
// }

// let age = 14;
// if(age >= 18){
//     console.log("You can vote");
// }
// else if(age < 18){
//     console.log("You cannot vote");
// }
// else{
//     console.log("You are not eligible to vote");
// } 

 