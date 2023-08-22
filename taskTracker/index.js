const readline = require('readline');
console.log("welcome!");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];
function displayTasks() {
    console.log("Tasks");
    for (const taskName in tasks) {
        console.log(tasks);
    }
}

function addTask(taskName){
    tasks[taskName] = { completed: false };
    console.log(`Task "${taskName}" added.`);
}

function markTaskComplete(taskName) {
    if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName].completed = true;
        console.log(`Task "${taskName}" marked as complete.`)
    } else {
        console.log("task not found");
    }
}

r1.on('line', (input) => {
    const args = input.split(' ');
    const command = args[0];

    switch (command){
        case 'add':
            const taskName = args.slice(1).join(' ');
            addTask(taskName);
            break;
        case 'mark':
            const taskNameToMark = args.slice(1).join(' ');
            markTaskComplete(taskNameToMark);
            break;
        case 'display':
            displayTasks();
            break;
        case 'exit':
            r1.close();
            break;
    }
})