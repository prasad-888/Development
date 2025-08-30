// Write a JavaScript function that accepts a list of 
// country names as input and returns the longest country 
// name as output.
let country = ["Australia", "Germany", "United States of America"];
// output: "United States of America"

function longestCountryName(country){
    let ans =country[0];
    for(let i=0;i<country.length-1;i++){
        if((country[i]).length<(country[i+1]).length){
            ans = country[i+1];
        }
    }
    return ans;
}

console.log(longestCountryName(country));