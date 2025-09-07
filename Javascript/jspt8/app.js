// Array Method

// forEach
// arr.forEach(some function definition  or name)
// applies to each element
// nowadyas we use for of loop
// takes single argument

// let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
// };


// arr.forEach(print);

// arr.forEach(function (el){
//     console.log(el);
// });

// arr.forEach((el) => {console.log(el)});



// forEach for object 
// let students =  [{
//     name:"ram",
//     marks:95
// },
// {
//     name: 'raj',
//     marks:94.4
// }, 
// {
//     name:'soham',
//     marks:92
// }];


// console.log(arr);

// arr.forEach( (student) => {
//     console.log(student.marks);
// });



// Map Function

// let newArr = arr.map(some function definition or name);

// let num = [1, 2, 3, 4];

// let double = num.map( (el) => {
//     return el * 2;
// } );

// let square = num.map( (el) => {
//     return el * el;
// })


// console.log(double);
// console.log(square);


// let gpa = students.map((el) => {
//     return el.marks / 10;
// })


// console.log(gpa);


// Filter 
// let newArr = arr.filter( some function definition or name);

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans_even = nums.filter( (el) => {
//     return el % 2 == 0; //even -> true, odd -> false
// })

// console.log(ans_even);

// let ans_odd = nums.filter( (el) => {
//     return el % 2 != 0; // odd->true, even->false
// })

// console.log(ans_odd);

// let lessthan5 = nums.filter( (el) => {
//     return el < 5; 
// })

// console.log(lessthan5);


// Every Method
// Returns true if every element of array gives true for 
// some function. Else return false.
// arr.ever( some function definition or name);
// Every function is like logical AND


// console.log([2, 4, 6].every( (el) => el%2 == 0)); // true

// console.log([2, 4, 6, 8].every( (el) => el%2 == 0)); // true

// console.log([2, 4, 6, 8, 1].every( (el) => el%2 == 0)); // false

// console.log([3, 5, 2, 4].every( (el) => el%2 != 0)); //false

// console.log([3, 5, 1].every( (el) => el%2 != 0)); // true


// Some 
// Returns true if some elements of array give true for some function. Else returns false
// arr.some( some function definition or name);
// Some is like Logical OR

// console.log([1, 2, 3, 4].some( (el) => (el%2 == 0))); // true

// console.log([1, 3].some( (el) => (el%2 == 0))); // false
 

// REDUCE
// Reduces the array to a single value
// arr.reduce( reducer function with 2 variables for (accumulator, element));
// gives us a value just like evry and some but it gives a VALUE


// let nums = [1, 2, 3, 4,111, 22, 333,444,21,897]; 
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res+el
// });
// console.log(finalVal);

// Maximum in a array using reduce method

// let Maximum = nums.reduce( (max, el) => {
//     if (max < el) {
//         return el;
//     }
//     else{
//         return max;
//     }
// });

// console.log(Maximum);


// Check if all numbers in our array are multiples of 10 or not

// let nums = [10, 20, 30, 40];

// let ans = nums.every( (el)=>  el % 10 == 0);

// console.log(ans);



// Create a function to fins the min number in an array
// function getMin(nums) {
// let min = nums.reduce( (min,el) => {
//     if(min < el){
//         return min;
//     }
//     else{
//         return el;
//     }
// } );

// return min;
// }
// console.log(getMin(nums));




// Default Parameter

// Giving a default value to the arguments
// try to use default parameters at end

// function func(a, b=2){
//     return a+b;
// }

// console.log(func(1));


// function sum(a=2,b){
//     return a + b;
// }

// console.log(sum(1, 3)); //4
// console.log(sum(1)); //a=1, b= undefined
 

// Spread Method
// Expands an iterable into multiple values

// console.log(Math.min(nums));        // Nan

// console.log(Math.min(...nums));// spread 

// nums.push(-1);

// console.log(Math.min(...nums));
// console.log(Math.max(...nums));


// console.log(...nums);
// console.log(..."Hello World");


// Spread with array literals

// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// console.log(newArr);

// let chars = [..."hello"];

// console.log(chars);

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];

// console.log(nums);




// Spread with object literals


// const data = {
//     email: "ironman@gmail.com",
//     password: 'abcd',
// };

// const dataCopy = {...data, id:123, country:'India' };

// console.log(dataCopy);

// let arr = [1, 2, 3, 4, 5];

// let obj1 = {...arr}; //obj -> key:val

// console.log(obj1);


// let obj2 = {..."hello"};

// console.log(obj2);



// Rest 
// rest is completely opposite to spread
// Allows a function to take an indefinite number of arguments and bundle them in an array.

// function sum(...args) { // arguments
//     console.log(args);
//     for(let  i=0; i<args.length; i++){
//         console.log("you gave us :", args[i]);

//     }
    
// }

// console.log(sum(1, 2, 3, 4));

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     // arguments.push(1); // cannot apply as arguments is not array its a collection
// }

// console.log(min(1,2,3,4));

// function sum(...args) {
//     // return arguments.reduce( (sum,el) => sum + el ); // this line will not wirk as reduce is not a array
//     // arguments[0], arguments[1], arguments[2], arguments[3]

//     return args.reduce( (sum, el) => sum + el );
// }

// function min(msg,...args) {
//     console.log(msg);
//     return args.reduce( (min, el) => {
//         if(min > el){
//             return el;
//         }
//         else {
//             return min;
//         }
//     })
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum(12, 445, 123, -20));

// console.log(min(23,12324,134));
// console.log(min(12, 445, 123, -20));
// console.log(min("hello", 12, 234, -124));



// Destructuring 
// Storing values of array into multiple variables

 let names = ["tony", "bruce", "steve", "peter"];

//  let winner = names[0];
// let runnerup = names[1];

 let[winner, runnerup, ...others] = names;
 console.log(winner, runnerup); //"tony", "bruce"
 console.log(others);


 // Destructuring for objects

 const student = {
    name: "karan",
    age:14,
    class:9,
    subjects : ['hindi', 'english', 'math', 'acience'],
    username: "karan@123",
    password: "abcd", city: 'Pune'
 };


//  let username = student.username;
//  let password = student.password;


//  console.log(username);
//  console.log(password);

let {username: user, password: secret, city: location ="Mumbai"} = student; // username is the key and the returned value is stored in user
// password key and the value is stored in secret variable

console.log(user,secret, location);
