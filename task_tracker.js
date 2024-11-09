const fs = require('fs')
const path = 'task.json'


if(!fs.existsSync(path)){
    fs.writeFileSync(path, JSON.stringify([]));
}

let tasks =JSON.parse(fs.readFileSync(path));

function addTask(taskDescription){
    const task = {id: tasks.length + 1, description: taskDescription,status:'toDo'}
    tasks.push(task);
    fs.writeFileSync(path,JSON.stringify(tasks,null,2));
    console.log(`task added: "${taskDescription}"`);
}

function updateTask(taskID,taskDescription){
    const task = tasks.find(t => t.id === parseInt(taskID, 10));
    if(!task){
        console.log("Task with the specified ID does not exist");
        return;
    }
    task.description = taskDescription;
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
    console.log(`Task with ID: ${taskID} updated to: "${taskDescription}"`);

}

function deleteTask(taskID){
    const originalLength = tasks.length;
    tasks = tasks.filter(t=> t.id != parseInt(taskID,10));
    // tasks =tasks.map((task, index) => ({ ...task, id: index + 1 }));
    if(tasks.length == originalLength){
        console.log("Task with the specified id does not exists");
    }else{
        fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
        console.log(`Task with ID: ${taskID} deleted`);
    }
}


const [command, ...taskArgs] = process.argv.slice(2);

if(command=='add'){
    const taskDescription =taskArgs.join(' ');
    if(taskDescription){
        addTask(taskDescription);
    }else{
        console.log("Please provide a task description")
    }
}
else if(command == 'update'){
    const taskID = taskArgs[0];
    //console.log(typeof(taskID));
    if(taskID){
        const taskDescription = taskArgs.slice(1).join(' ');
        if(taskDescription){
            updateTask(taskID,taskDescription);
        }else{
            console.log("please provide class description");
        }
    }else{
        console.log("Please provide valid ID");
    }
}
else if (command == 'delete'){
    const taskID =taskArgs[0];
    if(taskID){
        deleteTask(taskID);
    }else{
        console.log("Please enter a task ID");
    }
}
else{
    console.log("Usage:\n- To add a task: node task_tracker.js add \"task description\"");
}