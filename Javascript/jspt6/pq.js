// Create a function that prints Poem
function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}
printPoem();


// Create a function to roll a dice and always display the value of the dice(1 to 6)

function rollDice(){
    let rand = Math.floor(Math.random()*6) +1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

// Functions with Arguments
// Values we pass to the function

// function funName(arg1, arg2,....){
// do something
// }

function printName(name)
{
    console.log(name);
}

printName("SACHIN");
printName("Abhishek");
printName("Mohan");
printName("Rahul");
printName("Abhijeet");
printName("Soham");
printName("Kshitij");
printName("saket");
printName("Prashant");

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}

printInfo('Polard',56);
printInfo('Rajat', 19);

printInfo('karan'); // we didnt pass age so it returned undefined

function sum(a, b){
    console.log(a+b);
}

sum(1,2);
sum(4,5);
sum(7,8);

// Create a function that gives us the average of 3 numbers.

function avg(a, b, c){
    console.log((a+b+c)/3);
}

avg(1,2,3);
avg(5,10,15);
avg(2,4,6);
avg(3,3,3);
console.log(avg);
console.log(Math.random);

// Create a Function that prints the multiplication table of a number

function table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

table(2);
table(73);

// Return Keyword

// function funName(arg1,arg2...){
//do something
// return val; 
// }

function isAdult(age){
    if(age >= 18){
        return "adult";
    }
    else{
        return "not adult";
    }
    console.log("bye bye");
}

let p = isAdult(22);
console.log(p);


// Create s function that returns the sum of numbers from 1 to n


function getSum(n){
let sum =0 ;
for(let i =1; i<=n; i++){
    sum+=i;
}
return sum;
}

let j = getSum(100);
console.log(j);

// function that returns the concatenate of all strings in an array

let str = ["hi", "hello", "bye","!"];
  
function concat(str){
  let result;
    
    for(let i=0;i<str.length; i++){
        result += str[i];
    }

    return result;
}

let q = concat(str);
console.log(q);

// Scope
// function scope, Block scope, lexical scope

//Function Scope
// variables defined inside a function are not accessible inside a function
// let sum = 54; //global Scope
function calSum(a,b){
    let sum = a+b; //Function Scope
    // we can use this sum inside the function only 
    // cannot be accessed outside the function
    console.log(sum);
}

calSum(1, 2);
console.log(sum);

// Block Scope
// Variables declared inside a { } block
// cannot be accessed from outside the block.
// var does not get affected by block scope

{ 
    let a =25;// only inside this block
    const b = 12; // only inside this block
    var c = 33; // can be accessed outsid the block

}

// Lexical scope
// a variable defined outside a function can be accessible inside
// another function defined after the variable declaration
// opposite is not true
function outerFunc() {
   
    function innerFunc(){ // function scope
        console.log(x);
        console.log(y);
    }
     let x =5;
    let y = 6;

    innerFunc();
}

outerFunc();
// hoisting is basically being able to use function
// before variable declaration
// we cannot directly call inner function


let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet); // lexical scope // namaste
    }
    innerGreet();
}

console.log(greet);
changeGreet();

// When function Scope and Global scope compete
// Function scope wins


// Function Expressions 
// new form of function declaration
// basically we define a function and store it in a variable

// let sum = function(a,b) {
//     return a+b;
// }

let hello = function() {
    console.log("hello");
}

console.log(sum(1,2));
console.log(hello());


 hello = function (){
    console.log("namaste");
 }

 hello();

 // High order functions
 // A function that does one or both:
 //takes onr or multiple functions as arguments
 // returns a function

// high order fn takes one or multiple functions as arguments

function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet1 = function() {
    console.log("hello");
}

multipleGreet(greet1, 2);   

multipleGreet(function() {console.log("namaste")},10);

// Higher Order Function (returned)

function oddOrEvenFactory(request) {
    if(request == "odd"){
        let odd = function(n){
                console.log(!(n%2 == 0));
            }
            return odd;
        }
    else if(request == "even") {
            let even = function(n) {
                console.log(n%2 == 0);
            }
            return even;
    }
        else 
        {
            console.log("{wrong request");
        }
    }

    let request = "odd"; 

    let func = oddOrEvenFactory(request);
    console.log(func);
    func(3); // true 3 is odd
    func(10); // false 10 is not odd

    let request1 = "even";

    let func1 = oddOrEvenFactory(request1);
    console.log(func1);
    func1(4); // true 4 is even
    func1(11); // false 11 is not even


// Methods
// Sctions that can be performed on an object

const calculator  = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.mul);
console.log(calculator.sub);


console.log(calculator.add(1,2));
console.log(calculator.mul(2,4));
console.log(calculator.sub(4,1));



// Method(Shorthand)

const calculatorShortHand = {
    add(a, b) {
        return a + b;
    },
    sub(a, b){
        return a - b;
    }

}

console.log(calculatorShortHand);
console.log(calculatorShortHand.add(1,2));
console.log(calculatorShortHand.sub(4,1));