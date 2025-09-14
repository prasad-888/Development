// document.getElementsById
// document.getElementsByClassName
// document.getElementByTagName
// document. 
// console.dir()
// document.getElementsByTegName

// Query Selectors
// document.querySelector('p'); // Selects first p element
// document.querySelector('#myId'); // Selects first element with id = myId
// document.querySelector('.myClass'); //Selects first element with class = myClass
// document.querySelectorAll("p"); // Selects all p elements

 
// innerText gives us that content which is on the screen
// innerHTML gives us all the inner markup
// textContent gives us the actual text inside the html document

// Manipulating Attributes
// obj.getQttribute( attr)
// obj.setAttribute(attr, val)

// Manipulating Style
// style Property
// obj.style

// Manipulating Style
// using classList
// use to set class 
// obj.classList

// classList.add() to add new classes
// classList.remove() to remove classes
// classList.contains() to check if class exists
// classList.toggle() to toggle between and & remove
 


// Navigation
// parentElement
//children
//previousElementSibling / nextElementSibling
// childElementCount

// Adding Elements
// document.createElement('p')
// appendChild( element)
// append(element) // string/ text (adds at last)
// prepend( element) // (adds first)
// insertAdjacent( where, element)
// inerAdjecent where parameters
// 1) beforebegin - Before the targetElement itself
// 2) afterbegin - Just inside the targetElement, before its first child
// 3) beforeend -Just inside the targetElement, after its last child.
// 4) afterend - After the targetElement itself

// Removing Elements
// removeChild( element)
// remove(element)

let para = document.createElement('p');

para.innerText = "Hey I'm red!"

document.querySelector('body').append(para);

para.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = " I'm  a blue h3! ";
h3.classList.add('blue');
document.querySelector('body').append(h3);

let divq = document.createElement('div');
divq.classList.add('divq');
 let h1 = document.createElement('h1');
 h1.innerText = " I'm in a div";
 let p = document.createElement('p');
 p.innerText = 'ME TOO!';

 divq.append(h1);
 divq.append(p);

 document.querySelector('body').append(divq);

 let button = document.createElement('button');
 button.innerText = "Click me"
 let input = document.createElement("input");


 document.querySelector('body').append(button);
 document.querySelector('body').append(input);

 button.setAttribute("id", "btn")
 input.setAttribute("placeholder", "username");

 let btn = document.querySelector('#btn');
 btn.classList.add('btnStyle');

 let h11 = document.createElement('h1');
 h11.innerHTML = '<U>DOM Practice<U>';
h11.classList.add('q4')
document.querySelector('body').append(h11);

let p11 = document.createElement('p');
p11.innerHTML = 'JS <B>DOM</B> Practice';
document.querySelector('body').append(p11);
