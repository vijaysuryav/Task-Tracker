const fs = require('fs')
const path = 'task.json'


if(!fs.existsSync(path)){
    fs.writeFileSync(path, JSON.stringify([]));
}

let tasks =JSON.parse(fs.readFileSync(path));

function addTask(taskDescription){
    const task = {id: tasks.length + 1, description: taskDescription,status:false}
    tasks.push(task);
    fs.writeFileSync(path,JSON.stringify(tasks,null,2));
    console.log(`task added: "${taskDescription}"`);
}

const args = process.argv.slice(2);

if(args.length > 0 ){
    addTask(args.join(' '));
}else{
    console,log("Please enter a task description");
}