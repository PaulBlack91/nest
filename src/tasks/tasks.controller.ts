import { Body, Controller, Delete, Get, Param, Patch, Post, Put,UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";



@Controller('/tasks')

export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks( )  {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }
  

  @Post()  
  postTask(@Body() task: CreateTaskDto) {
       
    return this.tasksService.postTask(task);
  }

  @Put()
  putTask(@Body() task: UpdateTaskDto)  {
    return this.tasksService.putTask(task);
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