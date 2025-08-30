// Write a JavaScript function to generate a random number within a 
// range(start,end)

let start = 120;
let end = 200;

function randomRangeNumber(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) +start;

}

console.log(randomRangeNumber(start,end));