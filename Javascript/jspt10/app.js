// DOM Events
// Events are signal that something has occured( user inputs/ actions)


// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     alert("button was clicked")
// }

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Developer");
// }

// for(btn in btns){
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
//     // btn.onmouseenter = function () {
//     //     console.log("you entered a button");
//     // }
//     console.dir(btn);
// };


// if we set onclick property then it can hold only single value

// on mouse enter property


// addEventListener
// we can make multiple eventlisteners for an object



// let btns = SVGComponentTransferFunctionElement.querySelectorAll("button");

// for(let btn of  btns) {
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked me");
//     })
// }

// let btn = document.querySelector(".MYBTN");
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText =  randomColor;
//     console.log('Color Updated');
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);


//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btns = document.querySelectorAll('button');

// for(let btn of btns){
//     btn.addEventListener("click", function(){
//         let h3 = document.querySelector('h3');
//         let randomColor = getRandomColor();
//         h3.innerText = randomColor;
//         let div = document.querySelector('div');
//         div.style.backgroundColor = randomColor;
//         console.log('Color Updated');
//     });
// }


// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log('paragraph was clicked');
// })

// let box = document.querySelector('.box');
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box");
// })

// this in Event Listener
// When 'this' is used in a callback of event handler of something, it refers to that something.

// let btn = document.querySelector("button");
// let p = document.querySelector('p');
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", changeColor);

// p.addEventListener('click', changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click",changeColor);


// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }


// Keyboard Events

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log(event)
//     console.log("key was pressed")
// })

// inp.addEventListener("keyup", function(){
//     console.log("key was released")
// })

// inp.addEventListener("keydown", function(event){
//     console.log("key =",event.key);
//     console.log("code =",event.code);
//     console.log("key was pressed")
// })

// inp.addEventListener("keydown", function(event){
//     console.log("code =",event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log("character moves backward");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("character moves left");
//     }
//     else if(event.code == "ArrowRight"){
//         console.log("character moves right");
//     }
// })

// inp.addEventListener("keydown", function(event){
//     console.log("code =",event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code == "KeyU"){
//         console.log("character moves up");
//     }
//     else if(event.code == "KeyD"){
//         console.log("character moves down");
//     }
//     else if(event.code == "KeyL"){
//         console.log("character moves left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("character moves right");
//     }
// })

// let form = document.querySelector("form");

// form.addEventListener("submit", function(){
//     event.preventDefault();
//     alert("form submitted");
// })

// form.addEventListener("submit",function(){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);

// })

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
    
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.dir(form);

//     let user = this.elements[0]; // form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });


// More Events
// change event
// The change event occurs when the value of an element has been
// changed (inly works on <input>, <textarea> and <select> elements).

//input event
// The input event fires when the value of an <input>, <select>, or <textarea> element
// has been changed.

// let user = document.querySelector("#user");

// user.addEventListener("submit", function(){
//     event.preventDefault();
// });

// user.addEventListener("change", function(event){
//     console.log("change event");
//     console.log("final value =", this.value);
// });

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value = ", this.value);
// });


// let inp = document.querySelector('#text');
// let p = document.querySelector("p");
// inp.addEventListener("input", function(){
//     // console.log(inp.value);
//     p.innerText = inp.value;
// })

// let inp = document.querySelector('#text');
// MOUSEOUT
// inp.addEventListener("mouseout", function(event){
//     alert("Mouse out");
// })

//KEYPRESS
// inp.addEventListener('keypress', function(){
//     alert('keypress');
// })

//SCROLL
// inp.addEventListener('Scroll',function(){
//     alert('scroll');
// });


// let inp = document.querySelector("input");
// let h2 = document.querySelector("h2");

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     h2.innerText=inp.value;
// });

// let btn = document.querySelector('button');
// console.log('loaded');
// console.log('before pressing reload btn')
// btn.addEventListener('load', function(){
   
// });