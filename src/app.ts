// src/app.ts
import { Task } from './types';
import { TaskTracker } from './taskTracker';

const task1: Task = {
  id: 1,
  title: 'Fazer compras',
  completed: false,
};

const task2: Task = {
  id: 2,
  title: 'Estudar TypeScript',
  description: 'Construir um projeto de rastreamento de tarefas',
  completed: false,
};

const tracker = new TaskTracker();

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
