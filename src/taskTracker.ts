// src/taskTracker.ts
import { Task } from './types';

export class TaskTracker {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  editTask(taskId: number, updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    } else {
      console.error(`Tarefa com ID ${taskId} não encontrada.`);
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }
}
