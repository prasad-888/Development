// Create a new array whose elements are in uppercase of worrds present in the original array

let n_arr = ( (arr) =>
{
    return arr.map((word) => word.toUpperCase());
}
);

console.log(n_arr( ['adam', 'mac', 'monk','man']));