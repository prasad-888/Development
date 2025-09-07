// square and sum the array elements using the arrow
// function and then find the average of the array.

let sq_sum_avg = ((nums) => {
    sq = nums.map( (num) => num * num);
    
    sum = sq.reduce( (acc, curr) => acc + curr, 0);

    return sum/nums.length;
})


console.log(sq_sum_avg([1,2,3,4,5,6,7,8,9,10]));
