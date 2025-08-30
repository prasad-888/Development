// Write an arrow function named isEven()
// that takes a single number as argument 
// and returns if it is even or not.


const isEven =  (n) => {
    if(n%2 == 0){
        return "it is even";
    }
    else{
        return "it is not even";
    }
}

console.log(isEven(6));
console.log(isEven(5));