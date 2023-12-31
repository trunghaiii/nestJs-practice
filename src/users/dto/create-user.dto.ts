import {
    IsNotEmpty,
    IsEmail,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    password: string
}
