// Write a JavaScript  function to extract unique characters from a string
// Example: str="abcdabcdefgggh"
// ans = "abcdefgh"
// indexof() method in JavaScript is a built-in function used to find the 
// first occurence of a specified value within a string or an array.
// It returns the index(position) of the first instance of the value,
// or -1 if the value is not found
let str = "abcdabcdefgggh";
function getUnique(str){
    let ans = "";
    for(let i = 0; i< str.length; i++){
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1){
            // if current character is not added, then 
            // add it in ans.
            //Otherwise it is a duplicate
            ans += currChar;
        }
    }
    return ans;
}

console.log(getUnique(str));