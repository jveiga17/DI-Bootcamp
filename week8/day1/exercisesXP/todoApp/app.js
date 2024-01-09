// app.js
import { TodoList } from './todo.js';

// instance of todoList
const myTodoList = new TodoList();

// tasks
myTodoList.addTask('Task 1');
myTodoList.addTask('Task 2');
myTodoList.addTask('Task 3');

// mark some tasks as complete
myTodoList.markTaskAsComplete(0);
myTodoList.markTaskAsComplete(2);

// list tasks
myTodoList.listTasks();
