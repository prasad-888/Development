// Create a new array using the map function whose each element is equal to the original element plus 5.

let n_arr = ((arr) => 
    {
        return arr.map( (el) => el +5)
    });


console.log(n_arr([1,2,3,4,5]));