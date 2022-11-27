import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findByCond({ email })
        if (user && user.password === pass) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    makeJwtData(data: { id: number, email: string }) {
        const payload = { email: data.email, sub: data.id }
        return this.jwtService.sign(payload)
    }

    async login(user: User) {
        const { password, ...data } = user
        return { ...data, access_token: this.makeJwtData(data) }
    }
    async register(dto: CreateUserDto) {
        try {
            const { password, ...user } = await this.userService.create(dto)
            return { ...user, access_token: this.makeJwtData(user) }
        } catch (error) {
            throw new ForbiddenException("An error occured during registration")
        }
    }
}
