// for( let i=1; i<=5;i++){
//     console.log(i);
// }

// for( let i=10; i<=5; i=i-3){
//     console.log(i);
// }

// // odd numbers
// for( let i=1; i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

//  even numbers
// for(let i =1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }  

// infinite loops

// for( let i=1; i>0;i++){

// }

// for(let i=1; i<=5; i--){

// }

// for(let i=1; ;i++){
    
// }

// multiplication table of 5
// let n = prompt("Enter a number to print its multiplication table");
// n =parseInt(n);
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }
// n=5;

// for(let i=n;i<=n*10; i=i+n){
//     console.log(i);
// }


// Nested for Loop
// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3;j++){
//         console.log(j); 
    
// }
// }

// while loop

// let i =1;
//  while(i<=5){
//     console.log(i);
//     i++;
//  }

// let i =5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i =0;

// while(i<=20){
//     console.log(i);
//     i++;
// }

// let i =0;

// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// const favMovie = 'Avatar';

// let guess = prompt('Guess the movie');
// while((guess!=favMovie) && (guess!='quit')){
//     if(guess == 'quit'){
//     console.log('you quit');
//     break;
//     }
//     guess = prompt('wrong guess try again');
// }

// if(guess == favMovie){
//     console.log('congrats!!');
// }



// break keyword
// loop execution 

// let i = 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// Loops with Arrays

// let fruits = ["mango", "apple", "banana","litchi","orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

// let heroes = [ 
//     ["ironman","spiderman","thor"], 
//     ["superman","wonder woman", "flash"]
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(`List#${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let student = [ ["aman",95],
//                  ["shraddha",94.4],
//                 ["karan",100]
//             ];

// for(let i=0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
// }
// }


// for of loop

// let fruits = ["mango", "apple", "banana","litchi","orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "college"){
//     console.log(char);
// }

// Nested for of  loop
// let heroes = [["ironman","spiderman","thor"],["superman","wonder man","flash"]];

// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }


