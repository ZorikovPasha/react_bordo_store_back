import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from "@nestjs/jwt"
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({ 
    secret: process.env.SECRET, 
    signOptions: { expiresIn: "30m" } })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
