// Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6]

const random = Math.floor(Math.random()*6)+1;
console.log(random);

// Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car's name

const car = [
     {
        name:'tata',
        model:'tiago',
        color:'white'
    },
    {
        name:'suzuki',
        model:'invicto',
        color:'gray'
    },
    {
        name:'toyota',
        model:'innova',
        color:'white'
    }
];

console.log(car[0].name, car[1].name, car[2].name);


// Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.

const Person = {
    name:'Raj',
    age:22,
    city: 'pune'
};

console.log(Person);

Person.city = "New York";
Person.country = "United States";

console.log(Person);