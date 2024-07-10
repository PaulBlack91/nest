import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";


@Controller('/tasks')

export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks(@Query() Query: any) {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }


  

  @Post()
  postTask(@Body() task: any) {
       
    return this.tasksService.postTask(task);
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