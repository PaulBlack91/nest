import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';
import { ProjectsController } from './projects/projects.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [TasksModule, AuthModule, ProjectsModule, UsersModule],
  controllers: [TasksController, UsersController, ProjectsController, AuthController],
})
export class AppModule { }
