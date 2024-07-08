import { Controller, Get } from '@nestjs/common';

@Controller({})
export class ProjectsController {

  @Get('/')
  getAllProjects() {
    return 'All projects';
  }
}
