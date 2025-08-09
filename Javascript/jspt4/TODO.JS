let todo =[];

let req = value("Please Enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == 'list'){
        console.log("------------------");
        // for(task of todo){
        //     console.log(task);
        // }
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("--------------");
    }
    else if(req == "add"){
        let task = value("please   add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let idx = value(" enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request, only accepts -> list, add, delete, quit"); 
    }
    req = value("Please Enter your request");
}
