import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';



export class UpdateUserDto {

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