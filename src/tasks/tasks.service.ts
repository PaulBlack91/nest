import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  postTask() {
    return 'POST a task';
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
