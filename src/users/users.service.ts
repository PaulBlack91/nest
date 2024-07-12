import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { log } from 'console';

@Injectable()
export class UsersService {

  private users = []


  getUsers() {
    return this.users;
  }


  getUser(id: number) {
    const userFound = this.users.find(user => user.id === id);
    if (!userFound) {
      return new NotFoundException(`User with id ${id} not found`);
    }
    return userFound;
  }

  postUser(user: CreateUserDto) {
    console.log(user);
    this.users.push({
      ...user,
      id: this.users.length + 1
    });
    return user;
  }
  

  putUser(user: UpdateUserDto) { 
    console.log(user);   
    return 'PUT a user';
  }
}
