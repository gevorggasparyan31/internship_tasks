class toDoList {
    constructor() {
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
        console.log(`"${task}" added to list`);
    }

    removeTask(task) {
        const index = this._tasks.indexOf(task);
        if(index !== -1) {
            this._tasks.splice(index,1);
            console.log(`"${task}" removed from list`)
        } else {
            console.log(`"${task}" not found`)
        }
    }

    showTasks() {
        console.log("TASKS");
        for (const task of this._tasks) {
            console.log(`${this._tasks.indexOf(task)} ${task}`);
        }
    }
}

let todo = new toDoList();

todo.addTask("Make todo list app");
todo.addTask("Git add the todo list app");
todo.addTask("Git push the app to github");

todo.showTasks();
