let months = ['january', 'july', 'march','august'];
// final - ['july','june','march','august']

months.splice(0,2, 'july','june'); // remove 2 elements from index 0 and add 2 elements
months // ['july', 'june', 'march', 'august']






let lang = ['c','c++','html','javascript','python','java','c#','sql']
lang.reverse().indexOf('javascript'); // 4



// array references 

"name" == "name"; // true
"name" === "name"; //true



// address of the array is different
[1] === [1];  // false 

[1] == [1]; // false

[] == []; // false
[] === []; // false



// array references
let a = [1,2,3];
let b = a;
a[0] = 10;
b[0] = 20;
console.log(a); // [20,2,3]
console.log(b); // [20,2,3]
// a and b are pointing to the same array
b == a; // true
b === a; // true


// constant arrays

const arr = [1,2,3];

arr // [1,2,3]

arr.push(4); // [1,2,3,4]
arr // [1,2,3,4]

arr.pop(); // [1,2,3]
arr // [1,2,3]

arr = [1,2,3]; // error: arr is a constant

// const arr means that the reference to the array or the address  is constant, not the array itself
// we can change the elements of the array but we cannot change the reference of the array
// the first address of the array is constant

arr = cars; // error: arr is a constant
// we cannot change the reference of the array


// NEsted array
let nums = [[2,4], [3,6], [4,8]];
nums // [2,4] [3,6] [4,8]
nums // [ array(2), array(2), array(2)]
nums.length // 3

nums[0] // [2,4]
nums[0][0] // 2

