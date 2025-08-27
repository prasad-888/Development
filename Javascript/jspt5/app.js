// Java script object literal
// used to store keyed collections and complex entities
// property => (key,value) pair
// Objects are a collection of properties

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

let delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"
};

const item = {
    price: 100.99,
    discount: 50,
    colors: ['red','pink']
};

console.log(delhi);

console.log(delhi.latitude);


// Thread/Twitter Post
// create an object literal for the properties of thread twitter post which includes-
// username, content, likes, reposts, tags

const post = {
 username: "@xyz",
 content: "This is my post",
 likes: 150,
 reposts: 5,
 tags: ['@sifgj','@afba','@aeigj']
};

console.log(post)

//  First method to access the key values
console.log(student['age']);
console.log(student['city']);
console.log(student['marks']);
console.log(student['name']);

//  The Second Method
console.log(student.age);
console.log(student.city);
console.log(student.marks);
console.log(student.name);

let prop = "reposts";

console.log(post[prop]); // 5 output
console.log(post.prop); // output undefined

// GET VALUES
// JS automatically converts objects keys to string.
// Even if we made the number as a key, the number will be converted to string.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

console.log(obj);
console.log(obj[1]); // here 1 automatically converts to "1" and maps the "1" in the keys and return values
// the obj[1] is neither a index nor a number it is a string
console.log(obj[null]);
// output for obj[null] will be 'd' and here null is converted to "null" and then accessed the 'd' value

console.log(obj[true],obj[undefined]);
// same they both are converted to string automatically
console.log(obj['true']);
// Using the keys in the string"" also gives us the value

// console.log(obj.1, obj.2, obj.'1', obj.'2'); //Cannot use numbers directly 

console.log(obj.null, obj.true, obj.undefined);


// ADD/ Update Values
//change city to mumbai
//add new property, gender:"Female"
// Change the marks to "A" 

console.log(student);
student.city = "mumbai"; // updated city
student.gender = "female"; // added new property gender
student.marks = "A";

console.log(student);

student.marks = [99, 89, 74];

console.log(student);

// delete obj.KeyName

delete student.marks; //OUtput true

console.log(student);

delete student.city; // output true in console

console.log(student);


// Objects of Object 
// nesting in object literals
// Storing information of multiple students

const classInfo = {
    aman : {
        grade: 'A+',
        city: "Delhi",

    },
    shradha : {
        grade: "A",
        city: "Pune"
    },
    karan : {
        grade: "O",
        city: "Mumbai"
    }
};

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.karan);
console.log(classInfo.shradha);

console.log(classInfo.shradha.city);

classInfo.shradha.city = 'Gurgaon';

console.log(classInfo.shradha.city);

console.log(classInfo.shradha);

// Array of Objects
// Storing information of multiple students

const ClassInformation = [
    {
        name:'aman',
        grade: 'A+',
        city: 'Delhi'

    },
    {
        name: "shradha",
        grade: 'A',
        city: 'Pune'
    },
    {
        name:'karan',
        grade: 'O',
        city: 'Mumbai'
    }

];

console.log(ClassInformation);
console.log(ClassInformation[0]);
console.log(ClassInformation[1]);
console.log(ClassInformation[2]);

console.log(ClassInformation[0].name);
console.log(ClassInformation[0].grade);
console.log(ClassInformation[0].city);

ClassInformation[0].city = "Gurgaon";

console.log(ClassInformation[0].city);

console.log(Math); // object [Math] {}
// Properties of Math
 console.log(Math.PI);
 console.log(Math.E);

 //Method of Math

 console.log(Math.abs(12)); //12
 console.log(Math.abs(-12)); //12
 console.log(Math.abs(-12.5)); // 12.5
 console.log(Math.pow(2,4)); // 2**4 = 16
 console.log(Math.floor(5)); //5
 console.log(Math.floor(5.5)); //5
console.log(Math.floor(5.999999999)); // 5
console.log(Math.floor(-5)); //-5
console.log(Math.floor(-5.5)); //-6

// Math.floor rounds off to nearest smallest int value

console.log(Math.ceil(5)); //5
console.log(Math.ceil(5.5));//6
console.log(Math.ceil(5.0000001)); //6
console.log(Math.ceil(-5)); // -5
console.log(Math.ceil(-5.5)); //-5

// Math.ceil rounds off to nearest largest int value

// Math.random gives value between 0 to 1 and 1 is exclusive

console.log(Math.random());


// Random Integers

let num = Math.random();

num = num * 10;

num = Math.floor(num);

num = num+1;

console.log(num);