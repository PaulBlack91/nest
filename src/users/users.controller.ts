import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UsersController {

 constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    } 
    
    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.usersService.getUser(parseInt(id));
    }
    @Post()
    postUser(@Body() user: CreateUserDto) {
        return this.usersService.postUser(user);
       
    }

    @Put()
    putUser(@Body() user: UpdateUserDto){
        return this.usersService.putUser(user);
    }
    
}


