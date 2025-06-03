// getting first n elements of an array
// array[7,9,0,-2] and n=3
//print [7,9,0]

let arr = [7,9,0,-2];
let n1 = 3;
let ans = arr.slice(0,n1);
console.log(ans); // [7,9,0]


//get last n elements of an array

let n =3
console.log(arr.slice(arr.length-n)); // [9,0,-2]


// check if a string is blank or not
let str = prompt("please enter a string");
if(str.length ==0){
    console.log("string is empty");
}

else{
    console/log("string is not empty");
}


// check if a character at a given index is lower case

let str1 = "wsegWRGnrg";
let idx = 3;

if(str[idx]==str[idx].toLowerCase){
    console.log.log("character is lower case");
}
else{
    console.log("character is not lower case");
}

// strip leading and trailing spaces from a string
let str2 = prompt("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

// check if element exists in an array or not
let arr1 = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr1.indexOf(item)!= -1){
    console.log("item exists in array");
}
else{
    console.log("element doesn't exist in array");
}