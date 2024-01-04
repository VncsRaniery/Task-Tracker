"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskTracker_1 = require("./taskTracker");
var task1 = {
    id: 1,
    title: 'Fazer compras',
    completed: false,
};
var task2 = {
    id: 2,
    title: 'Estudar TypeScript',
    description: 'Construir um projeto de rastreamento de tarefas',
    completed: false,
};
var tracker = new taskTracker_1.TaskTracker();
tracker.addTask(task1);
tracker.addTask(task2);
console.log('Tarefas antes da edição:');
console.log(tracker.getTasks());
tracker.editTask(1, { completed: true });
console.log('Tarefas após a edição:');
console.log(tracker.getTasks());
tracker.deleteTask(2);
console.log('Tarefas após a exclusão:');
console.log(tracker.getTasks());
