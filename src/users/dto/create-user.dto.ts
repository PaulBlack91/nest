import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    age: number;
    @IsNumber()
    @IsNotEmpty()
    phone: string;
    @IsEmail()
    @IsNotEmpty()
    mail: string;
}