import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {

  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }


  postTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
    return task;
  }

  putTask() {
    return 'PUT a task';
  }

  deleteTask() {
    return 'DELETE a task';
  }

  patchTask() {
    return 'PATCH a task';
  }


}
