// this keyword
// "This" keyword refers to an object that is executing
// the current piece of code


// const student = {
//     name: 'Raj',
//     age:24,
//     eng:45,
//     math:23,
//     phy:45,
//     getAvg() {
//         console.log(this); // prints everthing in student object
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// student.getAvg();

// function getAvg() {
//     console.log(this); // prints Window object 
// }

// so when we open a js in browser there we are able to create a window using window object
// window.getAvg();
// window.alert("hi");


// try & catch
// the try statement allows you to define a block of code
// to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code
//to be executed, if an error occurs in the try block.

// try{
//     console.log(a);
// }
// catch(err){
//     console.log('a is not defined');
//     console.log(err);// printing the error
// }
// console.log("hello");


// Miscellaneous Topics
// arrow functions
// const func = (arg1, arg2 ...) => {function definition}

// const sum = (a, b) => {console.log(a+b);};

// sum(3,5);
// sum(2, 35);

// const cube = (n) => {
//     return n*n*n;
// };
// console.log(cube(2));
// console.log(cube(4));

// const pow = (a, b) => {
//     return a**b;
// };

// console.log(pow(2,4));


// const hello = () => {
//     console.log('hello world');
// }

// hello();

// arrow functions implicit return 
// const func = (arg1, arg2 ..) => { value }

// const mul = (a, b) => a *b;
// console.log(mul(5,2));

//Set Timeout
// setTimeout(function, timeout)
// function of window object

// console.log("hi there!");

// setTimeout(  () =>{
//     console.log("Hello World!")
// },4000);

// console.log("welcome to");

// Set Interval
// setInterval(function, timeout)
// main diff with timeout is that setInterval repeats after the given time continuing it till we
// encounter clearInterval()
// let id = setInterval( () => {
//     console.log('Heyyy');
// },2000);

// console.log(id);

// let id2 = setInterval( () => {
//     console.log("Heyy2");
// }, 3000);
// console.log(id2);


// clearInterval(id);
// clearInterval(id2);

// this -> with Arrow Functions


// function: scope-> this -> calling objetc

// Arrow: Lexical Scope-> Parent Scope -> call

// const student1 = {
//     name:'Ram',
//     marks:96,
//     prop:this, // global scope student1 object this has window object
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks: () => {
//         console.log(this); // window object // parent's scope
//         return this.marks; // undefined 
//     },

//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this); // student object
//         })
//     },

//     getInfo2: function() {
//         setTimeout( function(){
//             console.log(this); // window object 
//         }, 2000);
//     }


// };

// console.log(student1);

// console.log(student1.getName());// Ram

// console.log(student1.getMarks());



// function -> obj.fun-> student.getName this=student

// arrow fun -> obj.fun this-> parent scope parent-> obejct parnt this ->window object this->window
// in arrow function we use 'this' of the object which has called the func
// 

// student1.getInfo1();
// student1.getInfo2();



// Write an arrow function that returns the square of a number 'n'

// const square = (n) => n*n;

// console.log(square(4));


// Write a function that prints "Hello World" 5 times at intervals of 2s each

// const HelloWorld = () => setInterval(() => {console.log("Hello World")}, 2000);

// console.log(HelloWorld());

// let id  = setInterval( () => {
//     console.log("Hello World");
// }, 2000);

// setTimeout( () => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 11000);