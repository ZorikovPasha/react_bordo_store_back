import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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

    async login(user: User) {
        const { password, ...data } = user
        const payload = { email: user.email, sub: user.id }
        return { ...data, access_token: this.jwtService.sign(payload) }
    }
}
