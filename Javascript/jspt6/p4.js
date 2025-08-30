// Write a JavaScript function to count the number of vowels in a
// String argument.

let str = "Hello World!";

function countVowels(str){
    let count=0;
    for(let i = 0; i<str.length-1;i++){
        if(// "aeiouAEIOU".includes(str.charAt(i))
        
            str.charAt(i) == 'a' ||
            str.charAt(i) == 'e' ||
            str.charAt(i) == 'o' ||
            str.charAt(i) == 'u' ||
            str.charAt(i) == 'i' ||
            str.charAt(i) == 'A' ||
            str.charAt(i) == 'E' ||
            str.charAt(i) == 'I' ||
            str.charAt(i) == 'O' ||
            str.charAt(i) == 'U'
        
        
        ) {
            count++;
        }

    }
    return count;
}

console.log(countVowels(str));