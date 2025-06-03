let students = ["John", "Jane", "Jim", "Jill"];

let nums = [2, 4, ,6 ,8]

nums[0] //2
nums[1] // 4
nums[4] // undefined
nums.length // 4
typeof nums // object

let marks = [90, 80, 70, 60, 50];
let names = ["John", "Jane", "Jim", "Jill"];

let info = ["andrew", 25, true, null, undefined, { city: "New York" }, [1, 2, 3]]; // mixed array

// empty array
let newArray = [];
info[0][0] // "a"
info[0].length //6

// Arrays are mutable

let fruits = ['mango', 'apple', 'litchi'];
fruits[0] = 'banana'; //'banana'
fruits // ['banana', 'apple', 'litchi']

let name = "rohit";
name[0]='m';
name // rohit no change in original string
// but in fruits we can change the value of the array 

// array method
// push, pop, unshift, shift
let cars = ['audi', 'bmw', 'mercedes'];
// push
cars.push('toyota'); // add to end  
cars // ['audi', 'bmw', 'mercedes', 'toyota']
// pop
cars.pop(); // remove last element
cars // ['audi', 'bmw', 'mercedes']
// unshift
cars.unshift('honda'); // add to start
cars // ['honda', 'audi', 'bmw', 'mercedes']
// shift
cars.shift(); // remove first element
cars // ['audi', 'bmw', 'mercedes']
// splice
cars.splice(1, 1); // remove 1 element from index 1
cars // ['audi', 'mercedes'] 


// indexOf: returns the index of the first occurrence of a specified value in an array, or -1 if it is not present.
let primary = ['red', 'yellow', 'blue'];
primary.indexOf('yellow'); //1
primary.indexOf('green'); //-1
primary.indexOf('Yellow'); //-1

//includes: search for a specified value in an array and returns true or false, depending on if it is found.
primary.includes('red'); //true
primary.includes('green'); //false

// concat: merge two or more arrays
let secondary = ['orange', 'purple', 'green'];
primary.concat(secondary); // ['red', 'yellow', 'blue', 'orange', 'purple', 'green']

//reverse: reverse the order of the elements in an array
// reverse() method changes the original array and returns a reference to the same array. 
primary.reverse(); // ['blue', 'yellow', 'red']


// splice method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let colors  = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']; 
// splice changes the original array
colors.splice(4); // ['red', 'green', 'blue', 'yellow']
colors.splice(0,1); // ['green', 'blue', 'yellow']

colors.splice(1, 0, 'black'); // ['green', 'black', 'blue', 'yellow']

// splice(start ,delete, item1, ...)

// sort : sorts an array

let days = ['monday','sunday', 'tuesday','wednesday','thursday','friday','saturday'];
days.sort(); // ['friday', 'monday', 'saturday', 'sunday', 'thursday', 'tuesday', 'wednesday']

let chars = ['b','d','e','a'];
chars.sort(); // ['a', 'b', 'd', 'e']

// sort method is not used for numbers
// numbers are converted to strings and sorted