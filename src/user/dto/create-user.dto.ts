import { IsEmail, Length } from "class-validator"

export class CreateUserDto {
    name: string;

    @IsEmail(undefined, { message: "Почта некорректна" })
    email: string;

    @Length(8, 35, { message: "Пароль должен быть длиной от 8 до 35 символов" })
    password: string;
}
