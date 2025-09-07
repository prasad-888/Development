//Write a function called mergeObjects that accepts two objects
// and return a new object which contains all the keys and values of
// the first object and second object


const mergeObject = ( (obj1, obj2) => {
    return {...obj1, ...obj2};
})


console.log(mergeObject({a:1, b:2}, {c:3,d:4}));