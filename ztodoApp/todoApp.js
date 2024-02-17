let todo = [];

var req = prompt("enter the request");

while (true) {
    if (req == "quit") {
        console.log("quitting....");
        break;
    }
    if (req == "list") {
        console.log("---------------------------")
        for (let i = 1; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("---------------------------")
    }
    if (req == "add") {
        let task = prompt("enter the task that you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete") {
        let idx = prompt("enter the task that you want to delete");
        for (let i = 1; i < todo.length; i++) {
            if (idx == i) {
                todo.splice(idx, 1);
                console.log("task deleted");
            }
            else {
                console.log("wrong id");
            }
        }
    } 
     

    var req = prompt("enter the request");
}
 
