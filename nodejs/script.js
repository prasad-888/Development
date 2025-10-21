// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello, ", i);
// }

// console.log("bye");

// let args = process.argv;

// // console.log(process.argv);

// for(let i=2; i<args.length; i++){
//     console.log("hello  to ", args[i]);
// }


// const someValue = require("./math");

// console.log(someValue);


// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,2));
// console.log(math.PI);

// const info = require("./Fruits");

// console.log(info);





// require alternative import

import {
    sum, PI
}
from "./math.js"

console.log(sum(1,2));
console.log(PI);

// we cant selectively load only the pieces we need with require 
// but with import, we can selectively load only the pieces we need,
// which can save memory,

// Loading is synchronous for 'require' but can be asynchronous for 'import'

import {generate} from "random-words";

console.log(generate());