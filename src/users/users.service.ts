import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  private users = []


  getUsers() {
    return this.users;
  }

  postUser(user: CreateUserDto) {
    console.log(user);
    this.users.push({
      ...user,
      id: this.users.length + 1
    });
    return user;
  }
  
}
