// Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');


// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    // console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");


    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});  

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();

//     })
// }


// Event Delegation
// type of prog bubbling is used


ul.addEventListener("click", function(event){
    if (event.target.nodeName== "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");

    }
})