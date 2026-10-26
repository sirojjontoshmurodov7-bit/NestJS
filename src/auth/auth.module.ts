import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service.js';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],

  providers: [AuthService],

  exports: [JwtModule, AuthService],
})
export class AuthModule {}
