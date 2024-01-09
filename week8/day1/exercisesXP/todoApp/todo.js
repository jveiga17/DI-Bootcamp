// export 
export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, complete: false });
    }
  
    markTaskAsComplete(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].complete = true;
      } else {
        console.error('Invalid task index.');
      }
    }
  
    listTasks() {
      console.log('Todo List:');
      this.tasks.forEach((task, index) => {
        const status = task.complete ? 'Complete' : 'Incomplete';
        console.log(`${index + 1}. ${task.task} - ${status}`);
      });
    }
  }
  