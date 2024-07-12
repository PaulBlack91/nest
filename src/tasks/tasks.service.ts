import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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


  postTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
    return task;
  }

  putTask(task: UpdateTaskDto) {
    console.log(task);
    return 'PUT a task';
  }

  deleteTask() {
    return 'DELETE a task';
  }

  patchTask() {
    return 'PATCH a task';
  }


}
