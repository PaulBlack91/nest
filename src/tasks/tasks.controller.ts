import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller('/tasks')

export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  postTask() {
    return this.tasksService.postTask();
  }

  @Put()
  putTask() {
    return this.tasksService.putTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  patchTask() {
    return this.tasksService.patchTask();
  }

}