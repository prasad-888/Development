let num=9;

if(num%10 ==0){
    console.log('good');
}
else{
    print('bad');
}

let name;
let age;

age = prompt('Enter yout age');
name = prompt('Enter your name');

console.alert(`$(name) is $(age) years old`);

let quarter = 2;

switch(quarter){
    case 1:
        console.log('January, February, March');
        break;  
    case 2:
        console.log('April, May, June');
        break;                      
    case 3:
        console.log('July, August, September');
        break;          
    case 4:     
        console.log('October, November, December');
        break;              
    default:
        console.log('Invalid quarter');
}


// golden string if starts with 'A' or 'a' and has a total length greater than 5
let str = 'apple';
if((str.charAt(0) == 'A' || str.charAt(0) == 'a') && str.length > 5){
    console.log('Golden String');
}
else{
    console.log('Not a Golden String');
}


// largest of three numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest;
if(num1>num2 && num1>num3){
    largest = num1;
}
else if(num2>num1 && num2>num3){
    largest = num2;
}
else{
    largest = num3;
}


// check if two numbers have same last digit 2

let num4 = 12;
let num5 = 22;
if(num4%10 == num5%10){
    console.log('Same last digit');
}
else{
    console.log('Different last digit');
}       

